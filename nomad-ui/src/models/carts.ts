import ProductType from './products'

export default interface CartType {
    discountedTotal: number,
    id: number,
    products: ProductType[],
    total: number,
    totalProducts: number,
    totalQuantity: number,
    userId: number
}
