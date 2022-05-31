import HttpException from '@utils/exceptions/http.exception'
import UserService from '@services/user.service'
import { Request, Response, NextFunction } from 'express'

export default class UserController {
  private Service = new UserService()

  public index = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      return res.status(200).send('Deu bom pra carai')
    } catch (error) {
      next(new HttpException(500, 'Something went wrong!'))
    }
  }

  public store = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const { name, email } = req.body
      const user = await this.Service.store(name, email)
      return res.status(201).send(user.id)
    } catch (error) {
      next(new HttpException(500, 'Something went wrong!'))
    }
  }
}
