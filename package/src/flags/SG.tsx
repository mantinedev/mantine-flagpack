import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function SGFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-lkyzwutin" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-hju9eb9ih" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-y5qlq6gqq" />
          </mask>
          <path id="mantine-y5qlq6gqq" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-lkyzwutin)">
          <use fill="#f7fcff" xlinkHref="#mantine-y5qlq6gqq" />
          <path fill="#e31d1c" d="M0 0h32v12H0z" mask="url(#mantine-hju9eb9ih)" />
          <path
            fill="#f1f9ff"
            d="M8.868 2.195s-2.825 1.1-2.825 4.179 2.825 4.216 2.825 4.216c-1.428.795-5.017 0-5.017-4.216s3.644-4.526 5.017-4.179zm1.535 5.286l.387.891h.912l-.673.754.202.955-.828-.49-.81.49.184-.955-.675-.715.914-.039zm2.946-.055l.387.892h.913l-.674.753.203.955-.829-.49-.81.49.185-.955-.675-.715.914-.038zM9.37 5.112l.388.892h.912l-.673.753.202.955-.828-.49-.81.49.184-.955-.675-.715.914-.038zm5.36-.044l.386.892h.912l-.673.753.203.955-.829-.49-.81.49.184-.955L13.427 6l.914-.04zM12.097 3.17l.387.892h.912l-.673.753.202.955-.828-.49-.81.49.184-.955-.675-.715.914-.038z"
            mask="url(#mantine-hju9eb9ih)"
          />
        </g>
      </svg>
    </Box>
  );
}
