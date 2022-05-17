import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontWeight: 700,
    fontSize: theme.fontSizes.xl,
    textAlign: 'center',
  },

  body: {
    padding: theme.spacing.md,
    textAlign: 'center',
  },

  group: {
    flexDirection: 'column',
  },
}))
