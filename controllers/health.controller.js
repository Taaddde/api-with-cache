
const getHealth = async (req, res) => {
    res.status(200).send({message: "OK"})
}

module.exports = {
  getHealth,
}
