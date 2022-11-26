import fs from 'fs-extra';
import path from 'node:path';
import pkg from '../package.json';
import { getNextVersion } from './get-next-version';

export function updateVersion(config: { type: string; stage?: string }) {
  const nextVersion = getNextVersion(pkg.version, config);
  pkg.version = nextVersion;
  fs.writeJsonSync(path.join(__dirname, '../package.json'), pkg, { spaces: 2 });
  return pkg;
}
