import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function UGFlag({ radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-xqxbpq1v4" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-qrxosaq9a" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-k8tkwb273" />
          </mask>
          <path id="mantine-k8tkwb273" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-xqxbpq1v4)">
          <use fill="#feca00" xlinkHref="#mantine-k8tkwb273" />
          <path fill="#272727" d="M0 0h32v4H0z" mask="url(#mantine-qrxosaq9a)" />
          <path fill="#d74800" d="M0 8h32v4H0z" mask="url(#mantine-qrxosaq9a)" />
          <path fill="#272727" d="M0 12h32v4H0z" mask="url(#mantine-qrxosaq9a)" />
          <path fill="#d74800" d="M0 20h32v4H0z" mask="url(#mantine-qrxosaq9a)" />
          <circle cx="16" cy="12" r="6" fill="#f7fcff" mask="url(#mantine-qrxosaq9a)" />
          <g mask="url(#mantine-qrxosaq9a)">
            <path
              fill="#272727"
              d="M14.423 7.642c.453 0 .816.229 1.089.687-.599.433-.898.828-.898 1.182 0 .532-.308 1.268.898 1.743 1.206.475 3.141.475 3.39 1.338.249.863-.467 1.182-1.448 1.182s-1.78-.412-1.38 0c.399.412 1.42 1.389.71 1.389-.237 0-1.13-.711-1.163-.115-.022.377.403 1.414 0 1.815-.097.095 1.198.29 1.097.378-.259.223-.76 0-1.437 0-.086 0-1.224.688-1.34.682-.11-.005.772-.673.673-.682-.58-.056-1.249.056-1.274 0-.045-.1 1.468.027 1.79-.378.507-.64-.077-1.877-.14-1.882-.801-.075-1.582-.089-1.768.182-.355.514-1.11 1.03-1.11.772s-.41-1.053 1.405-1.053c1.21 0 1.709-.065 1.497-.197v-.675c-1.827-.43-2.74-1.117-2.74-2.064 0-1.42 1.235-2.108 1.406-2.435.114-.217.114-.466 0-.745l-1.058-.09 1.058-.347c.042-.458.29-.687.743-.687zm1.105 6.433v.501c.476.127.665.073.566-.162-.098-.235-.287-.349-.566-.34z"
            />
            <path fill="#d74800" d="M13.077 6.711l1.013 1.202.525-.123-.251-1.214z" />
            <path fill="#ffd018" d="M14.393 6.42l.065 1.808.866-.213.368-1.184z" />
            <g fill="#d74800" transform="translate(12 4)">
              <circle cx="1.692" cy="5.128" r="1" />
              <path d="M3.776 2.76L2.77 3.965l.213.496 1.15-.46zm2.343 9.133c1.181-.528 1.772-1.16 1.772-1.899 0-.738-.96-1.51-2.878-2.313-1.129.258-1.438.56-.93.906.763.518 1.786.717 1.786 1.407 0 .69.28 1.348-.288 1.348-.379 0-.2.183.538.551z" />
            </g>
            <path
              fill="#fffdff"
              d="M15.562 11.478c-.418.074-.617.144-.598.212.083.282.94.648 1.313.902.763.519 1.487.46 2.025.123.359-.225-.555-.637-2.74-1.237z"
            />
          </g>
        </g>
      </svg>
    </Box>
  );
}
