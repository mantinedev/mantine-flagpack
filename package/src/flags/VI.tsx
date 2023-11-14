import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function VIFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-r5iiim5l4" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-c217ratj5" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-ipm7u021l" />
          </mask>
          <mask id="mantine-wzade3599" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-1rjk8p4d4" />
          </mask>
          <path id="mantine-ipm7u021l" d="M0 0h32v24H0z" />
          <path
            id="mantine-1rjk8p4d4"
            d="M.066 0c.62.428 1.24.643 1.861.643.62 0 1.24-.215 1.861-.643.62.428 1.241.643 1.861.643C6.27.643 6.89.428 7.511 0v2.9c0 2-1.241 3.775-3.723 5.325C1.187 6.802-.054 5.015.066 2.865z"
          />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-r5iiim5l4)">
          <use fill="#f7fcff" xlinkHref="#mantine-ipm7u021l" />
          <g mask="url(#mantine-c217ratj5)">
            <path
              fill="#e8aa00"
              d="M16.032 14.063l1.835.774c.406.174.61.375.61.605 0 .345 1.032 1.219 1.032 1.561s-.9 1.17-1.27 1.537c-.372.367-.86 1.074-1.247 1.074-.388 0-.633.517-.96.517a.039.039 0 01-.024-.008l-.004.003-.019.005c-.327 0-.572-.517-.96-.517-.387 0-.875-.707-1.246-1.074s-1.27-1.195-1.27-1.537 1.032-1.216 1.032-1.56c0-.23.203-.432.61-.606l1.834-.774.024.448.023-.448zm-3.188-1.231l1.243 1.783s-1.05-.056-1.05.727-.964 1.14-1.503 1.14-.835.353-.835.974-1.103.24-1.366 0c-.263-.24.263-1.274.537-1.274s.587-.213 1.17-.213.06-.76.66-1.761c.4-.668.782-1.127 1.144-1.376zm6.54 0c.361.25.742.708 1.143 1.376.6 1.002.079 1.761.66 1.761.583 0 .896.213 1.17.213s.8 1.034.537 1.274-1.366.621-1.366 0-.296-.974-.835-.974c-.54 0-1.502-.357-1.502-1.14 0-.783-1.05-.727-1.05-.727l1.242-1.783zm-8.091-5.696c.398 0 1.148.965.773 1.371-.375.406-.502.644-.25.644.167 0 .672-.11 1.516-.329v3.772c-.809.192-1.314.192-1.517 0-.303-.288-.936-.017-.936-.33s-.699-.364-.699-.364-.646-.213-.646-.413c0-.134-.141-.39-.424-.768a30.634 30.634 0 01-2.984-1.915c-1.37-1.002-2.663-1.717-2.855-2.581-.716-.71-.988-1.142-.494-1.353.494-.212 8.117 2.266 8.516 2.266zm9.641 0c.399 0 8.022-2.478 8.516-2.266.494.211.222.644-.494 1.353-.192.864-1.484 1.579-2.855 2.58a30.634 30.634 0 01-2.984 1.916c-.283.378-.424.634-.424.768 0 .2-.646.413-.646.413s-.7.05-.7.363-.632.043-.935.331c-.203.192-.708.192-1.517 0V8.822c.844.22 1.35.329 1.517.329.25 0 .124-.238-.251-.644s.375-1.371.773-1.371zm-4.859-2.333c.787 0 1.072.94 1.072 1.124 0 .123.09.511.27 1.165-.18 0-.27.042-.27.127 0 .084.281.308.843.673-.42.123-.549.231-.388.323.162.092.29.255.388.49h-4.088l.282-.49c-.188-.086-.235-.128-.14-.128.094 0 .277-.19.546-.568h-.168c-.058-.095-.002-.142.168-.142s.324-.305.46-.914c.113-.285.032-.464-.242-.536s-.576.047-.906.358c.08-.497.174-.8.282-.907.161-.161.624-.03.624-.226s.48-.349 1.267-.349z"
            />
            <path
              fill="#46a000"
              d="M9 12.477c0 .302-.565.84-.735.84a.071.071 0 01-.056-.023c.258.51.559 1.059.903 1.642.013-.078.038-.176.075-.293.083-.184.234-.386.454-.604.24-.24.28-.129.284.067v.114l-.002.12c0 .273-.46.738-.675.826l.289.472c.012-.047.027-.101.046-.16.083-.184.234-.385.453-.604.329-.328.283 0 .283.302 0 .24-.355.627-.588.778l.204.316c.011-.044.026-.095.043-.15.083-.183.234-.385.453-.603.329-.328.283 0 .283.302 0 .235-.343.613-.575.769.423.646.889 1.33 1.398 2.05h-.705c-.353-.22-.813-.934-1.38-2.143-.075.033-.174.063-.268.097-.284.104-.983-.244-1.041-.404-.04-.106.13-.168.505-.184.188.014.41.079.665.193a38.205 38.205 0 01-.174-.391.935.935 0 01-.237.104l-.114.04c-.283.103-.982-.244-1.04-.404-.04-.107.129-.168.505-.184.201.015.442.088.723.219.033.016.062.03.087.045a31.298 31.298 0 01-.29-.686c-.03.051-.142.092-.266.135l-.114.04c-.284.103-.983-.245-1.041-.405-.039-.106.13-.168.506-.184.201.015.442.088.722.22a.758.758 0 01.15.087 59.59 59.59 0 01-.673-1.72c0 .065-.129.112-.275.162l-.114.04c-.283.104-.982-.244-1.04-.404-.04-.106.129-.168.505-.184.201.015.442.088.723.22a.492.492 0 01.187.124 33.238 33.238 0 01-.175-.466l-.05-.132.04.087c.1.223.21.453.33.69-.023-.079.003-.237.077-.47.083-.185.234-.386.453-.605.329-.328.283 0 .283.302zm.528.964c0 .302-.566.84-.736.84-.113 0-.113-.18 0-.538.083-.184.234-.385.453-.604.329-.328.283 0 .283.302zm-2.066.186c.202.015.443.088.723.219.42.197.097.266-.187.369-.284.103-.983-.244-1.041-.404-.04-.107.13-.168.505-.184zm-.039-2.976c.232.194.28.973.171 1.104a.08.08 0 01-.028.021l.171.474.082.223-.073-.165c-.078-.181-.15-.357-.215-.527-.078-.005-.195-.13-.35-.372-.087-.182-.144-.427-.17-.736-.04-.462.18-.216.412-.022zm-.448.994c.184.083.385.234.604.453.24.241.128.28-.068.284h-.113l-.12-.001c-.303 0-.841-.566-.841-.736 0-.114.18-.114.538 0zm1.366-.438l.04.114c.103.284-.245.983-.405 1.041-.106.04-.168-.13-.184-.505.015-.202.088-.442.22-.723.17-.365.245-.17.329.073z"
            />
            <path
              fill="#0093e1"
              d="M22.023 17.46l.174.648-.174.153.34.25-.505 2.252-.677-.586-.708.326v-.326l-.362.326-.271-.923h-.78l1.413-1.638h.499v-.482zm3.23-6.598l-.534 2.294-.304-.267-1.797 3.352 2.006-2.298-.387-.193 1.98-1.296-.862 2.112-.48-.346-2.036 2.562-.844-.325.844-3h-.572l1.145-2.111.034 2.348-.355-.115-.252 1.569 1.267-2.43-.421-.159zm3.439-.523c-.371.067-.556.212-.556.437v3.984c.067.254.252.384.556.39.052 0 .075.001.066.002h-1.394l-.81-.003c.329-.065.496-.195.503-.389.002-.061.004-.24.005-.534v-1.434l-.005-2.016c-.033-.292-.2-.437-.503-.437zm-24.384.065c-.17 0-.288.11-.352.327l1.036 2.953c.668-1.607 1.002-2.553 1.002-2.838 0-.285-.14-.433-.42-.442H7.5l-.466.156c-1.028 2.357-1.542 3.789-1.542 4.293-.05.112.187.205.71.28h-2.07l.432-.28c-.161-.416-.74-1.9-1.735-4.449z"
            />
            <g transform="translate(12.278 8.013)">
              <use fill="#f7fcff" xlinkHref="#mantine-1rjk8p4d4" />
              <path
                fill="#2e42a5"
                d="M-.198-.193h7.84v3.02h-7.84z"
                mask="url(#mantine-wzade3599)"
              />
              <path
                fill="#af0100"
                d="M1.318 2.827v6.105h-.66V2.827zm1.12 0v6.105h-.66V2.827zm1.12 0v6.105h-.66V2.827zm1.12 0v6.105h-.66V2.827zm1.12 0v6.105h-.66V2.827zm1.12 0v6.105h-.66V2.827z"
                mask="url(#mantine-wzade3599)"
              />
            </g>
          </g>
        </g>
      </svg>
    </Box>
  );
}
