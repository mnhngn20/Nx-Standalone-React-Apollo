// @ts-nocheck
/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import type { PluginOption } from 'vite';
import { defineConfig, loadEnv } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';

const htmlPlugin: (
  env: Record<string, string | undefined>,
) => PluginOption = env => ({
  name: 'html-transform',
  transformIndexHtml: {
    enforce: 'pre',
    transform: (html: string) =>
      html.replace(/<%=(.*?)%>/g, (match, p1) => env[p1] ?? match),
  },
});

export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    cacheDir: './node_modules/.vite/nx-standalone',
    optimizeDeps: {
      include: ['@ant-design/icons'],
    },
    plugins: [react(), htmlPlugin(process.env), viteTsConfigPaths()],
    preview: {
      host: 'localhost',
      port: 3000,
    },
    resolve: {
      alias: [{ find: /^~antd/, replacement: 'antd' }],
    },
    server: {
      host: 'localhost',
      port: 3000,
    },
    test: {
      cache: {
        dir: './node_modules/.vitest',
      },
      environment: 'jsdom',
      globals: true,
      include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    },
  });
};
