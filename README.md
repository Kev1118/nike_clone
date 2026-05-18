# Nike Store

A Nike-inspired e-commerce demo built with **Laravel 11** (API), **Vue 3**, **Laravel Passport**, **Spatie Laravel Permission**, **PrimeVue**, and **Tailwind CSS**.

## Features

- Nike-style storefront: hero, product grid, product detail, cart, checkout
- REST API with Laravel Passport (Bearer token authentication)
- Roles & permissions via Spatie (`admin`, `customer`)
- Admin panel: manage products and order statuses
- PrimeVue UI components + Tailwind styling

## Requirements

- PHP 8.2+
- Composer
- Node.js 18+ and npm
- SQLite (default) or MySQL

## Setup

```powershell
cd "C:\Users\Kevin Morales\nike-store"

# Install PHP dependencies
composer install

# Environment
copy .env.example .env
php artisan key:generate

# SQLite database
New-Item -ItemType File -Path database\database.sqlite -Force

# Publish vendor assets
php artisan vendor:publish --provider="Laravel\Passport\PassportServiceProvider"
php artisan vendor:publish --provider="Spatie\Permission\PermissionServiceProvider"

# Migrate & seed
php artisan migrate --force
php artisan db:seed --force
php artisan passport:install --force

# Frontend
npm install
npm run build

# Run (two terminals)
php artisan serve
npm run dev
```

Open [http://127.0.0.1:8000](http://127.0.0.1:8000)

### Troubleshooting: raw Blade/HTML with `` characters

If the page shows unprocessed Blade (`{{ }}`, `@vite`) with garbled characters, PHP files were saved as **UTF-16**. Fix encoding and clear views:

```powershell
node scripts/fix-utf8.mjs
node scripts/write-blade.mjs
php artisan view:clear
```

Restart `php artisan serve` and hard-refresh the browser (Ctrl+F5).

## Demo accounts

| Role     | Email                     | Password   |
|----------|---------------------------|------------|
| Admin    | admin@nike-store.test     | password   |
| Customer | customer@nike-store.test  | password   |

## API overview

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/register` | — | Register (customer role) |
| POST | `/api/login` | — | Login, returns Bearer token |
| GET | `/api/products` | — | List products |
| GET | `/api/products/{slug}` | — | Product detail |
| GET/POST/PATCH/DELETE | `/api/cart` | Bearer | Shopping cart |
| POST | `/api/orders` | Bearer | Place order |
| CRUD | `/api/admin/products` | Bearer + admin | Manage products |
| GET/PATCH | `/api/admin/orders` | Bearer + admin | Manage orders |

Send the token as: `Authorization: Bearer {token}`

## Roles & permissions

- **admin**: `manage products`, `manage categories`, `manage orders`, `view admin`
- **customer**: shop, cart, checkout (no admin permissions)

## Project structure

```
app/Http/Controllers/Api/   # API controllers
app/Models/                 # Eloquent models
database/migrations/        # Database schema
database/seeders/           # Roles, demo users, products
resources/js/               # Vue SPA (pages, stores, components)
routes/api.php              # API routes
routes/web.php              # SPA catch-all
```

## Development

```powershell
# Watch frontend assets
npm run dev

# Run tests (after composer install)
php artisan test
```

## License

Educational demo — not affiliated with Nike, Inc.
