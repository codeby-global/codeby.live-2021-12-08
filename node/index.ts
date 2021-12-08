import {
  RecorderState,
  Service,
  ParamsContext
} from '@vtex/api'

import { Clients } from './clients'
import { mutations, queries } from './resolvers'

declare var process: {
  env: {
    VTEX_APP_ID: string
  }
}

export default new Service<Clients, RecorderState, ParamsContext>({
  graphql: {
    resolvers: {
      Mutation: {
        ...mutations,
      },
      Query: {
        ...queries,
      },
    },
  },
})