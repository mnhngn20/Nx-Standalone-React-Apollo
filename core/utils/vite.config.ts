/// <reference types="vitest" />
import { joinPathFragments } from '@nx/devkit';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      fileName: 'index',
      formats: ['es', 'cjs'],

      name: 'core-utils',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  },

  cacheDir: '../../node_modules/.vite/core-utils',

  plugins: [
    dts({
      entryRoot: 'src',
      skipDiagnostics: true,
      tsConfigFilePath: joinPathFragments(__dirname, 'tsconfig.lib.json'),
    }),
    react(),
    viteTsConfigPaths({
      root: '../../',
    }),
  ],

  test: {
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
