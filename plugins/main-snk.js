const uploadImage = require('../lib/uploadImage')
let fetch = require('node-fetch')

let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
    let caption = `
❖ *Kebijakan Privasi, Syarat Ketentuan dan Peraturan AuraBot* ❖

◉ [ *Kebijakan Privasi* ]
1. AuraBot tidak akan merekam data riwayat chat user.
2. AuraBot tidak akan menyebarkan nomor users.
3. AuraBot tidak akan menyimpan media yang dikirimkan oleh users.
4. AuraBot tidak akan menyalah gunakan data data users.
5. Owner AuraBot berhak melihat data riwayat chat users.
6. Owner AuraBot berhak melihat status users.
7. Owner AuraBot dapat melihat riwayat chat, dan media yang dikirimkan users.

◉ [ *Peraturan AuraBot* ]
1. Users dilarang menelpon maupun memvideo call nomor bot.
2. Users dilarang mengirimkan berbagai bug, virtex, dll ke nomor bot.
3. Users diharap tidak melakukan spam dalam penggunaan bot.
4. Users dilarang menambahkan nomor bot secara illegal, untuk menambahkan silahkan hubungi owner.
5. Users diharap untuk tidak menyalah gunakan fitur fitur bot.

◉ [ *Syarat Ketentuan AuraBot* ]
1. Bot akan keluar dari group apabila sudah waktunya keluar.
2. AuraBot dapan mem-ban users secara sepihak terlepas dari users salah atau tidak.
3. AuraBot *tidak akan bertanggungjawab atas apapun yang users lakukan terhadap fitur bot.*
4. AuraBot akan memberlakukan hukuman: block atau ban terhadap users yang melanggar peraturan.
5. AuraBot bertanggung jawab atas kesalahan fatal dalam programing maupun owner.

-AuraBot
-Muhammad Rifai
Peraturan: 10 Januari 2022
`.trim()
    let pp = await(await fetch('https://telegra.ph/file/39bbded9693c9338069fd.jpg')).buffer()
    try {
      pp = await ( await fetch(await conn.getProfilePicture(who))).buffer()
    } catch (e) {
    } finally {
      await conn.reply(m.chat, caption, m, { contextInfo: {
        externalAdReply: {
          mediaUrl: 'https://youtu.be/-tKVN2mAKRI',
          title: user.name,
          body: 'AuraBot',
          thumbnail: pp
        }
    }})
  }
}
handler.help = ['peraturan']
handler.command = /^(snk|syarat|peraturan|rules)$/i
handler.tags = ['main']
module.exports = handler
