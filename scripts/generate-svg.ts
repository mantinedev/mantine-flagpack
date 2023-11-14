import fs from 'fs-extra';
import path from 'node:path';
import { randomId } from '@mantine/hooks';
import optimize from 'svgo-browser/lib/optimize';

const imagesFolder = path.join(process.cwd(), 'flags');

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
    flag.replace('.svg', '').split(' - ')[0],
    fs.readFileSync(path.join(imagesFolder, flag)).toString('utf-8'),
  ]);

svgFlags.forEach(async ([key, svgContent]) => {
  const code = replaceIds(await optimize(svgContent));
  fs.writeFileSync(path.join(imagesFolder, `${key}.svg`), code);
});
