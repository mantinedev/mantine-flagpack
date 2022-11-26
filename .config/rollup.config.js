import path from 'node:path';
import commonjs from '@rollup/plugin-commonjs';
import nodeExternals from 'rollup-plugin-node-externals';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';

export default {
  input: path.join(__dirname, '../src/index.ts'),
  output: {
    format: 'esm',
    externalLiveBindings: false,
    preserveModules: true,
    dir: path.join(__dirname, '../dist'),
    sourcemap: 'inline',
  },
  plugins: [
    commonjs(),
    nodeExternals(),
    nodeResolve({ extensions: ['.ts', '.tsx', '.js', '.jsx'] }),
    esbuild({
      minify: false,
      sourceMap: false,
      tsconfig: path.resolve(process.cwd(), 'tsconfig.json'),
    }),
    json(),
    replace({ preventAssignment: true }),
  ],
};
