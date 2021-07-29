import { Context } from 'telegraf'
let alex = require('alex')

export function checkText(ctx: Context) {
  if ('text' in ctx.message) {
    let messages = alex.text(ctx.message.text).messages
    if (messages.length > 0) {
      let reasons = messages.map(m => m.message)
      reasons = reasons.join('\n')
      ctx.reply(reasons, { reply_to_message_id: ctx.message.message_id })
    }
  }
}
