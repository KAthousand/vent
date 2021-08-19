import * as typeorm from 'typeorm'
import { setupApp } from './config/setupApp'
import { commentRouter } from './routers/commentRouter'
import { postRouter } from './routers/postRouter'
import { userRouter } from './routers/userRouter'

setupApp( typeorm, {
  routeConfigs: [
    {
      route: '/users',
      router: userRouter
    },
    {
      route: '/posts',
      router: postRouter
    },
    {
      route: '/comments',
      router: commentRouter
    }
  ]
})