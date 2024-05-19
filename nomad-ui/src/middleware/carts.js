/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCartsStore } from 'src/stores/carts'

export default async function requireCartMiddleware({ to, next }) {
  const cartStore = useCartsStore()

  if (cartStore.currentCart.products?.length > 0) {
    return next()
  } else {
    return next({ name: 'home' })
  }
}
