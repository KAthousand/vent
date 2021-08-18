import dotenv from 'dotenv'

export const defaultEnvVars = [
  'DATABASE_HOST',
  'DATABASE_PORT',
  'DATABASE_USERNAME',
  'DATABASE_PASSWORD',
  'DATABASE_NAME',
  'PORT',
  'CORS_ORIGIN',
  'BASE_PATH',
  'ACCESS_TOKEN_KEY',
  'REFRESH_TOKEN_KEY'
] as const

const PRODUCTION_ENV = 'production'
const QA_ENV = 'qa'
const STAGING_ENV = 'staging'
const TEST_ENV = 'test'

export type DefaultEnvKey = typeof defaultEnvVars[number]

const envIs = (value: string ) => process.env.NODE_ENV?.toLowerCase() === value

export class Environment<T extends string> {
  constructor(customValues: readonly T[] = []){
    this.#variables = [...defaultEnvVars, ...customValues]
  }

  #initialized = false

  #variables: (T | DefaultEnvKey)[] = []

  #variableMap = new Map()

  init(){
    dotenv.config()
  
    this.#variables.forEach((key: T | DefaultEnvKey)=>{
      const envValue = process.env[key as string]

      if (typeof envValue === 'undefined'){
        throw Error(`Required environment variable: '${key}', is not set.`)
      } else {
        this.#variableMap.set(key, envValue)
      }
    })

    Object.freeze(this.#variableMap)

    this.#initialized = true
  }

  get(key: DefaultEnvKey | T){
    if (!this.#initialized){
      throw Error("Environment variables haven't been initialized, did you forget to call env.init()?")
    }
    return this.#variableMap.get(key)
  }
  isProduction(){
    return process.env.NODE_ENV?.toLowerCase() === PRODUCTION_ENV
  }

  isDevMode(){
    return !envIs(PRODUCTION_ENV) && !envIs(QA_ENV) && !envIs(STAGING_ENV)
  }

  isTestEnvironment(){
    return envIs(TEST_ENV)
  }


}

export const env = new Environment<DefaultEnvKey>()
