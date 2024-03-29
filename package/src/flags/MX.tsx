import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function MXFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <mask id="mantine-bu3tdv3ay" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-bu3tdv3ay)">
          <path fill="#d9071e" d="M22 0h10v24H22z" />
          <path fill="#006923" d="M0 0h12v24H0z" />
          <path fill="#fff" d="M10 0h12v24H10z" />
          <g transform="translate(11 6.6)">
            <path
              fill="#a8ac71"
              fillRule="nonzero"
              d="M2.532 2.304c-.514 0-.583-.107-.476-.562.056-.243-.138-.51.103-.91l.857.515a5.727 5.727 0 00-.22.395c.18.053.304.307.44.433.365.336.32.71-.18 1.116-.097.079.126.286.04.543.238.013.409.05.566.142.442.262.4.738.064 1.107a2.252 2.252 0 01-.857.58c-.5.181-1.034.112-1.034-.527 0-.025-.016-.075.22-.08-.38-.006-.537-1.05-.542-1.17 0-.529-.112-.794-.336-.794v-.427h.58c.33 0 .238.396.342.626.025-.045.066 1.314.202 1.2.05-.043.436.443.496.23.044-.16-.216-.789-.215-1.056 0-.622.196-.975.215-1-.084-.029-.209-.36-.265-.36zm.44 2.12a1.065 1.065 0 00.01-.009zm-.438.297l.011-.002zm-.478.335a1.925 1.925 0 01.028 0z"
            />
            <path
              fill="#fcca3d"
              d="M3.384 1.313c-.458.355-.644.722-.558 1.1.128.569 1.482 0 1.318-.55-.109-.366-.362-.55-.76-.55z"
            />
            <path
              fill="#8f4620"
              d="M8.266 5.803c.617-1.828.435-3.214-.545-4.16C6.741.696 5.684.255 4.551.318c-.326.243-.326.456 0 .641.327.185.422.366.285.543-.546-.554-1-.67-1.364-.346-.543.487.508.413.397.779s-.583 1.99.106 2.811c.69.82-.652.642-.379.642s1.24.191 1.24 0c0-.19.336.743.624.743.192 0 .361-.11.51-.328.268.219.485.328.649.328s.53-.072 1.102-.215l-1.62-1.364c.066-.402.022-.646-.131-.732-.23-.13 1.841 1.154 2.004 1.568.108.277.205.415.292.415z"
            />
            <path
              fill="#9fab2f"
              fillRule="nonzero"
              d="M.066 5.127c.1-.32.204-.49.311-.512.093-.02.237.057.433.23.52 2.889 1.778 4.018 3.865 4.018 2.112 0 3.392-.858 4.139-3.523.264-.27.443-.39.537-.36.101.032.216.227.343.585-.856 3.058-2.475 4.419-5.02 4.419-2.567 0-4.01-1.54-4.608-4.857z"
            />
            <path
              fill="#2fc2dc"
              d="M2.334 7.056c2.003.425 3.4.638 4.19.638 1.186 0-1.04.968-1.909.968-.38 0-.838-.23-1.374-.691-.096-.083-.003-.268-.295-.27-.409-.004-.916-.1-.867-.158.046-.055.64-.072.583-.133a42.008 42.008 0 01-.328-.354z"
            />
            <rect width="2" height="1.071" x="3.667" y="7.5" fill="#f9aa51" rx=".167" />
            <path
              fill="#259485"
              fillRule="nonzero"
              d="M1.176 5.536c0-.25.084-.442.254-.574.194-.153.382-.153.564 0C3.06 6.48 4.653 6.98 6.881 6.458c.444.145.678.266.7.361.028.121-.129.325-.472.613-2.605.61-4.618-.022-5.933-1.896z"
            />
            <path
              fill="#fcca3d"
              d="M5.591 5.75c-.809.426-1.078.64-.809.64.405 0 1.988.319 1.68 0-.205-.214-.496-.427-.87-.64zm-1.435-.762c-.153-.444-.39-.666-.71-.666-.48 0-.345.547-.575.547-.231 0 .215.384.413.384.133 0 .424-.088.872-.265z"
            />
          </g>
        </g>
      </svg>
    </Box>
  );
}
