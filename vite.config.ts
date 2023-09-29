import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import svelte from '@sveltejs/vite-plugin-svelte';
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: {
		key: fs.readFileSync('C:/Certbot/live/locutus.link-0002/privkey.pem'),
		cert: fs.readFileSync('C:/Certbot/live/locutus.link-0002/fullchain.pem'),
    },
  },
  plugins: [sveltekit()],
});