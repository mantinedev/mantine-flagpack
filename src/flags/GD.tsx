import React from 'react';
import { createFlag } from '../create-flag';

export const GDFlag = createFlag(
  'GD',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <defs>
      <mask id="mantine-uutrg36mt" fill="#fff">
        <path fillRule="evenodd" d="M0 0h32v24H0z" />
      </mask>
      <mask id="mantine-vywjgp4zc" fill="#fff">
        <use fillRule="evenodd" xlinkHref="#mantine-zs81ltq93" />
      </mask>
      <path id="mantine-zs81ltq93" d="M0 0h20v12H0z" />
    </defs>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-uutrg36mt)">
      <path fill="#c51918" d="M0 0h32v24H0z" />
      <g transform="translate(6 6)">
        <use fill="#feca00" xlinkHref="#mantine-zs81ltq93" />
        <g fill="#23875f" mask="url(#mantine-vywjgp4zc)">
          <path d="M0 0l10 6-10 6zm20 0L10 6l10 6z" />
        </g>
        <circle cx="10" cy="6" r="4" fill="#c51918" mask="url(#mantine-vywjgp4zc)" />
        <path
          fill="#feca00"
          d="M9.93 7.313L7.858 8.75l.661-2.46L7 4.717l2.059-.085.87-2.433.871 2.433h2.055L11.34 6.289l.76 2.316z"
          mask="url(#mantine-vywjgp4zc)"
        />
      </g>
      <path
        fill="#feca00"
        d="M9.908 18.967l.475 1.189h1.124l-.83.81.416 1.13-1.185-.63-1.132.701.361-1.202-.83-.768 1.125-.041zm6 0l.475 1.189h1.124l-.83.81.416 1.13-1.185-.63-1.132.701.361-1.202-.83-.768 1.125-.041zm6 0l.475 1.189h1.124l-.83.81.416 1.13-1.185-.63-1.132.701.361-1.202-.83-.768 1.125-.041zm-12-17.725l.476 1.189h1.124l-.83.809.416 1.131-1.186-.63-1.131.701.361-1.202-.83-.768 1.125-.041zm6 0l.476 1.189h1.124l-.83.809.416 1.131-1.186-.63-1.131.701.361-1.202-.83-.768 1.125-.041zm6 0l.476 1.189h1.124l-.83.809.416 1.131-1.186-.63-1.131.701.361-1.202-.83-.768 1.125-.041z"
      />
      <path
        fill="#c51918"
        d="M8.635 12.772c.359.32.636.534.832.643.067-.256.026-.673-.125-1.252-.042-.138-.295-.332-.758-.58-.13.437-.113.833.05 1.189z"
      />
      <path
        fill="#feca00"
        d="M9.196 13.93c-.922-.43-1.43-.95-1.524-1.56s-.041-1.4.157-2.37c1.498.34 2.298.876 2.4 1.606s-.017 1.325-.355 1.783c-.346-.89-.683-1.384-1.01-1.483 0 .882.11 1.557.332 2.024z"
      />
    </g>
  </svg>
);
