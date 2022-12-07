import React from 'react';
import { createFlag } from '../create-flag';

export const LIFlag = createFlag(
  'LI',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <defs>
      <mask id="mantine-uth2nzjxf" fill="#fff">
        <path fillRule="evenodd" d="M0 0h32v24H0z" />
      </mask>
      <mask id="mantine-jvjhnveqc" fill="#fff">
        <use fillRule="evenodd" xlinkHref="#mantine-zdijfch75" />
      </mask>
      <path id="mantine-zdijfch75" d="M0 0h32v24H0z" />
    </defs>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-uth2nzjxf)">
      <use fill="#e31d1c" xlinkHref="#mantine-zdijfch75" />
      <path fill="#2e42a5" d="M0 0h32v12H0z" mask="url(#mantine-jvjhnveqc)" />
      <g mask="url(#mantine-jvjhnveqc)">
        <path
          fill="#000"
          d="M4.798 11.053c.805.5 2.14.751 4.003.751s3.291-.25 4.28-.75c-1.461-.85-2.846-1.276-4.153-1.276-1.307 0-2.684.425-4.13 1.275z"
        />
        <g fill="#ffd83d" stroke="#000" strokeWidth=".5" transform="translate(4)">
          <path d="M6.065 3.483c.987-.304 2.075-.588 2.858.093.406.352.651.807.733 1.366.084.57-.006 1.253-.28 2.05H.73c-.5-.817-.704-1.51-.646-2.075.058-.573.373-1.034.967-1.37 1.098-.622 2.046-.326 2.884-.047.358.12.692.236 1.006.236.318 0 .708-.125 1.124-.253z" />
          <path d="M4.975 6.018c2.418 0 4.176.339 5.282.996l-1.343 3.592a12.47 12.47 0 00-3.92-.628c-1.338 0-2.668.209-3.992.626L-.305 7.013c1.106-.657 2.864-.995 5.28-.995z" />
          <ellipse cx="4.874" cy="3.17" rx="1" ry="1.095" />
          <path d="M5.394-.25l-.062.885.548-.078v1.21l-.564-.08.073 1.416H4.36l.072-1.415-.563.078V.56l.548.074-.062-.883z" />
        </g>
      </g>
    </g>
  </svg>
);
