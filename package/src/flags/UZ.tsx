import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function UZFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <mask id="mantine-83mraw4vb" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-83mraw4vb)">
          <path fill="#14dc5a" d="M0 16h32v8H0z" />
          <path fill="#0099b5" d="M0 0h32v10H0z" />
          <g fill="#f7fcff">
            <path stroke="#c51918" d="M34.5 9.5v7h-37v-7z" />
            <path d="M6 2.11s-2.44.628-2.485 3.052c-.046 2.423 2.37 3.079 2.37 3.079-.93.367-3.939-.205-3.884-3.104C2.055 2.238 5.003 1.732 6 2.11zm2.427 3.187l.33.72h.719l-.564.558.27.76-.754-.374-.673.374.192-.76-.645-.559h.842zm3.178 0l.331.72h.718l-.564.558.271.76-.755-.374-.673.374.192-.76-.644-.559h.842zm2.98 0l.331.72h.718l-.564.558.271.76-.755-.374-.673.374.192-.76-.644-.559h.842zm3 0l.33.72h.718l-.564.558.272.76-.756-.374-.673.374.193-.76-.645-.559h.842zm3.03 0l.33.72h.719l-.564.558.27.76-.754-.374-.673.374.192-.76-.645-.559h.842zm-9.01-2.038l.331.72h.718l-.564.558.271.76-.755-.374-.673.374.192-.76-.644-.558h.842zm2.98 0l.331.72h.718l-.564.558.271.76-.755-.374-.673.374.192-.76-.644-.558h.842zm3 0l.33.72h.718l-.564.558.272.76-.756-.374-.673.374.193-.76-.645-.558h.842zm3.03 0l.33.72h.719l-.564.558.27.76-.754-.374-.673.374.192-.76-.645-.558h.842zM14.54 1.343l.331.719h.718l-.564.558.271.76-.755-.374-.673.374.192-.76-.644-.558h.842zm3 0l.33.719h.719l-.564.558.27.76-.754-.374-.673.374.192-.76-.645-.558h.842zm3.03 0l.331.719h.718l-.564.558.271.76-.755-.374-.673.374.192-.76-.645-.558h.842z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
