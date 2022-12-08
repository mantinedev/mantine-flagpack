import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function TCFlag({ radius, sx, ...others }: FlagProps) {
  return (
    <Box
      sx={[
        (theme) => ({
          display: 'inline-block',
          overflow: 'hidden',
          lineHeight: 1,
          borderRadius: theme.fn.radius(radius),

          '& svg': {
            display: 'block',
          },
        }),
        ...packSx(sx),
      ]}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-kd9f9fspi" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-iykmxzfte" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-ndsc41tzg" />
          </mask>
          <mask id="mantine-s8wvmi6qq" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-4ely9y18l" />
          </mask>
          <path id="mantine-ndsc41tzg" d="M0 0h32v24H0z" />
          <path id="mantine-4ely9y18l" d="M0 0h18v14H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-kd9f9fspi)">
          <use fill="#2e42a5" xlinkHref="#mantine-ndsc41tzg" />
          <g mask="url(#mantine-iykmxzfte)">
            <path
              fill="#feca00"
              stroke="#f7fcff"
              strokeWidth=".5"
              d="M21.047 10.033c.59 7.954 2.218 11.931 4.882 11.931s4.323-3.977 4.978-11.931z"
            />
            <path
              fill="#cf6900"
              d="M28.446 10l.242.028-.121.751.046-.014.481-.579.206.11-.253.386c.25-.012.43.06.53.216l.694-.441.147.165-.762.485c.01.055.016.115.016.18v.112l1.05-.23.078.196-1.128.399v.137l1.07-.087.032.205-1.102.16v.235l1.104.184-.044.203-1.06-.16v2.3h-.163v-2.324l-.714-.105c-.114.786-.165 1.295-.154 1.526.022.45.602.443.432.61-.17.166-.596.326-1.021.326-.426 0-.846-.16-.937-.327s.394.677.426-.609a5.663 5.663 0 00-.153-1.506l-.57.085.001 2.324h-.162v-2.299l-1.06.159-.045-.203 1.105-.184v-.235l-1.102-.16.032-.205 1.07.087v-.137l-1.128-.4.077-.195 1.05.23v-.112c0-.065.006-.125.016-.18l-.76-.485.146-.165.694.44c.1-.155.28-.227.53-.215l-.254-.386.207-.11.48.579.047.014-.121-.75.241-.029.159.974h.01a.44.44 0 01.226.075zm.999.983c-.082-.142-.243-.193-.493-.156l-.343.521c.03.034.06.07.092.11zm-2.561 0l.573.365c.057-.058.111-.11.163-.154l-.244-.367c-.25-.037-.41.014-.492.156z"
            />
            <path
              fill="#00a727"
              d="M24.878 15.843c-.876 1.467-1.314 2.644-1.314 3.533.597.474 1.409.71 2.435.71 1.027 0 1.804-.236 2.332-.71a40.206 40.206 0 00-1.171-3.533z"
            />
            <path
              fill="#e31d1c"
              d="M26.039 14.138c.606 0 1.097.491 1.097 1.097v.75h-2.194v-.75c0-.606.491-1.097 1.097-1.097z"
            />
            <path
              fill="#ff927f"
              d="M21.52 12.833c1.155.239 1.733.545 1.733.92 0 .564.698.767.87.615.171-.152 1.38-.259 1.38-.993s.1-.934-.193-1.4c-.294-.466-.906-2.042-1.046-1.41-.141.63-.353 1.098-.745.722-.391-.377-.894-1.173-1.07-.723-.177.45.559.903 0 .903s-.166.03-.166.41c0 .382.066.741-.349.741-.276 0-.415.072-.415.215z"
            />
          </g>
          <g mask="url(#mantine-iykmxzfte)">
            <use fill="#2b409a" xlinkHref="#mantine-4ely9y18l" />
            <g mask="url(#mantine-s8wvmi6qq)">
              <g fillRule="nonzero">
                <path
                  fill="#f7fcff"
                  d="M-2.004 13l3.96 1.737L18.09 1.889l2.09-2.582-4.236-.58-6.58 5.536-5.297 3.73z"
                />
                <path fill="#f50100" d="M-1.462 14.217l2.018 1.008L19.429-.933h-2.833z" />
                <path
                  fill="#f7fcff"
                  d="M20.004 13l-3.96 1.737L-.09 1.889-2.18-.693l4.236-.58 6.58 5.536 5.297 3.73z"
                />
                <path
                  fill="#f50100"
                  d="M19.87 13.873l-2.019 1.008-8.036-6.917-2.383-.773L-2.38-.684H.453l9.807 7.688 2.605.926z"
                />
              </g>
              <path
                fill="#f50100"
                stroke="#f7fcff"
                strokeWidth="1.5"
                d="M10.735-.75v6h8.015v3.5h-8.016v6h-3.5v-6H-.75v-3.5h7.984v-6z"
              />
            </g>
          </g>
        </g>
      </svg>
    </Box>
  );
}
