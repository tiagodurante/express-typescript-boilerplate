import { Schema, model } from 'mongoose'
import User from '@interfaces/user.interface'

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
}, { timestamps: true })

export default model<User>('User', UserSchema)
