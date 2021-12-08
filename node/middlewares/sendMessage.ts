export async function sendMessage(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { slack },
  } = ctx

  console.info('Received')
  const message = "Hello"
  const username = "samurai"
  const messageResponse = await slack.postMessage(message, username)

  console.info('Message response:', messageResponse)

  ctx.status = 200
  ctx.body = messageResponse
  await next()
}