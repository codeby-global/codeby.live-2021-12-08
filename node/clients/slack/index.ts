import type { InstanceOptions, IOContext, IOResponse } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class Slack extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://slack.com/api/', context, options)
  }

  public async getStatus(status: number): Promise<string> {
    return this.http.get(status.toString(), {
      metric: 'status-get',
    })
  }
}
