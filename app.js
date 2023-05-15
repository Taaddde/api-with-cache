require('dotenv').config()
const fastify = require('fastify')

const { WeatherRoute, HealthRoute } = require('./routes')

// Configurar Fastify
const build = (opts = {}) => {
  const app = fastify(opts)

  app.register(HealthRoute, { prefix: '/' })
  app.register(WeatherRoute, { prefix: '/' })

  return app
}

module.exports = { build }
