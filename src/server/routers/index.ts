export const appRouter = createRouter()
  .merge('users.', userRouter)
  .merge('projects.', projectsRouter)

export type AppRouter = typeof appRouter
