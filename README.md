# Bot
Discord Bot
require('dotenv').config()

module.exports = {
  token: process.env.TOKEN, // process the bot token from env file soo make a file outside all the files but in the bot source folder name it ".env" and type inside "TOKEN=Your Discord Bot Token"
  mongoPath: process.env.mongoPath, // process the mongo path from env file soo go to your .env file and type inside "mongoPath=Your Mongo Path"
  prefix: "$" // just delete the "$" and replace it with your bot prefix
};
