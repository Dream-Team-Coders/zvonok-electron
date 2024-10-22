import type { Configuration } from 'webpack';
import path from 'path';
import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

function srcPaths(src: string) {
  return path.join(__dirname, src);
}

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    alias: {
      '@': srcPaths('src'),
      '@client': srcPaths('src/client'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
};
