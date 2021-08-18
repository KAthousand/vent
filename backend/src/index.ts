import * as typeorm from 'typeorm'
import { setupApp } from './config/setupApp'
import { userRouter } from './routers/userRouter'

setupApp( typeorm, {
  routeConfigs: [
    {
      route: '/users',
      router: userRouter
    }
  ]
})