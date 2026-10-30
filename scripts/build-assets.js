const fs = require('node:fs');
const path = require('node:path');
const esbuild = require('esbuild');

const root = path.resolve(__dirname, '..');
const vendorDir = path.join(root, 'www', 'vendor');
fs.mkdirSync(vendorDir, { recursive: true });
fs.copyFileSync(
  path.join(root, 'node_modules', 'html2pdf.js', 'dist', 'html2pdf.bundle.min.js'),
  path.join(vendorDir, 'html2pdf.bundle.min.js'),
);
esbuild.buildSync({
  entryPoints: [path.join(__dirname, 'capacitor-bridge.js')],
  bundle: true,
  format: 'iife',
  outfile: path.join(vendorDir, 'capacitor-bridge.js'),
  minify: true,
  target: ['es2020'],
});
