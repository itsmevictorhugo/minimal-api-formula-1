import 'dotenv/config'
import { env } from './config/env'

async function startServer() {
  try {
    console.log(`Server running on port ${env.PORT}`)
  } catch (error) {
    console.error('Failed to start application', error)
    process.exit(1)
  }
}

startServer()