import type { InstanceOptions, IOContext, IOResponse } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class Slack extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://slack.com/api/', context, options)
  }

  public async postMessage(message: string): Promise<string> {
    return this.http.get("chat.postMessage", {
      metric: 'messate-post',
    })
  }
}
