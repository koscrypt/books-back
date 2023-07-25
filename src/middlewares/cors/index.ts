import type { CorsOptions } from 'cors'

import Log from '../logger'

const whitelist: string[] = ['http://localhost:4000', 'http://localhost:3000', 'https://leafy-loader-393200.rj.r.appspot.com', 'http://localhost:4200']

const corsConfig = {
  origin: function (origin: string, response: (res: string | null, cont?: boolean) => void) {
    if (whitelist.includes(origin) || origin === undefined) {
      response(null, true)
    } else {
      Log.error('Origin not allowed ' + origin)
      response('Origin not allowed')
    }
  }
}

export default corsConfig as CorsOptions
