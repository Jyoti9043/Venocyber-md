//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255625774543";
global.sudo = process.env.SUDO || "255625774543";
global.owner = process.env.OWNER_NUMBER || "255625774543";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://venocyberqr-956a7ad0e005.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0wzQlJpQlJ0SjROd2txc0pCMmtocGxXYzFBNTNFUTYrRzExWE9Rbzlsaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUs5VEIrRmJDUWlnUXNnelJMaG5vZ01ULzJ3dVJJU2NxcjcvTFZCdHNEcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRHpiQUc5SnNUUkthN0RnWGU3UU5yVGJhWjhvK0pHWTVzbENUdTdVVG5rPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqWURNdVYrOTh0dGYxN2pUNEFUZE9Ob1UrWkdycERpMWpGMTRPZ0pCb0hnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlHMERVMEdUWHliYXVFYlZWTWdaMFJmdngvYzVERDVON0FNT0NKc094RzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijg5WXZSK3NSS0tlUDloczFSNExMYXRCMlVyTUhQOGV2ZDZUTFVFVFY2U0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUh6cXkvcldveC96OFIyRmFKYVVJdnFPZGVGQTMzR2FPa0FaU3VzbmtWbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSTczaHNvWUFNSDNpMzFoc2x4TkFvaHhMN2hCcmlqYW80YXBkMzYyM0RSST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ild6TDIrNURyTmJqTG1DVTRYVVFxUnl6MUluQkRpeTBrZjNyaktTU1dKVWh6LzBFME96NWtBbEZZMHpCWHBNWjNld0JySW1rMmZyc1N1UGFzZmpVV2p3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE5LCJhZHZTZWNyZXRLZXkiOiJvN1UvczNzYlFsUjF2Zzg2cTA0TGhKT3h2NVFCM1FDOGdLb3VLekd4UmgwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJvNUR3YzdLMlF6V2hXY3g5bmVTZTF3IiwicGhvbmVJZCI6ImM0NTY2OTIxLWI1M2MtNGFiYS04NGVkLTViZTM4Zjc0MjQ4MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqOHJLaERKNEFhem96eSt0QzREQUlFb016Vkk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaHQvNzNyTzZ1MkVMSlIwK3RMemZVUkhYZVNvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkpGRDg1WExBIiwibWUiOnsiaWQiOiI5MTgxMzMwOTg2OTM6MTdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi2YPZhCDZhNit2LjYqSDZhdmGINit2YrYp9iq2Yog2YfZiiDYqNin2LPZhdmDIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOTE00TjRIRUoyKzg3RUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI3blJ6YS81ZzlnUloyQ0EwNE9sM0xySjJnQ2RPMG96ZE1vWStGbUFDUkc4PSIsImFjY291bnRTaWduYXR1cmUiOiI1bnZWbWY0Q29NUVYwSWRBREFYSnJqWTdBaVNZL1dCcUxYQTlYdEJibzd1L1JKUGsxVnlnTzJNUU5mWTZ2RFdpaXl3bnZpcCtjMDk1ZGFLeE9ySVFEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiT3ZHdTB3YXhhb3pkR3V1Q0V2MS9BV3FFa1E5V0s5S2tDUVIrajRsWkxCdUtteWphR3FUVDBMQVBtOEk0MDkyanp4dy8wZGVFM1lzN1JsR0pyOVIraHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTgxMzMwOTg2OTM6MTdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZTUwYzJ2K1lQWUVXZGdnTk9EcGR5Nnlkb0FuVHRLTTNUS0dQaFpnQWtSdiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNTI2NTMyMn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-VENOCYBER-𝐌𝐃😍 with supported by he.is.me checked by Wasi-ser | oyyy enjoy safe chuddy buddy any problem then https://rb.gy/izabex | don't worry we are not here to ban your accounts 😁 🦜🌝 ( https://rb.gy/izabex )",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
