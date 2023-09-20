import { configureStore } from '@reduxjs/toolkit'

import authReducer from './auth'
import siteReducer from './site'

export default configureStore({
  reducer: {
    auth: authReducer,
    site: siteReducer
  }
})