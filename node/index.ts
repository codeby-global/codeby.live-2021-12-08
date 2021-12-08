import {
  RecorderState,
  Service,
  ParamsContext,
  method
} from '@vtex/api'

import { Clients } from './clients'
import { sendMessage } from './middlewares/sendMessage'

declare var process: {
  env: {
    VTEX_APP_ID: string
  }
}

export default new Service<Clients, RecorderState, ParamsContext>({
  routes: {
    status: method({
      POST: [sendMessage],
    }),
  }
})