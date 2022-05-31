import 'dotenv/config'
import Express from '@config/express.config'
import ValidateEnv from '@utils/validators/env.validator'

ValidateEnv()

const ExpressInstance = new Express()

ExpressInstance.app.listen(process.env.NODE_PORT, () => {
  console.log(`SERVER STARTS ON ${process.env.NODE_PORT}`)
})
