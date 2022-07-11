import bcrypt from 'bcrypt'
import NextAuth from 'next-auth'
import CredentialProvider from 'next-auth/providers/credentials'

import { prisma } from 'utils/prisma'
import { IUser } from 'components/helpers/types'

export default NextAuth({
  providers: [
    CredentialProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials) return null

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        })
        if (!user) return null

        const match = await bcrypt.compare(credentials.password, user.password)
        if (!match) return null
        return user
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        const data: IUser = {
          id: parseInt(user.id),
          name: user.name as string,
          email: user.email as string,
          role: user.role as IUser['role'],
        }
        token.id = user.id
        token.sub = JSON.stringify(data)
      }
      return token
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id
        session.user = JSON.parse(token.sub ?? '') as IUser
      }
      return session
    },
  },
  secret: process.env.AUTH_SECRET,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  pages: {
    signIn: '/auth/login',
  },
})
