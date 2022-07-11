import { createStyles } from '@mantine/core'

export const HEADER_HEIGHT = 70
export const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },

  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    cursor: 'pointer',
  },

  logo: {
    height: '100%',
    marginRight: '20px',
  },

  upcjmi: {
    fontSize: 30,
    fontWeight: 700,
  },

  dropdown: {
    position: 'absolute',
    top: `calc(${HEADER_HEIGHT}px + 10px)`,
    left: '8px',
    borderRadius: '5px',
    right: '8px',
    zIndex: 0,
    borderTopWidth: 0,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    padding: '10px 0',
    flexWrap: 'wrap',
    [theme.fn.largerThan('md')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('md')]: {
      display: 'none',
    },
  },

  control: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[8]
        : theme.colors.gray[0],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 1000,
    paddingLeft: theme.spacing.sm,
    paddingRight: 4,
    width: 136,
    height: 36,
  },

  iconWrapper: {
    height: 30,
    width: 30,
    borderRadius: 28,
    marginLeft: theme.spacing.xs,
    cursor: 'pointer',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.yellow[4]
        : theme.colors.dark[4],
    color: theme.colorScheme === 'dark' ? theme.black : theme.colors.blue[2],
  },

  value: {
    lineHeight: 1,
  },
}))
