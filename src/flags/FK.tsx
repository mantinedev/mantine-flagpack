import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function FKFlag({ radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-msyolvmwc" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-vc02i786e" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-ez1qyk71s" />
          </mask>
          <mask id="mantine-uwcxwbyx7" fill="#fff">
            <path
              fillRule="evenodd"
              d="M.038.033c0 5.886-.36 9.931 3.912 9.931 4.273 0 4.273-4.966 3.99-9.931z"
            />
          </mask>
          <mask id="mantine-7hu0v0oc9" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-4p0m0an61" />
          </mask>
          <path id="mantine-ez1qyk71s" d="M0 0h32v24H0z" />
          <path id="mantine-4p0m0an61" d="M0 0h18v14H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-msyolvmwc)">
          <use fill="#2e42a5" xlinkHref="#mantine-ez1qyk71s" />
          <g mask="url(#mantine-vc02i786e)">
            <path
              stroke="#f7fcff"
              strokeWidth=".5"
              d="M29.704 10.283c.15 2.717.203 5.412-.532 7.243-.28.698-.677 1.267-1.24 1.649-.514.349-1.165.539-1.982.539-.741 0-1.336-.126-1.81-.372-.488-.254-.844-.635-1.107-1.127-.67-1.254-.749-3.19-.752-5.583v-.552l.003-.769.004-1.028z"
            />
            <g mask="url(#mantine-uwcxwbyx7)" transform="translate(22 10)">
              <path
                fill="#e1e5e8"
                d="M2.522 3.587a1.599 1.599 0 01-.564-.765c-.17-.473-.504-1.732-.504-1.841 0-.11-.446 0-.446 0s.006-.532.175-.532c.168 0 .174-.494.582-.37.408.125.729.58 1.145.58.415 0 2.153.133 2.433.133s1.016.59 1.016 1.031c0 .441-.201 1.1-.36 1.1s-.356.382-.656.255-1.017-.386-1.66-.256-.773.048-.773.256c0 .14-.13.275-.388.409z"
              />
              <path fill="#49801e" d="M1.6 3.279h5.156l-.888 1.147H2.225z" />
              <path
                stroke="#fff"
                strokeWidth="1.067"
                d="M1.533 8.296c.594.212 1.015.305 1.263.28.413-.043.778-.513 1.053-.513.276 0 .805.47 1.217.513.248.025.615-.068 1.1-.28M.554 6.936c.206-.174.532-.267.979-.28.594.213 1.015.306 1.263.28.413-.043.778-.513 1.053-.513.276 0 .805.47 1.217.513.248.026.615-.067 1.1-.28.271-.304.577-.296.917.026"
              />
              <path
                fill="#fff"
                fillRule="nonzero"
                d="M.46 5.53l-.674-.827c.265-.215.709-.428 1.357-.663l.314-.015c.672.172 1.122.247 1.286.23.054-.005.145-.049.31-.159.471-.312.517-.337.796-.337.256 0 .308.024.842.312.1.054.136.073.19.099a.863.863 0 00.238.086c.128.013.386-.047.747-.193.47-.426 1.064-.382 1.576.084.341.311.615.562.822.754l-.725.782c-.204-.189-.476-.438-.815-.747-.135-.123-.106-.123-.166-.058l-.185.13c-.56.237-1.002.345-1.36.31a1.765 1.765 0 01-.594-.187 5.26 5.26 0 01-.235-.121c-.257-.14-.355-.185-.335-.185.045 0-.017.035-.206.16-.303.202-.514.304-.793.332-.31.031-.791-.043-1.495-.218-.458.173-.762.323-.894.43z"
              />
            </g>
          </g>
          <g mask="url(#mantine-vc02i786e)">
            <path
              stroke="#b85f3c"
              d="M22.963 18.394c.656.628.786 1.155.39 1.58-.396.426-.776.516-1.139.268m6.836-1.848c-.656.628-.786 1.155-.39 1.58.396.426.776.516 1.139.268"
            />
            <path
              stroke="#cb8b73"
              d="M22.32 19.153c1.13 1.08 2.39 1.62 3.78 1.62s2.643-.412 3.76-1.237"
            />
          </g>
          <g mask="url(#mantine-vc02i786e)">
            <use fill="#2b409a" xlinkHref="#mantine-4p0m0an61" />
            <g mask="url(#mantine-7hu0v0oc9)">
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
