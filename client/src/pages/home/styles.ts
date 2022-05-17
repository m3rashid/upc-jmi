import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  wrapper: {
    marginTop: theme.spacing.xl * 2,
    marginBottom: theme.spacing.xl * 4,
  },

  title: {
    fontWeight: 800,
    fontSize: 40,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.gray[1]
        : theme.colors.dark[5],
    marginBottom: theme.spacing.xs,
    textAlign: 'center',

    '@media (max-width: 520px)': {
      fontSize: 28,
    },
  },

  highlight: {
    color: theme.colors.brand,
  },

  description: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.gray[1]
        : theme.colors.dark[5],
    textAlign: 'center',
  },
}))
