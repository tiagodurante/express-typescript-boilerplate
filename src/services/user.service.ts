import UserModel from '@models/user.model'
import User from '@interfaces/user.interface'

export default class UserService {
  private user = UserModel

  public async store (name: string, email: string): Promise<User> {
    try {
      return await this.user.create({
        name, email
      })
    } catch (error) {
      throw new Error('Unable to create user')
    }
  }
}
