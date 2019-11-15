const Redis = require("ioredis");

module.exports = new Redis(process.env.REDIS_CONNECTION_STRING);
