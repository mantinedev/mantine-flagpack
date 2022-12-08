import path from 'node:path';
import commonjs from '@rollup/plugin-commonjs';
import nodeExternals from 'rollup-plugin-node-externals';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';

export default {
  input: path.join(__dirname, '../src/index.ts'),
  output: [
    { format: 'es', file: './dist/esm/index.js' },
    { format: 'cjs', file: './dist/cjs/index.js' },
  ],
  plugins: [
    commonjs(),
    nodeExternals(),
    nodeResolve({ extensions: ['.ts', '.tsx', '.js', '.jsx'] }),
    typescript({
      project: path.resolve(process.cwd(), 'tsconfig.json'),
    }),
    json(),
    replace({ preventAssignment: true }),
  ],
};
