import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function GSFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-4q87uouiz" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-pz1i2qi99" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-wl7ejkkbc" />
          </mask>
          <linearGradient
            id="mantine-9w6wtw73n"
            x1="50.717%"
            x2="54.756%"
            y1="29.732%"
            y2="27.385%"
          >
            <stop offset="0" stopColor="#d5dfff" />
            <stop offset="1" stopColor="#fff" />
          </linearGradient>
          <path id="mantine-wl7ejkkbc" d="M0 0h18v14H0z" />
        </defs>
        <g fill="none" fillRule="evenodd">
          <g fill="#2b409a" mask="url(#mantine-4q87uouiz)">
            <path d="M0 .1h32v24H0z" />
          </g>
          <use fill="#2b409a" xlinkHref="#mantine-wl7ejkkbc" />
          <g mask="url(#mantine-pz1i2qi99)">
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
          <path
            fill="#6a4c2d"
            fillRule="nonzero"
            d="M24.318 18.551c-.061 0-.284-.12-.284-.12s-.162.256-.247.27c-.084.016-.522-.157-.522-.157s-.308.24-.377.225l-.777-.165-.384-.24s-.216.345-.223.338a13.36 13.36 0 00-.646-.128s.192-.263.192-.27c0-.008-.092-.038-.092-.038l-.139.113-.569.052.139-.39.223-.331 2.73-2.592 1.345 2.427-.2.728s-.108.278-.169.278z"
          />
          <path
            stroke="#fb0"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth=".5"
            d="M21.71 18.06c.095.116 1.348 1.396 1.551 2.002.135.404-.414.348-1.647-.168 1.553-1.009 2.717-1.513 3.493-1.513.776 0 1.926.504 3.451 1.513-1.023.72-1.53.854-1.519.4.016-.682.72-2.025 1.562-2.233"
          />
          <path
            fill="#f7fcff"
            fillRule="nonzero"
            d="M29.542 18.16l-.383-.142-.339-.45-1.402-.102-1.28-.35-.539.36.29.38.71.26z"
          />
          <path
            fill="#656263"
            fillRule="nonzero"
            d="M23.939 9.866c.013.033.299-.025.36.146.308-.455.669-.02.669-.02l.304-.36.343.324.315-.024.33.772-2.598-.049c.176-.548.268-.81.277-.789zm2.692 3.288c-.02-.245-.237-.273-.358-.265a.438.438 0 00-.23.11l-.4-.249s.2-1.236.412-1.313c.203-.142.238-.204.238-.236 0-.033-.075-.165-.075-.165l-1.306-.151-1.235.142s-.096.194-.084.251c.013.057.017.118.238.286.245.183.413 1.24.413 1.24s-.346.166-.367.146c-.02-.02-.125-.04-.18-.033a.327.327 0 00-.233.33c0 .233.18.368.18.368s1.18.865 1.356 1.183c.171-.383 1.293-1.249 1.427-1.314.054-.032.225-.085.204-.33z"
          />
          <path
            fill="#000"
            fillRule="nonzero"
            d="M27.81 12.002c.098-.064.752-.096.909 0 .156.095.215.568.215.568s.098.166.105.287c.006.122.02.205.02.205s.522.664.529 1.264c.059.41.045 1.501-.118 1.916-.006.518-.228.856-.228.856s.052.09.045.185a.48.48 0 01-.059.186l-.49.21-.542-.09-.615-1.794.144-3.033.04-.154-.066-.408s.013-.135.111-.198z"
          />
          <path
            fill="#f7fcff"
            fillRule="nonzero"
            d="M24.262 13.594s.661 0 .733.21c.125-.28.697-.262.697-.262l1.036-.035.018 2.445c-.202.949-.905 1.618-1.68 1.904-.923-.292-1.507-1.054-1.698-1.922l-.107-2.322 1.001-.018z"
          />
          <path
            fill="#006b00"
            fillRule="nonzero"
            d="M23.618 13.603l1.457 3.796 1.317-3.88c-.408.027-1.285-.062-1.393.302-.17-.326-1.091-.194-1.381-.218z"
          />
          <path
            fill="#ffd100"
            d="M25.307 14.198c.089.23.089.403 0 .517-.132.171.011.312.091.312s.355.272.132.272-.348-.085-.348.154.307 1.315.216 1.573-.068.456.063.39.212-.234.14-.559c-.07-.324-.14-.248-.14-.528s.07-.593.07-.593.116.088.033.408c-.083.32.103.762.103.882s.006.451-.066.484c-.07.033-.136.232-.203.08-.066-.152-.108-.403-.193-.23-.085.172-.068.57-.157.589-.088.019-.22.207-.22.131 0-.075-.125-.212-.087-.339.038-.127.071-.142.102-.02s.16.12.16.02-.046-.051 0-.28c.045-.23.095-.532 0-.514-.096.018-.243.167-.262-.108-.02-.275-.098-.403-.035-.457.063-.053.147-.245.174-.094.027.15-.091.294-.072.348s.03.177.112.074c.083-.103.131-.272.193-.115s.063.033-.065-.266c-.128-.3-.236-.467-.22-.73.015-.262-.006-.361.015-.445.02-.085-.229-.497-.166-.615.064-.119.088-.501.166-.433.077.07.118.162.077.265-.04.103-.08.205-.04.275s.178.27.205.22c.028-.051.12-.002.12-.288s-.103-.386-.038-.454c.043-.045.09-.02.14.074z"
          />
          <g fillRule="nonzero">
            <g fill="#1e5aa6">
              <path d="M26.4 13.52l.197-.004-.35.434.42.48-.828 1.02.782.92a2.38 2.38 0 01-.319.563l-.449-.485.814-.992-.669-.742zm-3.019.092l.394.416-.417.508.866.92-.716.937c.086.206.209.435.342.604l.426-.526-.876-.952.642-.795-.45-1.117z" />
              <path d="M24.566 16.078l-.31.402 1.105 1.249c.195-.096.349-.206.516-.338l-.576-.65.234-.673.337.38-1.053 1.313a2.325 2.325 0 01-.548-.33l.557-.69z" />
            </g>
            <path
              fill="url(#mantine-9w6wtw73n)"
              d="M9.385 6.851c0 .064.07 3.832.146 3.796.19-.09.233.106.233.106s.066.62-.098.703a2.416 2.416 0 01-.422.187l-.283-.206s-.288-.403-.353-.582c-.066-.178-.144-.977-.118-1.15.026-.171.046-1.18.033-1.232-.013-.051-.066-.894-.033-1.022.033-.127.235-.69.229-.69 0 0 .666.026.666.09z"
              transform="translate(19 6)"
            />
            <path
              fill="#ff7000"
              d="M27.732 12.206c.137 0 .242.115.274.217.007.045-.013.077-.006.16.006.083-.994.019-1 .013 0 0 .464-.441.732-.39z"
            />
            <path
              fill="#fff"
              stroke="#000"
              strokeLinejoin="round"
              strokeWidth=".5"
              d="M28.83 17.667s.313-.07.398-.18c.053-.038.327.403-.398.18z"
            />
            <path fill="#000" d="M28.309 12.46a.05.05 0 11-.1 0 .05.05 0 01.1 0z" />
            <path
              fill="#f7fcff"
              d="M25.82 11.909s.521.55.858.544c.061.162-.153.312-.239.384-.171-.054-.326.01-.724-.469.025-.305.112-.447.106-.46zm2.07-2.771c.05.353-.002.435-.025.583s.904.203 1.143-.09c-.025.132-.303.668-1.565.662.478.443-.153.796-.422.688.496-.37-.14-.592-.496-.353.067-.203.563-1.226 1.366-1.49z"
            />
            <path
              fill="#00f"
              d="M26.543 10.616s.3-.191.576-.006c-.21.171-.163.618-.069 1.007.048-.14.271-.703.779-.713a1.355 1.355 0 01-.65 1.193c-.084.874-.746.74-.746.74-.018.005.306-.216.263-.36-.104-.58-.52-.473-.55-.359-.059-.054-.387-.765.397-.562-.33-.598-.018-.898 0-.94z"
            />
            <path
              fill="#f7fcff"
              d="M24.088 12.064s-.508.431-.796.293c-.215.126-.466-.095-.466-.095s.294 1.059 1.348.293a2.388 2.388 0 00-.086-.49z"
            />
            <path
              fill="#00f"
              d="M23.285 12.34c.043-.222.22-.33.362-.12.19.036.38-.724-.294-.599.19-.993-.38-1.364-.38-1.364s-.202 1.101-.11 1.305c.092.203-.135-.377-.863-.539-.013.832.814 1.221.814 1.221s.233.21.471.096z"
            />
            <path
              fill="#f7fcff"
              d="M22.597 11.139c-.215.066-.736-.249-.405-.656-1.084-.024-1.674-.94-1.313-.765.361.175.62-.197.889 0-.33-.299.115-.538.115-.538s.925.27 1.09 1.071c-.055.156-.08.43-.092.419 0-.006-.572-.01-.284.469z"
            />
            <path
              fill="#cdad56"
              d="M24.327 7.431c.005-.027.698-.265.744-.658.031-.263.028-.305-.01-.129 0 0 .193-.178.123-.274-.07-.096-.047.123-.16.119-.112-.005-.05-.238-.05-.238s-.01-.027-.043-.041c-.047.004-.155-.096-.155-.096s-.07-.092-.13.196c.032.307.233.248.233.449s-.177.357-.229.361c-.051.005-.033-.17-.033-.17s-.028-.081-.046-.081c-.02 0 .103-.019.084-.247-.042-.275-.075.064-.15.05-.075-.014-.019-.252.01-.28.027-.027-.034-.141-.197.152-.014.142-.033-.037-.066-.028-.056.115-.047.197.033.302.117.105.192.21.187.266-.004.054-.066.178-.15.178-.084 0 .005-.151 0-.201-.004-.05-.145-.234-.145-.234s-.098-.155-.089-.16c.01-.004-.224.224-.084.343-.108-.013-.117.028-.117.028 0 .055.145.078.164.174.019.096-.15.15-.15.15s.07.097.267-.09a.297.297 0 01-.075.2c.065.03.117.026.126.101 0 0 .103-.114.108-.142zm-.75.142s-.088-.127-.091-.152c-.005-.025-.43.032-.633-.476-.13-.242 0-.1 0-.1l.008-.117s-.14-.167-.08-.254c.06-.088.035.112.112.113.095-.005.044-.217.044-.217s.008-.025.036-.037c.04.004.056.129.091.137.036.009.11-.147.133-.179.033-.005.032-.129.084.133-.028.28-.265.225-.265.408 0 .183.151.325.195.329.044.004.028-.154.028-.154s.024-.075.04-.075-.14.03-.123-.179c.035-.195.115.013.178 0 .064-.012-.007-.206.011-.236.004-.03.098-.156.134.124.012.13.084-.111.112-.103.048.104-.02.243-.088.34-.1.095-.145.2-.14.25.003.05.027.112.098.112.072 0 .025-.087.028-.133s.124-.194.124-.194c.023-.037.004-.105.028-.137.04 0 .055-.052.095.094.04.145.087-.096.087-.096s.056.179-.063.287c.091-.012.1.025.1.025 0 .05-.044.07-.06.158s.047.138.047.138-.06.087-.226-.084a.279.279 0 00.063.183c-.056.027-.099.024-.107.092z"
            />
            <path
              fill="#923f00"
              d="M24.675 7.475c-.102.298-.47.185-.47.185s.011.15-.025.221c.03.023.248.19.477.234.33.062 1.004-.108 1.23.143.152.168.223.32.215.455-.196.023-.267.068-.212.138.053.067.2.117.212.187.042.222-.138.62-.073.77-.102.01-.11.114-.11.114-.004.079-.104.095-.3.048.122-.307.187-.497.195-.568.013-.108-.128-.3-.238-.3-.11 0-.19.341-.19.341s-.055.258-.037.281c.019.024-.073-.083-.073-.083s-.03.104-.077.167c-.053.071-.126.102-.126.102s-.055-.156-.036-.215c.018-.06.3-.293.276-.461-.011-.074-.021-.203-.114-.246-.117-.054-.332-.015-.462-.041-.072.121-.104.79-.055.832.049.041-.123.131-.123.131l-.202.006c-.003-.09.12-.338.12-.547s.015-.434.015-.434-.136.034-.208.167c-.061.112-.061.323-.055.353.012.066.073.252.055.306-.019.053-.337.125-.337.125l-.013-.174s.135-.083.135-.293.012-.508.006-.526c-.003-.011-.11-.47-.25-.778-.094-.206-.238-.3-.245-.317-.019-.042-.019-.09-.019-.09s-.202.144-.44-.162c.218-.182.452-.048.452-.048s.062-.167.343-.155c.282.012.337.167.325.15 0 0 .208-.18.434-.018z"
            />
            <path
              fill="#00f"
              d="M25.781 10.588c.005 0 .52.015.525.284.006.269-.158.2-.163.2l-.377-.046z"
            />
            <path
              fill="#f7fcff"
              d="M25.281 10.513s.643-.005.607.27c-.036.273-.199.219-.199.219l-.31-.025z"
            />
            <path
              fill="#00f"
              d="M24.92 10.483l.372.03s.224.03.214.24c-.01.209-.23.214-.23.214l-.362-.02z"
            />
            <path
              fill="#f7fcff"
              d="M24.047 10.588c-.005 0-.52.015-.525.284-.005.269.158.2.163.2l.378-.046z"
            />
            <path
              fill="#00f"
              d="M24.547 10.513s-.642-.005-.607.27c.036.273.2.219.2.219l.31-.025z"
            />
            <path
              fill="#f7fcff"
              d="M24.91 10.483l-.373.03s-.224.03-.214.24.23.214.23.214l.361-.02z"
            />
            <path
              fill="#5e0043"
              d="M26.287 13.165c.098.032.023.33-.024.358l-.357-.014s.268-.386.38-.344zm-2.216.413c-.084-.115-.206-.432-.319-.345-.099.033-.023.33.023.359z"
            />
            <path
              fill="#b4b6b9"
              d="M23.628 11.364l1.288.823 1.16-.762s.242-.13.221-.224c-.02-.094-.104-.058-.146-.041a72.9 72.9 0 00-1.214.828l-1.248-.771s-.091-.029-.108.028c-.017.058.034.09.047.119z"
            />
            <path
              fill="#ff7000"
              d="M27.947 17.427s-.563.17-.406.175c.077.003.302.003.675 0zm.228.186l-.5.015s-.126.111-.134.138c-.008.027.083.035.083.035.344.087.646.102.906.046.197-.067.231-.148.093-.197-.138-.05-.444-.035-.448-.037z"
            />
            <path
              fill="#8a9396"
              d="M22.39 12.99s-.064.2 0 .3c.066.1.475.909.475.909s.28-.337.382-.346c.102-.009.055.873.055.873s-.167.154-.27.145c-.102-.009.252.346.242.646-.01.3-.465 1.79-.632 1.818-.168.027-.312-.281-.312-.547s.172-.69.163-.808c-.01-.118-.832 1.267-.882 1.484-.01.04.045.189.045.189s-.323.026-.251.436c-.95-.327-1.414-.89-1.405-1.463.004-.22-.206-.736 0-1.306.331-.918 1.139-1.966 1.144-2.066.01-.164.075-.237.084-.328.01-.09-.028-.554.065-.636.093-.082.577-.282.698-.273.12.01.223.091.223.091s.456 0 .484.173c.028.173-.093.236-.093.236s.065.246-.214.473z"
            />
            <path d="M22.872 14.221s.306-.375.377-.361c.072.014.05.868.05.868s-.228.167-.277.16c-.05-.007.256.403.249.556-.007.153-.015.153-.015.153s0-.09-.07-.236c-.072-.146-.03-.313-.491-.681-.114-.23.227.139.298.083.071-.055-.128-.535-.12-.542z" />
          </g>
          <path d="M22.691 12.285s-.356-.103-.479.069c-.123.17-.093.268-.03.285" />
          <path
            fill="#2b2b2b"
            fillRule="nonzero"
            d="M22.662 18.146c.102.07.272.127.509.169-.582.156-1.168.083-1.758-.221-.081-.355.19-.435.257-.437.156-.041.838.382.992.489z"
          />
          <path
            fill="#00713d"
            fillRule="nonzero"
            d="M23.73 18.108c.953.504 1.055.165 1.713-.315.045-.033.262.77 1.183.315 1.304-.644-1.117-1.718-1.46-1.695-.341.024-2.39 1.19-1.437 1.695z"
          />
        </g>
      </svg>
    </Box>
  );
}
