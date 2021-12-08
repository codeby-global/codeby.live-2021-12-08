import {
  // ParamsContext,
  RecorderState,
  ServiceContext,
} from '@vtex/api'

import { Clients } from "../clients"

declare global {
  type Context = ServiceContext<Clients>

  interface State extends RecorderState {
    locale: string
  }
}