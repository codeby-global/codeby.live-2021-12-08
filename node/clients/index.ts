
   
import { IOClients } from '@vtex/api'

import Slack from './Slack'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get slack() {
    return this.getOrSet('slack', Slack)
  }
}