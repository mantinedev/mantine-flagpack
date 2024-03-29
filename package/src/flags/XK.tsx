import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function XKFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <mask id="mantine-7cmozeeaf" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-7cmozeeaf)">
          <path fill="#2e42a5" d="M0 0h32v24H0z" />
          <path
            fill="#e8ab02"
            fillRule="nonzero"
            d="M14.412 19.917c.082-.083.19-.083.323 0 .386-.276.58-.437.58-.482 0-.068-.28-.89-.045-1.174s2.145-1.283 2.322-1.227c.178.057.62.932.764.932s.56.02.56-.12c0-.138-.136-.705.3-.975s.749-.577.99-.325c.16.169.274.2.344.09.047-.235.026-.388-.062-.458-.132-.105-.404-.337-.131-.483.182-.097.348-.133.497-.106l.186-.287-.186-.363.902-1.035-.13-.242a.499.499 0 00.237-.345c.034-.211.164-.354-.107-.474-.27-.12-.362.073-.453.12-.061.031-.103.09-.126.176l-.137-.296c-.584-.228-.98-.343-1.186-.343-.31 0-.557.005-.415-.432.142-.438.315-.539.218-.67s-.142.131-.441-.077-.898-.275-.898-.612c0-.337-.674-1.519-.94-1.519-.178 0-.285.034-.323.1-.896-.224-1.344-.377-1.344-.457s.07-.208.213-.382c-.156-.351-.307-.497-.454-.438-.22.088-.632.5-.845.5-.142 0-.332.01-.57.028.522.52.712.893.57 1.121-.142.228-.27.425-.384.59l-.266-.013-.566.444.245.513c-.262.3-.445.45-.548.45-.156 0-.378-.134-.63 0a.85.85 0 01-.512.1c-.246.158-.368.265-.368.322s-.03.148-.088.274h-.387l-.504-.224c-.46.178-.664.363-.608.556.055.193.358.364.907.514l-.236.342c.074.45.188.714.342.794.154.08.374.365.66.856l-.174.21c.2.08.3.2.3.361s.119.26.358.297l.31-.076.04.152.247.085.078.117c.825.849 1.203 1.356 1.134 1.52-.07.166-.01.42.178.763l.173.602-.351.343c.21.325.356.446.437.363z"
          />
          <path
            fill="#f7fcff"
            d="M26.408 4.912l.484 1.072h1.048l-.824.833.396 1.133-1.102-.558-.983.558.28-1.133-.94-.833h1.229zm-20.266 0l.483 1.072h1.049l-.824.833.396 1.133-1.103-.558-.982.558.28-1.133-.941-.833h1.23zm16.416-1.094l.484 1.072h1.048l-.824.832.396 1.134-1.102-.558-.983.558.28-1.134-.94-.832h1.229zm-12.566 0l.484 1.072h1.048l-.824.832.396 1.134-1.102-.558-.983.558.28-1.134-.94-.832H9.58zM18.315 3l.484 1.072h1.048l-.823.833.396 1.133-1.103-.558-.983.558.28-1.133-.94-.833h1.23zM14.23 3l.483 1.072h1.049l-.824.833.396 1.133-1.103-.558-.982.558.28-1.133-.941-.833h1.23z"
          />
        </g>
      </svg>
    </Box>
  );
}
