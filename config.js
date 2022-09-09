const fs = require('fs');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
DATABASE_URL = process.env.DATABASE_URL === undefined ? './bot.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);
module.exports = {
    VERSION: 'V 2.0.1',
    ALIVE: process.env.ALIVE || "https://i.imgur.com/OseHc3b.jpg Hey {sender}, I'm alive \n Uptime: {uptime}",
    SESSION: process.env.SESSION || '',
    HANDLERS: process.env.HANDLERS || '.,',
    GOODBYE_MSG: process.env.GOODBYE_MSG || '{pp}Hi @user It was Nice Seeing you',
    WELCOME_MSG: process.env.WELCOME_MSG || '{pp}Hi @user Welcome to @gname\nYou\'re our @count/513 Members ',
    AUTHOR: process.env.STICKER_DATA || 'ᴀʙᴜ ᴍᴅ',
    PROMOTEMSG: process.env.PROMOTEMSG || '_@user promoted by @promoter_ ',
    AUTHOR: process.env.STICKER_DATA || 'ᴀʙᴜ ᴍᴅ',
    PACKNAME: process.env.PACKNAME || 'ᴀʙᴜ ᴍᴅ',
    BOT_NAME: process.env.BOT_NAME || 'ᴀʙᴜ ᴍᴅ',
    OWNER_NUMBER: process.env.OWNER_NUMBER || '917025994178',
    MODE: process.env.MODE || 'public',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY || '',
        APP_NAME: process.env.HEROKU_APP_NAME || ''
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './bot.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    SUDO: process.env.SUDO || '917025994178',
    LANGUAGE: process.env.LANGUAGE || 'en',
    DEBUG: DEBUG,
    ACR_A: "4b64f4e5401d1380e50b30d526def287",
    ACR_S: "uSVrKResE7wF4d6A1dtqvPWTTy3rBp3YjldsJSCh"
    };
