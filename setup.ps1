# Nike Store - Windows setup script
$ErrorActionPreference = "Stop"

Write-Host "Installing Composer dependencies..." -ForegroundColor Cyan
composer install

if (-not (Test-Path .env)) {
    Copy-Item .env.example .env
    php artisan key:generate
}

if (-not (Test-Path database\database.sqlite)) {
    New-Item -ItemType File -Path database\database.sqlite | Out-Null
}

Write-Host "Publishing Passport & Spatie..." -ForegroundColor Cyan
php artisan vendor:publish --provider="Laravel\Passport\PassportServiceProvider" --force
php artisan vendor:publish --provider="Spatie\Permission\PermissionServiceProvider" --force

Write-Host "Migrating database..." -ForegroundColor Cyan
php artisan migrate --force
php artisan db:seed --force
php artisan passport:install --force

Write-Host "Installing npm packages..." -ForegroundColor Cyan
npm install
npm run build

Write-Host ""
Write-Host "Done! Run:" -ForegroundColor Green
Write-Host "  php artisan serve"
Write-Host "  npm run dev"
Write-Host ""
Write-Host "Admin: admin@nike-store.test / password"
