import math
from typing import List
from fastapi import APIRouter
import aiohttp
import logging

router = APIRouter()

dummyUrl = "https://dummyjson.com/products"

logger = logging.getLogger('uvicorn.info')
logger.setLevel(logging.INFO)

async def get_products(*, session, skip: int, limit: int):
    """Request to get paginated products."""
    async with session.get(f'{dummyUrl}/?skip={skip}&limit={limit}&select=id,title,price,discountPercentage,rating,stock') as response:
        return await response.json()

@router.post("/")
async def check_cart(cart_data: List[dict]):
    """Request to check if cart is valid or not."""
    sales_cart = []
    skip_value = 0
    carts_data_ids = [product['productId'] for product in cart_data]
    while True:
        async with aiohttp.ClientSession() as session:
            response = await get_products(session=session, skip=skip_value, limit=10)
        products = response['products']
        if (len(products) == 0): # to do more general
            break
        filter_products = list(filter(lambda product: product['id'] in carts_data_ids, products))
        sales_cart.extend([
            {
                **product,
                'real_stock': math.floor(product['stock'] / product['rating']),
                'quantity': list(filter(lambda p: p['productId'] == product['id'], cart_data))[0]['quantity']
            }
        for product in filter_products])
        skip_value += 10
    logger.info(sales_cart)
    return {"toGenerate": len(list(filter(lambda product: product['real_stock'] <= 0, sales_cart))) == 0}
