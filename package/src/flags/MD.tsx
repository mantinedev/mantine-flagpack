import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function MDFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-v4eq0k3bg" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-78nhkdqsx" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-8ss9qz51x" />
          </mask>
          <path
            id="mantine-8ss9qz51x"
            d="M0 0h10.56v7.639a31.49 31.49 0 00-5.28 2.137C4.004 8.83 2.244 8.117 0 7.64z"
          />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-v4eq0k3bg)">
          <path fill="#d9071e" d="M22 0h10v24H22z" />
          <path fill="#3d58db" d="M0 0h12v24H0z" />
          <path fill="#fbcd17" d="M10 0h12v24H10z" />
          <path
            fill="#fd1900"
            fillRule="nonzero"
            d="M14.004 13.379l1.053.575-3.49 6.39-1.054-.576zm4.224-.154l3.49 6.39-1.053.575-3.49-6.39z"
          />
          <path
            fill="#a77b3b"
            d="M15.814 15.97l.525.122c.535 1.395 1.588 2.641 3.16 3.74-1.675.447-2.729 1.12-3.16 2.018 0-.718-1.063-1.391-3.189-2.018.721-.47 1.61-1.757 2.664-3.862zm.308-13.12c1.654 0 1.847.783 1.847 1.406s-.953 1.966-.953 2.479c0 .513.387 1.509.953 1.509.334 0 1.472-.395 3.413-1.183V5.408c.18-1.325.712-2.076 1.597-2.25 1.066.383 1.6 1.133 1.6 2.25v14.938c-.71-.913-1.243-1.569-1.6-1.967-.536-.598-1.597-2.205-1.597-3.439V9.39H11.378v5.551c0 1.165-.947 2.663-1.503 3.33l-.094.109c-.357.398-.89 1.054-1.6 1.967V5.408c0-1.117.534-1.867 1.6-2.25.885.174 1.417.925 1.597 2.25v1.94l.082.07c1.065.862 1.927 1.138 2.588.826.702-.332 1.174-.974 1.416-1.925-.065-.96-.242-1.44-.53-1.44-.432 0-.467-2.028 1.188-2.028zm-3.146 12.483c.729 0 1.32.56 1.32 1.25s-.591 1.25-1.32 1.25-1.32-.56-1.32-1.25.591-1.25 1.32-1.25zm6.424 0c.729 0 1.32.56 1.32 1.25s-.591 1.25-1.32 1.25-1.32-.56-1.32-1.25.591-1.25 1.32-1.25z"
          />
          <path
            fill="#fdff00"
            fillRule="nonzero"
            d="M25.14 10.408l.918.396-3.74 8.652-.918-.396z"
          />
          <g transform="translate(11.04 7.833)">
            <use fill="#e1e5e8" opacity=".3" xlinkHref="#mantine-8ss9qz51x" />
            <path fill="#3d58db" d="M0 5h10.56v5H0z" mask="url(#mantine-78nhkdqsx)" />
            <path fill="#fd1900" d="M0 0h10.56v5H0z" mask="url(#mantine-78nhkdqsx)" />
            <g fill="#fdff00">
              <path
                d="M5.06 2.333l-.66.457.088-.77-.749-.312.749-.313-.089-.77.66.458.66-.458-.088.77.748.313-.748.312.088.77z"
                mask="url(#mantine-78nhkdqsx)"
                transform="rotate(30 5.06 1.708)"
              />
              <path
                d="M3.31.838C1.877 1.71 1.399 2.46 1.877 3.085c.478.626 1.017.98 1.618 1.06-1.466 2.199-.909 3.927 1.672 5.184C7.93 8.116 8.585 6.387 7.132 4.144c.85-.188 1.36-.62 1.53-1.297.17-.677-.385-1.403-1.667-2.18.8 1.16 1.109 1.886.926 2.18-.274.44-1.741.89-2.754.89s-2.578-.285-2.83-1.055c-.168-.514.156-1.128.973-1.844z"
                mask="url(#mantine-78nhkdqsx)"
              />
              <path
                d="M1.32 4.167L2.64 5l-1.32.833L0 5zm7.92 0L10.56 5l-1.32.833L7.92 5z"
                mask="url(#mantine-78nhkdqsx)"
              />
              <circle cx="1.88" cy="7.667" r="1" mask="url(#mantine-78nhkdqsx)" />
              <path
                d="M10.227 7.226c0-.442-.394-.8-.88-.8s-.88.358-.88.8c0 .24.405-.213.88-.234.399-.018.88.436.88.234z"
                mask="url(#mantine-78nhkdqsx)"
                transform="rotate(-51 9.467 7.426)"
              />
            </g>
          </g>
          <path
            fill="#048f02"
            d="M9.558 14.154c.145 1.01-.072 1.622-.649 1.833s-1.293-.057-2.15-.804h.907v-.347l.5.347v-.347h.64zm-1.31-1.74c.145 1.012-.071 1.623-.648 1.834s-1.294-.057-2.15-.804h.906v-.347l.5.347v-.347h.64zM7.535 10.5c.16.974-.09 1.597-.752 1.869-.661.271-1.344-.008-2.046-.839h.906v-.347l.5.347v-.347h.64z"
          />
          <path
            fill="#fdff00"
            fillRule="nonzero"
            d="M13.98 2.248l-.001.595.573.001v1h-.573v1.745h-1V3.843l-.47.001v-1h.47v-.596z"
          />
          <path fill="#db4400" d="M15.158 3.385l-2.316.596 2.316.732z" />
        </g>
      </svg>
    </Box>
  );
}
