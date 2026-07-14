/**
 * Copyright © 2025 Ashish. All rights reserved.
 * This source code is the property of Ashish and may not be reproduced, distributed, 
 * or transmitted in any form without explicit written permission.
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor';
            }
            if (id.includes('jszip')) {
              return 'zip';
            }
          }
        },
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
})
