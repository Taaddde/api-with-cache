const { build } = require('./app.js')
const app = build({ logger: false })

app.listen({port: process.env.PORT || 3000, host: process.env.HOSTNAME || '0.0.0.0'}, (err, address) => {
  if (err) {
    console.log(err)
    process.exit(1)
  }
  console.info(`Server ready in port ${address}`)
})