import path from 'path';
import fs from 'fs-extra';
import { randomId } from '@mantine/hooks';

const imagesFolder = path.join(__dirname, '../flags');
const componentsFolder = path.join(__dirname, '../src/flags');

const replacements = [
  ['xmlns:xlink="http://www.w3.org/1999/xlink"', ''],
  ['strokeLinejoin="square"', ''],
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

const tsxTemplate = (name: string, svg: string) => `import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function ${name}Flag({ size = 40, radius, sx, ...others }: FlagProps) {
  return (
    <Box
      sx={[
        (theme) => ({
          display: 'inline-block',
          overflow: 'hidden',
          lineHeight: 1,
          width: size,
          borderRadius: theme.fn.radius(radius),

          '& svg': {
            display: 'block',
          },
        }),
        ...packSx(sx),
      ]}
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
