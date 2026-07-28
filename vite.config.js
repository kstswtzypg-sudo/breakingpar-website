import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Static build output (dist/) is deployed directly to Cloudflare Pages
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist',
    },
});
