type Env = {
  PORT: number
}

function loadEnv(): Env {
  const port = process.env.PORT

  if (!port) {
    throw new Error('PORT is not defined')
  }

  const parsedPort = Number(port)
  if (Number.isNaN(parsedPort)) {
    throw new Error('PORT must be a valid number')
  }

  return {
    PORT: Number(port),
  }
}

export const env = loadEnv()