interface IAppConfig {
  corsOptions: {
    origin: string
    optionsSuccessStatus: number
  }
  mongo: {
    connectionString: string
  }
}

let appConfig: IAppConfig
if (process.env.NODE_ENV === 'production') {
  appConfig = {
    corsOptions: {
      origin: 'http://localhost:3000',
      optionsSuccessStatus: 200,
    },
    mongo: {
      connectionString: 'mongodb://localhost/upcjmi',
    },
  }
} else {
  appConfig = {
    corsOptions: {
      origin: 'http://localhost:3000',
      optionsSuccessStatus: 200,
    },
    mongo: {
      connectionString: 'mongodb://localhost/upcjmi',
    },
  }
}

export { appConfig }
