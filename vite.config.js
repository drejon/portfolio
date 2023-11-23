import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

const createAlias = (folder) => ({
  [`nested-${folder}`]: path.resolve(__dirname, `${folder}/src`),
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      ...createAlias('battleshipV2'),
      ...createAlias('minesweeper'),
      ...createAlias('tic-tac-toe'),
      ...createAlias('todolist'),
    },
  },
})
