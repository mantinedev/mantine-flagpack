import path from 'path';
import fs from 'fs-extra';
import { randomId } from '@mantine/hooks';

const imagesFolder = path.join(process.cwd(), 'flags');
const componentsFolder = path.join(process.cwd(), 'package/src/flags');

const replacements = [
  ['xmlns:xlink="http://www.w3.org/1999/xlink"', ''],
  ['stroke-linejoin="square"', ''],
  ['style="mask-type:alpha"', 'style={{ maskType: "alpha" }}'],
];

function replaceSvgCode(svgContent: string) {
  return replacements.reduce(
    (acc, [replace, replaceWith]) => acc.replace(new RegExp(replace, 'g'), replaceWith),
    svgContent
  );
}

function replaceId(id: string, svgContent: string): string {
  const random = randomId();
  return (svgContent as any)
    .replaceAll(`id="${id}"`, `id="${random}"`)
    .replaceAll(`"#${id}"`, `"#${random}"`)
    .replaceAll(`(#${id})`, `(#${random})`);
}

const ids = 'abcdefghijklmnopqrstuvwxyz'.split('');

function replaceIds(svgContent: string) {
  return ids.reduce((acc, id) => replaceId(id, acc), svgContent);
}

const svgFlags = fs
  .readdirSync(imagesFolder)
  .map((flag) => [
    flag.replace('.svg', ''),
    replaceIds(replaceSvgCode(fs.readFileSync(path.join(imagesFolder, flag)).toString('utf-8'))),
  ]);

const tsxTemplate = (name: string, svg: string) => `import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function ${name}Flag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      ${svg}
    </Box>
  );
}
`;

let indexExports = '';

svgFlags.forEach(([flag, svgContent]) => {
  indexExports += `export { ${flag}Flag } from './${flag}';\n`;
  fs.writeFileSync(path.join(componentsFolder, `${flag}.tsx`), tsxTemplate(flag, svgContent));
});

fs.writeFileSync(path.join(componentsFolder, 'index.ts'), indexExports);
