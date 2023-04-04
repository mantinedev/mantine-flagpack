import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function PTFlag({ radius, sx, ...others }: FlagProps) {
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
        <mask id="mantine-yh5h6d4vh" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <mask id="mantine-1ou7cbm40" fill="#fff">
          <path
            fillRule="evenodd"
            d="M7.905 15.807C3.645 15.807.19 12.312.19 8S3.644.193 7.905.193c4.26 0 7.714 3.495 7.714 7.807s-3.454 7.807-7.714 7.807z"
          />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-yh5h6d4vh)">
          <path fill="#ef0000" d="M8 0h24v24H8z" />
          <path fill="#2f8d00" d="M0 0h12v24H0z" />
          <g fill="#ffe017">
            <path
              d="M7.429 0h1v2.699h-1zm0 13.494h1V16h-1z"
              mask="url(#mantine-1ou7cbm40)"
              transform="translate(4 4)"
            />
            <path
              fillRule="nonzero"
              d="M.314 8.404l-.28-.718C3.12 6.455 5.45 5.66 7.03 5.303c2.318-.526 4.865-.914 7.641-1.167l.068.768c-2.744.25-5.259.633-7.543 1.151-1.533.347-3.83 1.13-6.88 2.349z"
              mask="url(#mantine-1ou7cbm40)"
              transform="translate(4 4)"
            />
            <path
              fillRule="nonzero"
              d="M15.14 3.664l-.226.736c-2.332-.736-4.231-1.053-5.691-.955l-.05-.769c1.567-.105 3.554.226 5.968.988zm.808 4.116l-.431.636c-1.189-.826-2.653-1.24-4.404-1.24v-.771c1.898 0 3.512.457 4.835 1.375z"
              mask="url(#mantine-1ou7cbm40)"
              transform="translate(4 4)"
            />
            <path
              fillRule="nonzero"
              d="M15.302 8.01l.197.745c-2.563.695-4.969 1.088-7.218 1.181-2.265.093-4.905-.302-7.922-1.183l.211-.74c2.944.859 5.505 1.242 7.68 1.153 2.19-.09 4.542-.475 7.052-1.155z"
              mask="url(#mantine-1ou7cbm40)"
              transform="translate(4 4)"
            />
            <path
              fillRule="nonzero"
              d="M15.012 11.636l-1.205 1.235c-2.288-2.287-4.303-3.922-6.032-4.904-1.758-1-4.051-2.014-6.875-3.04l.579-1.633c2.907 1.056 5.284 2.108 7.135 3.16 1.88 1.068 4.009 2.795 6.398 5.182zm-13.554.699l-.456-.618a9.283 9.283 0 011.188-.722c.85-.431 1.703-.7 2.517-.725l.119-.002v.771c-.032 0-.064 0-.096.002-.686.02-1.439.258-2.198.644a8.529 8.529 0 00-1.074.65z"
              mask="url(#mantine-1ou7cbm40)"
              transform="translate(4 4)"
            />
            <path
              fillRule="nonzero"
              d="M1.812 12.603l.192-.747c2.54.67 4.498 1.003 5.865 1.003 1.362 0 3.388-.394 6.067-1.183l.213.74c-2.742.808-4.83 1.214-6.28 1.214-1.444 0-3.46-.343-6.057-1.027zm-.99-6.909L2.03 4.462l1.767 1.774L2.59 7.468z"
              mask="url(#mantine-1ou7cbm40)"
              transform="translate(4 4)"
            />
            <path
              fillRule="nonzero"
              d="M10.836 11.848l.898-1.478 2.803 1.744-.897 1.478z"
              mask="url(#mantine-1ou7cbm40)"
              transform="translate(4 4)"
            />
          </g>
          <path
            fill="#f9e813"
            fillRule="nonzero"
            d="M11.905 4.193c4.26 0 7.714 3.495 7.714 7.807s-3.454 7.807-7.714 7.807S4.19 16.312 4.19 12s3.454-7.807 7.715-7.807zM12 5.349c-3.682 0-6.667 3.021-6.667 6.747 0 3.727 2.985 6.747 6.667 6.747s6.667-3.02 6.667-6.747c0-3.726-2.985-6.747-6.667-6.747z"
          />
          <path
            fill="#fff"
            fillRule="nonzero"
            d="M7.657 7.185v6.261c.412 2.478 1.8 3.717 4.165 3.717s3.753-1.239 4.165-3.717v-6.26z"
          />
          <path
            fill="#c51918"
            fillRule="nonzero"
            d="M7.085 6.607h9.474v6.887l-.008.048c-.458 2.752-2.08 4.2-4.729 4.2s-4.271-1.448-4.729-4.2l-.008-.048z"
          />
          <path
            fill="#f7fcff"
            fillRule="nonzero"
            d="M9.252 8.71h5.14v4.442c-.254 1.528-1.11 2.293-2.57 2.293s-2.316-.765-2.57-2.293z"
          />
          <path fill="#f9e813" d="M8 7.084h.723v.482H8z" />
          <path fill="#060101" d="M7.619 7.277h1.333v.241H7.62z" />
          <path
            fill="#f9e813"
            d="M7.619 7.47h.723v.24h-.723zm.762 0h.723v.24H8.38zm-.762.578h.482v.723h-.482zm.952 0h.482v.723h-.482zm-.381 0h.241v.723h-.24z"
          />
          <path fill="#060101" d="M7.619 7.855h1.333v.241H7.62zm0 .579h1.333v.24H7.62z" />
          <path
            fill="#f9e813"
            d="M7.81 7.663h.24v.24h-.24zm.761 0h.241v.24h-.24zM8.19 7.47h.241v.482h-.24zm3.429-.386h.723v.482h-.723z"
          />
          <path fill="#060101" d="M11.238 7.277h1.333v.241h-1.333z" />
          <path
            fill="#f9e813"
            d="M11.238 7.47h.723v.24h-.723zm.762 0h.723v.24H12zm-.762.578h.482v.723h-.482zm.952 0h.482v.723h-.482zm-.38 0h.24v.723h-.24z"
          />
          <path fill="#060101" d="M11.238 7.855h1.333v.241h-1.333zm0 .579h1.333v.24h-1.333z" />
          <path
            fill="#f9e813"
            d="M11.429 7.663h.24v.24h-.24zm.761 0h.241v.24h-.24zm-.38-.193h.24v.482h-.24zm3.238-.386h.723v.482h-.723z"
          />
          <path fill="#060101" d="M14.667 7.277H16v.241h-1.333z" />
          <path
            fill="#f9e813"
            d="M14.667 7.47h.723v.24h-.723zm.762 0h.722v.24h-.722zm-.762.578h.482v.723h-.482zm.952 0h.482v.723h-.482zm-.381 0h.241v.723h-.24z"
          />
          <path fill="#060101" d="M14.667 7.855H16v.241h-1.333zm0 .579H16v.24h-1.333z" />
          <path
            fill="#f9e813"
            d="M14.857 7.663h.241v.24h-.24zm.762 0h.241v.24h-.241zm-.381-.193h.241v.482h-.24zm-.19 3.084h.723v.482h-.723z"
          />
          <path fill="#060101" d="M14.667 10.747H16v.241h-1.333z" />
          <path
            fill="#f9e813"
            d="M14.667 10.94h.723v.24h-.723zm.762 0h.722v.24h-.722zm-.762.578h.482v.723h-.482zm.952 0h.482v.723h-.482zm-.381 0h.241v.723h-.24z"
          />
          <path fill="#060101" d="M14.667 11.325H16v.241h-1.333zm0 .579H16v.24h-1.333z" />
          <path
            fill="#f9e813"
            d="M14.857 11.133h.241v.24h-.24zm.762 0h.241v.24h-.241zm-.381-.193h.241v.482h-.24zM8 10.554h.723v.482H8z"
          />
          <path fill="#060101" d="M7.619 10.747h1.333v.241H7.62z" />
          <path
            fill="#f9e813"
            d="M7.619 10.94h.723v.24h-.723zm.762 0h.723v.24H8.38zm-.762.578h.482v.723h-.482zm.952 0h.482v.723h-.482zm-.381 0h.241v.723h-.24z"
          />
          <path fill="#060101" d="M7.619 11.325h1.333v.241H7.62zm0 .579h1.333v.24H7.62z" />
          <path
            fill="#f9e813"
            d="M7.81 11.133h.24v.24h-.24zm.761 0h.241v.24h-.24zm-.381-.193h.241v.482h-.24zm.274 3.964l.464-.554.37.31-.465.554z"
          />
          <path fill="#060101" d="M8.367 15.32l.857-1.022.184.155-.857 1.022z" />
          <path
            fill="#f9e813"
            d="M8.514 15.444l.465-.554.184.155-.464.553zm.49-.584l.465-.554.184.155-.464.554zm-.047.955l.31-.369.554.465-.31.369zm.613-.729l.31-.37.553.465-.31.37zm-.245.292l.154-.185.554.465-.155.184z"
          />
          <path
            fill="#060101"
            d="M8.81 15.691l.857-1.021.184.155-.857 1.021zm.443.372l.857-1.021.184.155-.857 1.021z"
          />
          <path
            fill="#f9e813"
            d="M8.784 15.422l.155-.185.185.155-.155.184zm.49-.584l.155-.185.185.155-.155.185zm-.392.168l.154-.185.37.31-.155.185zm6.096-.54l.465.554-.37.31-.464-.554z"
          />
          <path fill="#060101" d="M14.586 14.298l.857 1.022-.185.155-.857-1.022z" />
          <path
            fill="#f9e813"
            d="M14.438 14.422l.465.554-.185.155-.464-.554zm.49.584l.465.554-.185.155-.465-.554zm-.933-.212l.31.37-.554.464-.31-.37zm.612.73l.31.369-.554.464-.31-.369zm-.244-.292l.154.184-.553.465-.155-.185z"
          />
          <path
            fill="#060101"
            d="M14.143 14.67L15 15.691l-.185.155-.857-1.021zm-.443.372l.857 1.021-.185.155-.857-1.021z"
          />
          <path
            fill="#f9e813"
            d="M14.413 14.692l.155.185-.185.155-.155-.185zm.49.584l.155.184-.185.155-.155-.184zm-.097-.416l.154.185-.369.31-.155-.185z"
          />
          <path
            fill="#013399"
            fillRule="nonzero"
            d="M12.558 9.205v.961c-.065.331-.285.497-.66.497s-.595-.166-.66-.497v-.961zm-.939.964c-.105 0-.19.086-.19.192s.085.193.19.193.19-.086.19-.193-.085-.192-.19-.192zm.571 0c-.105 0-.19.086-.19.192s.085.193.19.193c.106 0 .191-.086.191-.193s-.085-.192-.19-.192zm-.285-.386c-.105 0-.19.086-.19.193s.085.193.19.193.19-.087.19-.193-.085-.193-.19-.193zm-.286-.385c-.105 0-.19.086-.19.192s.085.193.19.193.19-.086.19-.193-.085-.192-.19-.192zm.571 0c-.105 0-.19.086-.19.192s.085.193.19.193c.106 0 .191-.086.191-.193s-.085-.192-.19-.192zm.368 1.927v.962c-.065.33-.285.496-.66.496s-.595-.165-.66-.496v-.962zm-.939.964c-.105 0-.19.086-.19.193s.085.193.19.193.19-.087.19-.193-.085-.193-.19-.193zm.571 0c-.105 0-.19.086-.19.193s.085.193.19.193c.106 0 .191-.087.191-.193s-.085-.193-.19-.193zm-.285-.385c-.105 0-.19.086-.19.192s.085.193.19.193.19-.086.19-.193-.085-.192-.19-.192zm-.286-.386c-.105 0-.19.086-.19.193s.085.193.19.193.19-.087.19-.193-.085-.193-.19-.193zm.571 0c-.105 0-.19.086-.19.193s.085.193.19.193c.106 0 .191-.087.191-.193s-.085-.193-.19-.193zm2.083-.193v.962c-.066.33-.286.496-.66.496-.375 0-.595-.165-.66-.496v-.962zm-.94.964c-.105 0-.19.086-.19.193s.085.193.19.193c.106 0 .19-.087.19-.193s-.084-.193-.19-.193zm.572 0c-.105 0-.19.086-.19.193s.085.193.19.193.19-.087.19-.193-.085-.193-.19-.193zm-.286-.385c-.105 0-.19.086-.19.192s.085.193.19.193.19-.086.19-.193-.085-.192-.19-.192zm-.286-.386c-.105 0-.19.086-.19.193s.085.193.19.193c.106 0 .19-.087.19-.193s-.084-.193-.19-.193zm.572 0c-.105 0-.19.086-.19.193s.085.193.19.193.19-.087.19-.193-.085-.193-.19-.193zm-3.061-.193v.962c-.065.33-.285.496-.66.496-.375 0-.595-.165-.66-.496v-.962zm-.94.964c-.104 0-.19.086-.19.193s.086.193.19.193c.106 0 .191-.087.191-.193s-.085-.193-.19-.193zm.572 0c-.105 0-.19.086-.19.193s.085.193.19.193.19-.087.19-.193-.085-.193-.19-.193zm-.286-.385c-.105 0-.19.086-.19.192s.085.193.19.193c.106 0 .191-.086.191-.193s-.085-.192-.19-.192zm-.285-.386c-.105 0-.19.086-.19.193s.085.193.19.193.19-.087.19-.193-.085-.193-.19-.193zm.571 0c-.105 0-.19.086-.19.193s.085.193.19.193.19-.087.19-.193-.085-.193-.19-.193zm2.082 1.928v.961c-.065.331-.285.497-.66.497s-.595-.166-.66-.497v-.961zm-.939.964c-.105 0-.19.086-.19.192s.085.193.19.193.19-.086.19-.193-.085-.192-.19-.192zm.571 0c-.105 0-.19.086-.19.192s.085.193.19.193c.106 0 .191-.086.191-.193s-.085-.192-.19-.192zm-.285-.386c-.105 0-.19.086-.19.193s.085.193.19.193.19-.087.19-.193-.085-.193-.19-.193zm-.286-.385c-.105 0-.19.086-.19.192s.085.193.19.193.19-.086.19-.193-.085-.192-.19-.192zm.571 0c-.105 0-.19.086-.19.192s.085.193.19.193c.106 0 .191-.086.191-.193s-.085-.192-.19-.192z"
          />
        </g>
      </svg>
    </Box>
  );
}