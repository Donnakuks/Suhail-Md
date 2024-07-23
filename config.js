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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_49_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxODIsXG4gICAgICAgIDI1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTkwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjksXG4gICAgICAgIDYyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTMzLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAzNixcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwLFxuICAgICAgICAzMixcbiAgICAgICAgMTA3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAzMixcbiAgICAgICAgNDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEzLFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDcyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNyxcbiAgICAgICAgODUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMxLFxuICAgICAgICA3OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDQxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjUzLFxuICAgICAgICA0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA5LFxuICAgICAgICA4MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzAsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTEsXG4gICAgICAgIDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE0LFxuICAgICAgICAxODQsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAzLFxuICAgICAgICA3NixcbiAgICAgICAgMjAxLFxuICAgICAgICAzNixcbiAgICAgICAgMjM5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM1LFxuICAgICAgICA0MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMixcbiAgICAgICAgMzgsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDgyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMCxcbiAgICAgICAgMyxcbiAgICAgICAgODQsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMixcbiAgICAgICAgMjEwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDgwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDYyLFxuICAgICAgICAyMixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjQxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJnWk1mMm9EQUdWdElQZG5ILzVmQkZEcU4wV3VJVDNEZmpQNFd6djNKd280PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ6OU1YY1lFYlRpbUItbVBqMjVlSmxBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjIyMTFiYTAxLWFiMDUtNDBlZC04M2M3LWE1NWY4OTA4ZmRiZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDksXG4gICAgICA0OCxcbiAgICAgIDEyOCxcbiAgICAgIDIxNCxcbiAgICAgIDE3MixcbiAgICAgIDIwLFxuICAgICAgMTMzLFxuICAgICAgMTE5LFxuICAgICAgNDgsXG4gICAgICAxNjksXG4gICAgICAyMSxcbiAgICAgIDIyNixcbiAgICAgIDE2MCxcbiAgICAgIDIyLFxuICAgICAgNjUsXG4gICAgICA5OSxcbiAgICAgIDE5NCxcbiAgICAgIDgwLFxuICAgICAgMjM1LFxuICAgICAgMTkyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOSxcbiAgICAgIDE5MSxcbiAgICAgIDE0NSxcbiAgICAgIDM5LFxuICAgICAgMCxcbiAgICAgIDExMyxcbiAgICAgIDE1NixcbiAgICAgIDIxNCxcbiAgICAgIDIwMSxcbiAgICAgIDQ2LFxuICAgICAgMTAxLFxuICAgICAgMTUwLFxuICAgICAgMjI3LFxuICAgICAgMjI5LFxuICAgICAgOTIsXG4gICAgICAyMTQsXG4gICAgICA1OCxcbiAgICAgIDE1MCxcbiAgICAgIDExNyxcbiAgICAgIDE0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJOR0VER1ZTOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwMjkxNDU4MTo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTUzMzA5ODU0NzIyMjc6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPdjcrOVFIRUtuZC9iUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjI1L1l3aVcrZHprenpPeXJadk5ZbzBjb3oybWVYZmtOeXYvUDNvZkVjSHc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNXYxNGplNTlQWlRMdTE5MDFNbEYxd01PdG96Wm91RllFNWdzamhIdUV0bUtnbWR5SVFzb3ZSN2wwZ25wTWw0VllwMXZyd3g4dFpZOEMrcWViRW9VQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSnRKbHhMU0FCT0o0YUVIclNFRnIrMVVRdFBoQjdKQzBSS3RGNit1cEdGVG9rdXY3YUcrcW5LQmVsYUU5dEdvb2JzeUFxNlU0OGhXRG9vMldVVTA0Z0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEwMjkxNDU4MTo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTcyNDU4OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdJZ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR0lnLmpzb24iOiAie1wia2V5RGF0YVwiOlwiR1pSQ3hiODBmY1NIQ1J0dGdoQll6MWlsdENQbjJDRERBZGFSRG9jaXdtbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDU3MjQwMDQwLFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwyLDMsNF19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "UR ZADDIE😼💥",
  ownername:process.env.OWNER_NAME|| "UR ZADDIE🔪🔪🔪",


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
