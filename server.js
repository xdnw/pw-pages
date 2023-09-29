import https from 'https';
import fs from 'fs';
import polka from 'polka';
import { createServer } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

const app = polka();

const options = {
  key: fs.readFileSync('C:/Certbot/live/locutus.link-0002/privkey.pem'),
  cert: fs.readFileSync('C:/Certbot/live/locutus.link-0002/fullchain.pem'),
};

createServer({
  server: {
    middlewareMode: true,
  },
  plugins: [svelte()],
}).then(vite => {
  app.use(vite.middlewares);

  https.createServer(options, app.handler).listen(5173, () => {
    console.log('Server running on https://localhost:5173');
  });
});