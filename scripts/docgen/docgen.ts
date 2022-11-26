import path from 'path';
import fs from 'fs-extra';
import { generateDeclarations } from './generate-declarations';

// Paths for components that require props information extraction
const PATHS = ['../../src/TestComponent/TestComponent.tsx'].map((filePath) =>
  path.join(__dirname, filePath)
);

fs.writeJSONSync(path.join(__dirname, '../../docs/docgen.json'), generateDeclarations(PATHS), {
  spaces: 2,
});
