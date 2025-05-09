import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { peerDependencies } from './package.json'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    dts({ insertTypesEntry: true, exclude: ["**/*.stories.ts", "**/*.test.tsx"]}),
  ],
  build: { 
    lib: { 
      entry: './src/index.ts', 
      name: 'ui', 
      fileName: (format) => `ui.${format}.js`,
      formats: ['es', 'cjs', 'umd'],
    }, 
    rollupOptions: { 
      external: Object.keys(peerDependencies), 
      output: { globals: { react: 'React', 'react-dom': 'ReactDOM' } } 
    }
  },

  
})
