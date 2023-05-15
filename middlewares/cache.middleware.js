const { RedisService } = require('../services')

const storeInCache = async (req, res, payload) => {
    RedisService.set(req.url + req.params, res.statusCode, payload.toString())
}

const caching = async (req, res, next) => {
    const cache = await RedisService.get(req.url + req.params);
    if (cache) {
        const {statusCode, payload} = cache;
        res.status(statusCode).send(payload);
    } else {
        next()
    }
}


module.exports = {
    caching,
    storeInCache
}


