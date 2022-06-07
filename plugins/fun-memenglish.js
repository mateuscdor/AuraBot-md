let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
  let res = await fetch(global.API('https://some-random-api.ml', '/meme'))
  if (!res.ok) throw eror
  let json = await res.json()
  if (!json.image) throw 'Err!'
  let thumbnail = await (await fetch(json.image)).buffer()
  conn.sendFile(m.chat, json.image, 'meme.png', json.caption, m, 0, { thumbnail })
}

handler.help = ['memenglish']
handler.tags = ['fun']

handler.command = /^(memenglish)$/i

module.exports = handler