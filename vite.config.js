import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Fix: point '@' to your source folder, not assets
      '@': path.resolve(__dirname, 'src'),
    },
  },
  assetsInclude: ['**/*.glb', '**/*.gltf', '**/*.webp'],
  server: {
    fs: { strict: false },
    mimeTypes: {
      '.glb': 'model/gltf-binary',
      '.gltf': 'model/gltf+json',
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const ext = path.extname(assetInfo.name ?? '');
          if (ext === '.glb') {
            return 'assets/[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
});
