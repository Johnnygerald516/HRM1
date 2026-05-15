import express from 'express';
import { join } from 'node:path';

import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';

const app = express();
const angularApp = new AngularNodeAppEngine();

/**
 * 📦 Correct build folder (VERY IMPORTANT)
 */
const browserDistFolder = join(process.cwd(), 'dist/HRM1/browser');

/**
 * 🔥 1. SERVE ASSETS FIRST (CRITICAL FIX)
 * This prevents Angular SSR from hijacking /assets requests
 */
app.use(
  '/assets',
  express.static(join(browserDistFolder, 'assets'), {
    maxAge: '1y',
    index: false,
  })
);

/**
 * 🔥 2. SERVE ALL STATIC FILES (JS, CSS, IMAGES)
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  })
);

/**
 * 🔥 3. SSR HANDLER (LAST — VERY IMPORTANT ORDER)
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) => {
      if (response) {
        writeResponseToNodeResponse(response, res);
      } else {
        next();
      }
    })
    .catch(next);
});

/**
 * 🚀 START SERVER
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;

  app.listen(port, () => {
    console.log(`🚀 SSR Server running at http://localhost:${port}`);
  });
}

/**
 * Angular CLI handler
 */
export const reqHandler = createNodeRequestHandler(app);