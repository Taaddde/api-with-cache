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

module.exports = {
  getCurrentByCity,
}
