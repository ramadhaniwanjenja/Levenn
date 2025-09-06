#!/usr/bin/env node

import { spawn } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('Starting custom Vercel build process...');

// Use Node.js to directly execute Vite
const vitePath = join(__dirname, 'node_modules', 'vite', 'bin', 'vite.js');

const buildProcess = spawn('node', [vitePath, 'build'], {
  stdio: 'inherit',
  cwd: __dirname
});

buildProcess.on('close', (code) => {
  if (code === 0) {
    console.log('Build completed successfully!');
    process.exit(0);
  } else {
    console.error(`Build failed with exit code ${code}`);
    process.exit(code);
  }
});

buildProcess.on('error', (error) => {
  console.error('Build process error:', error);
  process.exit(1);
});
