import type { InstanceOptions, IOContext } from '@vtex/api'
import { SLACK_TOKEN } from "../../utils/constants.js"
import { ExternalClient } from '@vtex/api'

export default class Slack extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://slack.com/api/', context, {
      ...options,
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${SLACK_TOKEN}`
      }
    })
  }

  public async postMessage(message: string, username: string): Promise<string> {
    return this.http.post("chat.postMessage", {
      text: message,
      username: username
    },{
      metric: 'messate-post',
    })
  }
}
