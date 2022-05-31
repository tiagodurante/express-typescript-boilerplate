import express, { Application } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import morgan from 'morgan'
import ErrorMiddleware from '@middlewares/error.middleware'

import UserRoutes from '@routes/user.route'

export default class Express {
  public app: Application

  constructor () {
    this.app = express()

    this.initializeMiddleware()
    this.initializeErrorHandling()
    this.initializeDbConnection()
    this.initializeRoutes()
  }

  private initializeErrorHandling (): void {
    this.app.use(ErrorMiddleware)
  }

  private initializeMiddleware (): void {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: false }))
    this.app.use(cors())
    this.app.use(helmet())
    this.app.use(compression())
    this.app.use(morgan('dev'))
  }

  private initializeRoutes (): void {
    this.app.use('/api', new UserRoutes().router)
    this.app.get('/', (request, response) => response.json({ msg: 'hello world' }))
  }

  private initializeDbConnection (): void {
    mongoose.connect(`mongodb://${process.env.MONGO_URL}`)
  }
}
