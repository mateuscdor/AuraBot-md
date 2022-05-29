let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*Pertanyaan:* ${m.text}
*Jawaban:* ${Math.floor(Math.random() * 10)} ${pickRandom(['detik', 'menit', 'jam', 'hari', 'minggu', 'bulan', 'tahun', 'dekade', 'abad'])} lagi ...
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['', 'kah'].map(v => 'kapan' + v + ' <teks>?')
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^kapan(kah)?$/i
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
