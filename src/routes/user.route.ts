import UserController from '@controllers/user.controller'
import { Router } from 'express'

export default class UserRoutes {
  public router = Router()
  private path = '/users'
  private Controller = new UserController()

  constructor () {
    this.initializeRoutes()
  }

  private initializeRoutes (): void {
    this.router.get(`${this.path}`, this.Controller.index)
    this.router.post(`${this.path}`, this.Controller.store)
  }
}
