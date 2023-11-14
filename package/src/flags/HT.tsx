import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function HTFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-l5md6qy5k" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-fuwe226pz" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-8l0tfm9ec" />
          </mask>
          <mask id="mantine-611z194ae" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-6ivw7e1l1" />
          </mask>
          <path id="mantine-8l0tfm9ec" d="M0 0h32v24H0z" />
          <path id="mantine-6ivw7e1l1" d="M0 0h12v8H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-l5md6qy5k)">
          <use fill="#2e42a5" xlinkHref="#mantine-8l0tfm9ec" />
          <path fill="#e31d1c" d="M0 12h32v12H0z" mask="url(#mantine-fuwe226pz)" />
          <g mask="url(#mantine-fuwe226pz)">
            <g transform="translate(10 8)">
              <use fill="#fff" xlinkHref="#mantine-6ivw7e1l1" />
              <path
                fill="#279e19"
                d="M0 6.578a22.18 22.18 0 016-.711c2.08.03 4.08.327 6 .889V8H0z"
                mask="url(#mantine-611z194ae)"
              />
              <g mask="url(#mantine-611z194ae)">
                <g stroke="#026a16" strokeWidth=".5">
                  <path d="M6.074.901c-.621-.28-1.148-.42-1.581-.42s-.77.214-1.011.64" />
                  <path d="M6.28 1.322c-.57-.205-1.056-.307-1.454-.307s-.71.156-.93.468" />
                  <path d="M6.28 1.677c-.422-.204-.78-.306-1.076-.306-.295 0-.524.156-.688.467" />
                  <path d="M6.02 2.033c-.261-.205-.483-.307-.665-.307s-.324.156-.425.468" />
                  <path d="M5.986 2.275c-.104-.129-.193-.193-.265-.193-.073 0-.13.098-.17.295" />
                </g>
                <g stroke="#026a16" strokeWidth=".5">
                  <path d="M5.926.901c.621-.28 1.148-.42 1.581-.42s.77.214 1.011.64" />
                  <path d="M5.72 1.322c.57-.205 1.056-.307 1.454-.307s.71.156.93.468" />
                  <path d="M5.72 1.677c.422-.204.78-.306 1.076-.306.295 0 .524.156.688.467" />
                  <path d="M5.98 2.033c.261-.205.483-.307.665-.307s.324.156.425.468" />
                  <path d="M6.014 2.275c.104-.129.193-.193.265-.193.073 0 .13.098.17.295" />
                </g>
                <path
                  fill="#feca00"
                  d="M5.888 2.398c-.077.892-.115 1.52-.115 1.882 0 .363.038.936.115 1.719h.293v-1.72c0-.302-.057-.93-.172-1.88z"
                />
              </g>
              <g mask="url(#mantine-611z194ae)">
                <path
                  fill="#c51918"
                  d="M4.732 3.918c-.483.259-.724.77-.724 1.536l.724 1.385h1.307V4.557z"
                />
                <path
                  fill="#0a328c"
                  d="M3.659 2.826c-1.127.334-1.69 1.117-1.69 2.349l2.19.187c-.08-.716.105-1.24.554-1.57z"
                />
                <path
                  stroke="#ffd018"
                  strokeWidth=".5"
                  d="M2.96 2.12l2.902 2.66M1.954 2.723L5.999 5.35M1.257 3.74l4.56 2.085"
                />
                <path
                  fill="#feca00"
                  d="M1.98 5.16l3.025.338-.17.423h-.48l.327.238.737.173V5.92h.645v.873H4.682l-.53-.635c-.297.293-.59.44-.88.44-.434 0-.862-.143-.862-.622v-.333l-.43-.146z"
                />
              </g>
              <g mask="url(#mantine-611z194ae)">
                <path
                  fill="#c51918"
                  d="M6.854 3.918c.483.259.724.77.724 1.536l-.724 1.385H5.547V4.557z"
                />
                <path
                  fill="#0a328c"
                  d="M7.927 2.826c1.127.334 1.691 1.117 1.691 2.349l-2.19.187c.08-.716-.106-1.24-.555-1.57z"
                />
                <path
                  stroke="#ffd018"
                  strokeWidth=".5"
                  d="M8.625 2.12l-2.9 2.659m3.908-2.056L5.587 5.35m4.742-1.61l-4.56 2.085"
                />
                <path
                  fill="#feca00"
                  d="M9.606 5.16l-3.025.338.17.423h.48l-.327.238-.737.173V5.92h-.645v.873h1.382l.53-.635c.297.293.59.44.88.44.434 0 .862-.143.862-.622v-.333l.43-.146z"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </Box>
  );
}
