import React from 'react';
import { Title } from '@mantine/core';
import useStyles from './MdxTitle.styles';

export function MdxTitle({
  id,
  children,
  order,
  ...others
}: React.ComponentPropsWithoutRef<typeof Title>) {
  const { classes } = useStyles();

  if (order === 1) {
    return (
      <Title className={classes.title} sx={{ fontWeight: 900, fontSize: 44 }}>
        {children}
      </Title>
    );
  }

  return (
    <>
      <div id={id} className={classes.offset} />
      <Title order={order} className={classes.title} sx={{ fontWeight: 600 }} {...others}>
        <a className={classes.link} href={`#${id}`}>
          {children}
        </a>
      </Title>
    </>
  );
}

export const h = (order: 1 | 2 | 3 | 4 | 5 | 6) =>
  function Heading(props: React.ComponentPropsWithoutRef<'h1'>) {
    return <MdxTitle order={order} {...props} />;
  };
