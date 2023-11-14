import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function NIFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-zlo1eyq4z" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-wdhp1ox42" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-5h4r81xj8" />
          </mask>
          <mask id="mantine-yg3nh8omh" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-14l3mc8lf" />
          </mask>
          <path id="mantine-5h4r81xj8" d="M0 0h32v24H0z" />
          <path id="mantine-14l3mc8lf" d="M2.738.004L.002 4.735h5.516z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-zlo1eyq4z)">
          <use fill="#f7fcff" xlinkHref="#mantine-5h4r81xj8" />
          <path fill="#0080ec" d="M0 0h32v8H0zm0 16h32v8H0z" mask="url(#mantine-wdhp1ox42)" />
          <g mask="url(#mantine-wdhp1ox42)">
            <path
              fill="#d0ab00"
              fillRule="nonzero"
              d="M15.771 14.7v1.294a3.999 3.999 0 01-3.194-1.924l1.26-.44a2.706 2.706 0 001.934 1.07zm2.355-1.02l1.388.233a4 4 0 01-3.217 2.076v-1.296c.74-.08 1.39-.46 1.829-1.014zM20 12l-.005.198-1.287-.109.001-.089a2.71 2.71 0 00-1.905-2.588l.348-1.244A4.002 4.002 0 0120 12zm-5.449-3.73l.334 1.26a2.71 2.71 0 00-1.594 2.45l-1.287.192a4.001 4.001 0 012.548-3.901zM16 8c.188 0 .373.013.554.038l-.196 1.276a2.734 2.734 0 00-.874.026l-.091-1.294c.198-.03.4-.046.607-.046z"
            />
            <g transform="translate(13.236 8.945)">
              <use fill="#7cdfff" xlinkHref="#mantine-14l3mc8lf" />
              <g mask="url(#mantine-yg3nh8omh)">
                <circle cx="2.764" cy="3.782" r="2.391" stroke="#e31d1c" />
                <circle cx="2.764" cy="3.782" r="2.391" stroke="#ffd018" />
                <circle cx="2.764" cy="3.782" r="2.391" stroke="#4edd00" />
                <circle cx="2.764" cy="3.782" r="1.891" stroke="#3d58db" />
              </g>
              <path
                fill="#3d58db"
                d="M-.218 3.273h6.254V5.09H-.218z"
                mask="url(#mantine-yg3nh8omh)"
              />
              <path
                fill="#97c923"
                d="M.2 4.045l1.247-1.24.383.62.267-.755.297.566.312-.43.403.43.37-.566.316.566.363-.43.847.9.153.34-4.957.25z"
                mask="url(#mantine-yg3nh8omh)"
              />
            </g>
          </g>
        </g>
      </svg>
    </Box>
  );
}
