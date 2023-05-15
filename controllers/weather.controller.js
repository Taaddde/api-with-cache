const { WeatherService } = require('../services')

const getCurrent = async (req, res) => {
  const { city } = req.params
  const data = await WeatherService.getCurrentByCity(city)

  if (data && data.weather) {
    return res.send({ data })
  } else {
    return res.status(404).send({ data })
  }
}

module.exports = {
  getCurrent,
}
