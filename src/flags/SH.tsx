import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function SHFlag({ size = 40, radius, sx, ...others }: FlagProps) {
  return (
    <Box
      sx={[
        (theme) => ({
          display: 'inline-block',
          overflow: 'hidden',
          lineHeight: 1,
          width: size,
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
          <mask id="mantine-ycy4esdpa" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-iahc820qe" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-n35fi99g7" />
          </mask>
          <mask id="mantine-t3ok65u0s" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-yibfb9eli" />
          </mask>
          <mask id="mantine-4v11qbsb0" fill="#fff">
            <path
              fillRule="evenodd"
              d="M.038.033c0 5.886-.36 9.931 3.912 9.931 4.273 0 4.273-4.966 3.99-9.931z"
            />
          </mask>
          <path id="mantine-n35fi99g7" d="M0 0h32v24H0z" />
          <path id="mantine-yibfb9eli" d="M0 0h18v14H0z" />
          <path id="mantine-fd0pz8bpb" d="M0 0h12v6H0z" />
          <filter id="mantine-dctq6ccjm" width="108.3%" height="133.3%" x="-4.2%" y="-8.3%">
            <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feColorMatrix
              in="shadowOffsetOuter1"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            />
          </filter>
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-ycy4esdpa)">
          <use fill="#2e42a5" xlinkHref="#mantine-n35fi99g7" />
          <g mask="url(#mantine-iahc820qe)">
            <use fill="#2b409a" xlinkHref="#mantine-yibfb9eli" />
            <g mask="url(#mantine-t3ok65u0s)">
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
          <g mask="url(#mantine-iahc820qe)">
            <path
              stroke="#f7fcff"
              strokeWidth=".5"
              d="M30.176 9.783c.174 2.957.26 5.938-.54 7.93-.321.797-.782 1.44-1.423 1.875-.587.4-1.328.626-2.263.626-.837 0-1.506-.15-2.04-.429-.579-.3-1.006-.75-1.318-1.334-.699-1.307-.808-3.32-.811-5.82v-.552l.003-.77c.002-.494.005-1.003.004-1.526z"
            />
            <path
              fill="#2e42a5"
              d="M2 8h6v2H2z"
              mask="url(#mantine-4v11qbsb0)"
              transform="translate(22 10)"
            />
            <g mask="url(#mantine-4v11qbsb0)" transform="translate(22 10)">
              <g transform="translate(-2 -2)">
                <use fill="#000" filter="url(#mantine-dctq6ccjm)" xlinkHref="#mantine-fd0pz8bpb" />
                <use fill="#fdff00" xlinkHref="#mantine-fd0pz8bpb" />
              </g>
              <path fill="#fdff00" fillRule="nonzero" d="M2.826 4.044h.2V8h-.2z" />
              <path
                fill="#f7fcff"
                d="M2.1 6.813h1.783c.012.343-.073.482-.253.419-.271-.095.027.095-.385 0s-.775.299-.867.102c-.092-.197-.45.056-.364-.233l.086-.288z"
              />
              <path fill="#212123" d="M2.133 6.764h1.734v1H2.133z" />
              <path
                fill="#f7fcff"
                d="M2.347 6.065h1.426c.01.275-.058.387-.203.336-.216-.076.022.076-.307 0-.33-.076-.62.239-.694.081-.074-.157-.36.045-.291-.186l.069-.23z"
              />
              <path fill="#212123" d="M2.373 6.027H3.76v1H2.373z" />
              <path
                fill="#f7fcff"
                d="M2.087 5.245h1.545c.01.274-.063.386-.22.335-.234-.076.024.076-.333 0-.357-.076-.671.24-.751.082-.08-.158-.39.045-.316-.186l.075-.231z"
              />
              <path fill="#212123" d="M2.116 5.206h1.502v1H2.116z" />
              <path
                fill="#f7fcff"
                d="M2.214 4.556H3.64c.009.343-.059.483-.203.42-.216-.096.022.095-.308 0-.33-.096-.62.298-.693.101-.074-.197-.36.056-.292-.232l.07-.289z"
              />
              <path fill="#212123" d="M2.24 4.508h1.387v1H2.24z" />
              <path fill="#fdff00" fillRule="nonzero" d="M4.742 4.544h.2V8.5h-.2z" />
              <path
                fill="#f7fcff"
                d="M4.1 6.976h1.783c.012.274-.073.386-.253.335-.271-.076.027.076-.385 0-.412-.076-.775.24-.867.082-.092-.158-.45.044-.364-.187l.086-.23z"
              />
              <path fill="#212123" d="M4.133 6.937h1.734v1H4.133z" />
              <path
                fill="#f7fcff"
                d="M4.365 6.23h1.4c.01.206-.057.29-.199.252-.212-.057.022.057-.302 0s-.609.18-.681.061c-.073-.118-.354.034-.286-.14l.068-.173z"
              />
              <path fill="#212123" d="M4.39 6.2h1.362v1H4.39z" />
              <path
                fill="#f7fcff"
                d="M4.086 5.41h1.528c.01.206-.063.29-.217.251-.232-.057.023.058-.33 0-.353-.057-.664.18-.743.061-.08-.118-.386.034-.312-.14l.074-.172z"
              />
              <path fill="#212123" d="M4.114 5.38H5.6v1H4.114z" />
              <path
                fill="#f7fcff"
                d="M4.222 4.72h1.4c.01.274-.057.385-.199.335-.212-.076.022.076-.302 0-.323-.076-.609.239-.681.081-.073-.157-.354.045-.286-.186l.068-.23z"
              />
              <path fill="#212123" d="M4.248 4.68H5.61v1H4.248z" />
              <path fill="#fdff00" fillRule="nonzero" d="M7.49 4.059h.2v5.258h-.2z" />
              <path
                fill="#f7fcff"
                d="M6.673 7.253h2.27c.014.274-.094.386-.323.336-.345-.077.034.076-.49 0-.524-.077-.986.238-1.103.08-.118-.157-.574.046-.464-.185l.11-.23z"
              />
              <path fill="#212123" d="M6.715 7.214h2.206v1H6.715z" />
              <path
                fill="#f7fcff"
                d="M7.01 6.255h1.782c.012.206-.073.29-.253.252-.27-.057.027.057-.385 0s-.775.18-.867.061c-.092-.118-.45.034-.364-.14l.086-.173z"
              />
              <path fill="#212123" d="M7.042 6.23h1.734v1H7.042z" />
              <path
                fill="#f7fcff"
                d="M6.828 4.935H8.61c.012.274-.073.386-.253.335-.27-.076.027.076-.385 0-.411-.076-.774.24-.867.082-.092-.158-.45.044-.364-.186l.087-.231z"
              />
              <path fill="#212123" d="M6.86 4.896h1.734v1H6.86z" />
              <path
                fill="#272727"
                d="M2.185 7.687c.617.335 1.396.474 2.337.416 1.411-.087 1.31.186 1.676-.202.366-.387.398-.3.855-.504.456-.204.522-.396.757-.396.157 0 1.071-.033 2.742-.1a.643.643 0 00-.229.496c0 .29.153.32 0 .583-.153.263-.326.614-.548.716-.222.102-3.218.167-3.982.167-.764 0-2.333.085-2.513 0-.12-.057-.485-.449-1.095-1.176z"
              />
              <path
                fill="#ce6201"
                d="M.118 5.686l.893-.822c.026 0 .094.137.205.411.166.411.174.974.346.834.173-.141.439-.011.55-.423.113-.411.106-.944.248-.677.142.266.058-.123.285.488s.317-.263.441.612c.125.874.231 1.175.231 1.379 0 .203 1.137.809.701 1.226s-.313.22-.701.483c-.388.263-.786.11-.23.316.555.206.475.58.475.855 0 .276-.034.4-.476.337s-.979.159-1.086.159S.597 10.6.597 10.056c0-.362-.16-1.818-.48-4.37z"
              />
            </g>
          </g>
        </g>
      </svg>
    </Box>
  );
}
