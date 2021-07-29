import { Context } from 'telegraf'

export function sendHelp(ctx: Context) {
  ctx.setMyCommands([{ command: 'help', description: 'get help' }])
  return ctx.replyWithHTML(ctx.i18n.t('help'))
}
