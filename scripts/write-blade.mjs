import fs from 'fs';

const content = `<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Nike Store') }}</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="antialiased bg-white text-nike-black">
    <div id="app"></div>
</body>
</html>
`;

const target = new URL('../resources/views/app.blade.php', import.meta.url);
fs.writeFileSync(target, content, { encoding: 'utf8' });
const buf = fs.readFileSync(target);
console.log('written', target.pathname, 'hasNull', buf.includes(0));
