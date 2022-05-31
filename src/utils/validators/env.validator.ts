import { cleanEnv, str, port } from 'envalid'

export default function ValidateEnv (): void {
  cleanEnv(process.env, {
    NODE_ENV: str({
      choices: ['development', 'production']
    }),
    MONGO_URL: str(),
    NODE_PORT: port({ default: 3333 })
  })
}
