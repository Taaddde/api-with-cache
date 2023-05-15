const getCurrentByCity = async (city) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_KEY}&units=metric`

  try {
    const response = await fetch(url)
    const data = await response.json()

    return data
  } catch (error) {
    console.error(error)
    return null
  }
}

const getCurrentByCoords = async (lat, lon) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_KEY}&units=metric`

  try {
    const response = await fetch(url)
    const data = await response.json()

    return data
  } catch (error) {
    console.error(error)
    return null
  }
}

const getForecastByCity = async (city) => {
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.OPENWEATHER_KEY}&units=metric`

  try {
    const response = await fetch(url)
    const data = await response.json()

    return data
  } catch (error) {
    console.error(error)
    return null
  }
}

const getForecastByCoords = async (lat, lon) => {
  const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_KEY}&units=metric`

  try {
    const response = await fetch(url)
    const data = await response.json()

    return data
  } catch (error) {
    console.error(error)
    return null
  }
}

module.exports = {
  getCurrentByCity,
  getCurrentByCoords,
  getForecastByCity,
  getForecastByCoords
}
