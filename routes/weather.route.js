const { WeatherController } = require('../controllers')
const { CacheMiddleware } = require('../middlewares')

module.exports = (fastify, _, done = () => {}) => {
  fastify.get('/current/:city', {preHandler: CacheMiddleware.caching}, WeatherController.getCurrent)
  fastify.addHook('onSend', CacheMiddleware.storeInCache);

  done()
}
