import { configureStore } from '@reduxjs/toolkit'

import authReducer from './auth'
import siteReducer from './site'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    site: siteReducer
  }
})