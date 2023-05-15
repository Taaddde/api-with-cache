const redis = require('redis');
const md5 = require('md5');

const client = redis.createClient({
    host: 'localhost',
    port: 6379,
});

client.on('connect', () => {
    console.log(`Conexión exitosa a Redis`);
});
client.on('error', (error) => {
    console.error('Error al conectar a Redis:', error);
});

const set = (dataForKey, statusCode, payload) => {
    const value = {statusCode, payload};
    const key = md5(dataForKey);
    client.setnx(key, JSON.stringify(value), (error, reply) => {
        if (reply === 1) client.expire(key, 60, () => {});
    });
}

const get = async (data) => {
    const value = await new Promise(function (resolve) {
        const key = md5(typeof data === 'string' ? data : JSON.stringify(data));
        client.get(key, (error, value) => {
            if (error) {
              resolve(false);
            } else {
              try {
                const parsedValue = JSON.parse(value);
                resolve(parsedValue);
              } catch (error) {
                resolve(value);
              }
            }
        });
    })

    return value;
}

module.exports = {
    set,
    get
}