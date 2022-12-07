import React from 'react';
import { createFlag } from '../create-flag';

export const AOFlag = createFlag(
  'AO',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <defs>
      <path id="mantine-g1e7ngqw1" d="M0 0h32v24H0z" />
      <path
        id="mantine-vv1utk4lx"
        d="M4.846 5.464l-.95.658.336-1.102-.922-.695L4.466 4.3l.38-1.087.38 1.087 1.156.024-.921.695.335 1.102z"
      />
      <path
        id="mantine-sr80fwinn"
        d="M2.614 5.86c-1.122 1.645-1.242 2.77-.358 3.37s3.663 2.171 8.337 4.707c.966-.005 1.518.095 1.655.3.206.309.635.671.816.671.12 0 .336-.109.647-.327.243-.198.243-.413 0-.644s-1.005-.741-2.287-1.531C6.419 9.21 3.704 7.456 3.278 7.14a1.578 1.578 0 01-.664-1.28z"
      />
      <filter id="mantine-wxuy13sww" width="95.1%" height="90.5%" x="2.4%" y="0%">
        <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
        <feColorMatrix in="shadowOffsetOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
      </filter>
      <filter id="mantine-1xa7oeikt" width="100%" height="100%" x="0%" y="0%">
        <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
        <feColorMatrix in="shadowOffsetOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
      </filter>
      <mask id="mantine-geplahj4u" fill="#fff">
        <path fillRule="evenodd" d="M0 0h32v24H0z" />
      </mask>
      <mask id="mantine-qzpf45ajd" fill="#fff">
        <use fillRule="evenodd" xlinkHref="#mantine-g1e7ngqw1" />
      </mask>
    </defs>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-geplahj4u)">
      <use fill="#1d1d1d" xlinkHref="#mantine-g1e7ngqw1" />
      <path fill="#f50100" d="M0 0h32v12H0z" mask="url(#mantine-qzpf45ajd)" />
      <g mask="url(#mantine-qzpf45ajd)">
        <path
          fill="#ffea42"
          fillRule="nonzero"
          d="M9.933 5.897l.427-1.405c3.2.976 5.13 2.689 5.672 5.131.36 1.621.196 3.07-.386 4.36-.415.918-.942 1.604-1.7 2.377-1.263 1.288-3.34 2.11-5.217 1.76a10.5 10.5 0 01-3.61-1.375l.766-1.252a9.038 9.038 0 003.111 1.184c1.355.252 2.961-.384 3.906-1.347.647-.66 1.08-1.222 1.41-1.953.453-1.005.58-2.13.29-3.434-.414-1.864-1.932-3.211-4.669-4.046z"
        />
        <g transform="translate(5 4)">
          <use fill="#000" filter="url(#mantine-wxuy13sww)" xlinkHref="#mantine-vv1utk4lx" />
          <use fill="#fcff01" xlinkHref="#mantine-vv1utk4lx" />
          <use fill="#ffea42" xlinkHref="#mantine-vv1utk4lx" />
        </g>
        <g transform="translate(5 4)">
          <use fill="#000" filter="url(#mantine-1xa7oeikt)" xlinkHref="#mantine-sr80fwinn" />
          <use fill="#fcff01" xlinkHref="#mantine-sr80fwinn" />
          <use fill="#ffea42" xlinkHref="#mantine-sr80fwinn" />
        </g>
        <path
          fill="#ffea42"
          d="M8.821 17.923l1.393.034-.03.964-1.368-.044zm-2.468-.748l1.279.553-.39.883-1.251-.553zm6.324-.008l.348.9-1.276.493-.368-.88zm1.986-1.669l.66.704-.997.935-.672-.678zm1.184-2.304l.883.39-.553 1.25-.883-.362zm.227-2.589l.965.031-.044 1.367-.955-.005zm.112-2.817l.493 1.276-.88.368-.513-1.296zm-1.861-2.304l.935.998-.679.671-.96-1.009zm-2.613-1.41l1.25.553-.362.883-1.278-.553z"
        />
      </g>
    </g>
  </svg>
);
