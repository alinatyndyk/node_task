module.exports = {
    PORT: process.env.PORT || 5000,
    MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017/test',

    NO_REPLY_EMAIL: process.env.NO_REPLY_MAIL || 'haisicraisi@gmail.com',
    NO_REPLY_PASSWORD: process.env.NO_REPLY_PASS || 'qvjaspcpnglrmggf',

    NEW_POSITION_URL: process.env.NEW_POSITION_URL || 'http://localhost:5000/positions/'
}