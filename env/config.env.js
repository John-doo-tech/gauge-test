const ENV = process.env.testEnv || 'prod'
const config = require(`./env.${ENV}.js`)
module.exports = {
    testENV: config
}   
