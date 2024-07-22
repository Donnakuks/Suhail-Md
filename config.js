const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_56_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDksXG4gICAgICAgIDg0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3LFxuICAgICAgICAxMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0LFxuICAgICAgICA3LFxuICAgICAgICA5NyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgODAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMSxcbiAgICAgICAgMSxcbiAgICAgICAgMTY2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzksXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDExNixcbiAgICAgICAgOTUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDksXG4gICAgICAgIDMxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDY4LFxuICAgICAgICA5OCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzksXG4gICAgICAgIDE5NixcbiAgICAgICAgNDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDksXG4gICAgICAgIDQzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTkxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTcyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTksXG4gICAgICAgIDI5LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI1LFxuICAgICAgICA1MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1MixcbiAgICAgICAgMjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDg4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTksXG4gICAgICAgIDk1LFxuICAgICAgICA4NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTUsXG4gICAgICAgIDQ0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM5LFxuICAgICAgICA4NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5NixcbiAgICAgICAgNjQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ3cnZGMjMvL1pXVklmZE1DNGFhRW1FdkFyc0o3OTNRbDk0bkc1czFWSjNVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJUVnZ6TnNrR1Q4MjVwaVdHY2R4Zkl3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjYyZDgxMWIzLTI1MWEtNDEyNC04OWI3LTgzOGFlMGMxMzljYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MixcbiAgICAgIDIyNixcbiAgICAgIDExNSxcbiAgICAgIDc0LFxuICAgICAgMjE2LFxuICAgICAgNzAsXG4gICAgICAyMDIsXG4gICAgICA4OSxcbiAgICAgIDIxNSxcbiAgICAgIDM3LFxuICAgICAgNTcsXG4gICAgICAyMzMsXG4gICAgICA4NSxcbiAgICAgIDUzLFxuICAgICAgNjgsXG4gICAgICAyMDYsXG4gICAgICAxODEsXG4gICAgICAxNTYsXG4gICAgICA5MCxcbiAgICAgIDI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM3LFxuICAgICAgMTk3LFxuICAgICAgMTI1LFxuICAgICAgMTEyLFxuICAgICAgMTQzLFxuICAgICAgMTc2LFxuICAgICAgMjA3LFxuICAgICAgMjE0LFxuICAgICAgMjMxLFxuICAgICAgMSxcbiAgICAgIDEwMixcbiAgICAgIDY5LFxuICAgICAgMjA1LFxuICAgICAgNTksXG4gICAgICAzNSxcbiAgICAgIDEsXG4gICAgICAxOTQsXG4gICAgICA1NyxcbiAgICAgIDY2LFxuICAgICAgMjQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBMSDYxQjczXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTYwODg1ODM2OjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzI3NTYyMDk5MTgxMDk6MjBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2ZLdHZZQkVOeU8rN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjbTBhRmpSZnhZVSt4V0trMkVWdEM1eE9LVFdmNUU0SU1TaFVHcU5sY1RNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk9iNmQ0eXdsdW01aW1aMVNQdDJqOUNSZ0w4NEtrR2piNy9iRFFmMW1Bc0k0UjFKZVZPSHcxZC9zTGdaMUllRi9wMzJMbFpFMFM0MkJqSnlNRGdUVkRBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkMrOTR4b0xyOXc3M2g2Yk96dVovV2FmalBCZTBwcWJRM2tQQjBoVlFvS1YvN2YzRFVxQ1RYZ3JwdUY5WWZjVkp5ZlU4K1haa1pCMytiWktFTGFBM2dBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNjA4ODU4MzY6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTY4MTc2MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5hS1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTmFLLmpzb24iOiAie1wia2V5RGF0YVwiOlwicVlzREVpc2p4V0wvQUxEMm9rMkhXMGZCcG1aZWowalhmMmpTRTIrOXlPVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1MTY3OTM2MzgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
