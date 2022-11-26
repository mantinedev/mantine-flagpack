import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 50,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  description: {
    maxWidth: 500,
  },
}));
