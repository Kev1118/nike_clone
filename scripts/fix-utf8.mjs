import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const skip = new Set(['node_modules', 'vendor', '.git', 'public/build', 'storage/logs']);

function walk(dir, files = []) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (skip.has(entry.name)) continue;
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) walk(full, files);
        else if (/\.(php|blade\.php|js|mjs|vue|css|json|md|ps1|htaccess|env)$/.test(entry.name) || entry.name === 'artisan') {
            files.push(full);
        }
    }
    return files;
}

let fixed = 0;
for (const file of walk(root)) {
    const buf = fs.readFileSync(file);
    if (!buf.includes(0)) continue;

    let text;
    if (buf[0] === 0xff && buf[1] === 0xfe) {
        text = buf.slice(2).toString('utf16le');
    } else {
        text = buf.toString('utf16le').replace(/\0/g, '');
    }

    fs.writeFileSync(file, text, { encoding: 'utf8' });
    fixed++;
    console.log('fixed:', path.relative(root, file));
}

const viewsDir = path.join(root, 'storage/framework/views');
if (fs.existsSync(viewsDir)) {
    for (const name of fs.readdirSync(viewsDir)) {
        if (name.endsWith('.php')) fs.unlinkSync(path.join(viewsDir, name));
    }
}

console.log(fixed ? `Done. Fixed ${fixed} file(s). Cleared compiled views.` : 'All files are already UTF-8.');
