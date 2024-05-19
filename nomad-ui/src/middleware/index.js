import middlewarePipeline from 'src/middleware/pipeline'

export default async function middlewares(to, from, next) {
  /** Navigate to next if middleware is not applied */
  if (!to.meta.middlewares) {
    return next()
  }
  const middleware = to.meta.middlewares
  const context = {
    to,
    from,
    next
    // store  | You can also pass store as an argument
  }
  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  })
}
