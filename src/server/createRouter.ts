import { router } from '@trpc/server'
import superjson from 'superjson'

import { Context } from 'server/createContext'

export const createRouter = () => router<Context>().transformer(superjson)
