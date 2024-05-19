from fastapi import APIRouter

from api.routers.endpoints.carts import router as carts_router

router = APIRouter(prefix="/api")
router.include_router(carts_router, prefix="/cart", tags=["cart"])
