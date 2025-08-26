const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFBaQmkxTEdjVHVubmRIbFk5Z1pmTWwxYzlxL3dZeldtamM4QXZ0VzRHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0VnM0FiYkRycEtocG5PM3BsQkFHQkJUL1dHOTkzdUt0SUxxME1xQ1J3ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvQm0wUzIzMGZwdDRxUSs1OWVKSUZkZjNCZjJ0RVNxZmVBUXJEOFlaSTBnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJET3VjditHMXZYc3NJUC9iWHNjbGoyQkpOK2RVOVF3UjBEbmM2a2h3ZEQwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFNVkhLa3pHSzRyc2pmcDN6Wm5LRm4vZjA0d0ZzMHkzS013SEZ0ZldWa0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZ4dnhFWFVTQnIxUSthY0V6ZDhoaGxKTGxMR3R4YVNON205YU1sazRGUWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUJ4WWZIZFFOMFV5eURjbnc2aWh2MUJyc3V3Z2pBNDEvSUk3YlIreG8wTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ3pRNGUrUms0Z3QxZnYrSFZqdWtWK040OFkyZG90d2x5ZGdDUkppL25CST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik0rdXhvYjlmb1dDempTSHhWd2d1b0kzb1hzbkpLZzN1L3JYNityZTcxVlJuUkR4VEM4SlRkNUdYNVJZQ052eXUrUVpwUDJZd1lKTEsxRTAzcldxVkFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDUsImFkdlNlY3JldEtleSI6IjlSY2VhY0xiSkMyOXBxUnRxTjFzSmVtcGNFTUlZUE5OSFVMcW0yRDVTUUE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjc5NTc3MDA2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjE2MEQzODg1NjRFNTgyMzVGQUZCRTA3QkQxMkIwNzg2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTYyMTA5MzB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzI3OTU3NzAwNkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0NjM5M0NBMDRDQjhDNzY1NkJDQzNDMkQ3N0UyQ0Q0NiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2MjEwOTMwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMyNzk1NzcwMDZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMEVDMERGQ0MxOUQzRjg5Q0E5N0M4M0U3MzBDMkFDOEUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NjIxMDkzM31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiRVNLNlk3QUYiLCJtZSI6eyJpZCI6IjkyMzI3OTU3NzAwNjoxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjQ4OTMyMzk1NDQ2NDEwOjFAbGlkIiwibmFtZSI6IvCfq7AifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09mUWlaSUhFTzNOdHNVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im5aNHR4WTkzZVZLOGpCMzZNYVFqQ1VwdkR0d0VCd293UW1CZHAveGRsUzQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImxsaVJpaFkwbUtHbFlRU1RDSXpDUGxPejJTNTJMa0tYaXVvSFRFZ2xHSDE1bFR2bVRMWDMwQ1hOZHo0NTFhdkRaaE9jTkIxUFVnUXZGS1hmZUJHL0FBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ2ejBvaklIRnVKcTNmQlhQbXhKb25OaythSlBSTnZ3RytDMkVSVGUxVlJYbmlzMUgvWkwxTW5Vd09sbEhSRTFuVVlXSk5xZ2xrdGtFdUhWYXFoK1dBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzI3OTU3NzAwNjoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQloyZUxjV1BkM2xTdkl3ZCtqR2tJd2xLYnc3Y0JBY0tNRUpnWGFmOFhaVXUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjIxMDkyOCwibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDeGgifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝙀3_𝙃𝘼𝘾𝙆𝙀𝙍_𝙈𝘿 ♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/p4yxcn.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "E3_HACKER_MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝙀3_𝙃𝘼𝘾𝙆𝙀𝙍_𝙈𝘿",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923495178663",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*E3_HACKER_MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ E3_HACKER_MD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/p4yxcn.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Apni Had May Raho Batmeez Insan 🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
