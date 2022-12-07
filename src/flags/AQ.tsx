import React from 'react';
import { createFlag } from '../create-flag';

export const AQFlag = createFlag(
  'AQ',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <defs>
      <mask id="mantine-peylkwlr7" fill="#fff">
        <path fillRule="evenodd" d="M0 0h32v24H0z" />
      </mask>
      <mask id="mantine-gsac0uzxa" fill="#fff">
        <use fillRule="evenodd" xlinkHref="#mantine-cneft60k9" />
      </mask>
      <path id="mantine-cneft60k9" d="M0 0h32v24H0z" />
    </defs>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-peylkwlr7)">
      <use fill="#5196ed" xlinkHref="#mantine-cneft60k9" />
      <g fill="#f5f8fb" mask="url(#mantine-gsac0uzxa)">
        <path d="M8.717 7.894s2.064 1.132 2.352 1.445c.286.314.746 1.464 1.464.814.717-.65 1.434-.145 1.434-1.181s1.071-3.44 2.626-2.838c1.554.603 2.832.226 3.19.467.359.24 1.22 1.437 1.89 1.437.669 0 1.003.699 1.051 1.71.048 1.013-.215 1.11.407 1.23.622.12.86.579.55 1.18-.31.603-.287.338-.24.965.049.626-.62 4.321-2.678 4.683-2.056.361-4.005.168-3.48-.53.527-.7 1.255-1.503.18-1.672-1.077-.169-1.755-.312-2.831-.023-1.077.289-2.2.746-2.87-.12-.67-.868-.526-1.495-1.076-1.905-.55-.41-1.22-.337-.67-1.132.55-.795 1.005-.498.55-1.125-.454-.626-2.169-.9-2.169-1.525 0-.627-1.09-2 .32-1.88z" />
      </g>
    </g>
  </svg>
);
