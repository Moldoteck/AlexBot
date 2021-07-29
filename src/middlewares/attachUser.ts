import { findUser } from '@/models'
import { Context } from 'telegraf'

export async function attachUser(ctx: Context, next: () => void) {
  ctx.dbuser = await findUser(ctx.from.id)
  ctx.setMyCommands([{ command: 'help', description: 'get help' }])
  return next()
}
