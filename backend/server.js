import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { connectDB } from './config/db.js';
import loginRoutes from './routes/login.route.js';
import resumeRoutes from './routes/resume.route.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendDistPath = path.join(__dirname, '../frontend/dist');
const indexHtmlPath = path.join(frontendDistPath, 'index.html');
const isFrontendBuilt = fs.existsSync(indexHtmlPath);
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json()); // allows us use json body in requests

app.get('/health', (_req, res) => {
  res.status(200).json({ ok: true });
});

app.use('/api', loginRoutes);
app.use('/api/resume', resumeRoutes);

if (isFrontendBuilt) {
  app.use(express.static(frontendDistPath));

  app.use((req, res, next) => {
    if (req.method !== 'GET' || req.path.startsWith('/api')) {
      return next();
    }

    return res.sendFile(indexHtmlPath);
  });
}

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});
