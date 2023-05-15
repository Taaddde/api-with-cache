const { HealthController } = require('../controllers')

module.exports = (fastify, _, done = () => {}) => {
  fastify.get('/', HealthController.getHealth)
  
  done()
}
