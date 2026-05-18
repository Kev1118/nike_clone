<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $permissions = [
            'manage products',
            'manage categories',
            'manage orders',
            'view admin',
        ];

        foreach ($permissions as $permission) {
            Permission::firstOrCreate(['name' => $permission, 'guard_name' => 'api']);
        }

        $adminRole = Role::firstOrCreate(['name' => 'admin', 'guard_name' => 'api']);
        $customerRole = Role::firstOrCreate(['name' => 'customer', 'guard_name' => 'api']);

        $adminRole->syncPermissions($permissions);
        $customerRole->syncPermissions([]);

        $admin = User::firstOrCreate(
            ['email' => 'admin@nike-store.test'],
            [
                'name' => 'Admin User',
                'password' => Hash::make('password'),
            ]
        );
        $admin->assignRole('admin');

        $customer = User::firstOrCreate(
            ['email' => 'customer@nike-store.test'],
            [
                'name' => 'Demo Customer',
                'password' => Hash::make('password'),
            ]
        );
        $customer->assignRole('customer');

        $categories = [
            ['name' => 'Shoes', 'slug' => 'shoes', 'description' => 'Footwear for every sport and style'],
            ['name' => 'Clothing', 'slug' => 'clothing', 'description' => 'Apparel built for performance'],
            ['name' => 'Accessories', 'slug' => 'accessories', 'description' => 'Bags, hats, and more'],
        ];

        foreach ($categories as $cat) {
            Category::firstOrCreate(['slug' => $cat['slug']], $cat);
        }

        $shoes = Category::where('slug', 'shoes')->first();
        $clothing = Category::where('slug', 'clothing')->first();

        $products = [
            [
                'category_id' => $shoes->id,
                'name' => 'Air Max Pulse',
                'slug' => 'air-max-pulse',
                'description' => 'Bold cushioning meets street-ready style.',
                'price' => 150.00,
                'image' => 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7f921fb-4e7e-4a0a-8f6e-2b1a5e0e0e0e/air-max-pulse-mens-shoes.png',
                'featured' => true,
                'stock' => 50,
                'gender' => 'men',
            ],
            [
                'category_id' => $shoes->id,
                'name' => 'Dunk Low Retro',
                'slug' => 'dunk-low-retro',
                'description' => 'Classic basketball icon reimagined for everyday wear.',
                'price' => 115.00,
                'image' => 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c7c0c0c0-0000-0000-0000-000000000001/dunk-low.png',
                'featured' => true,
                'stock' => 80,
                'gender' => 'unisex',
            ],
            [
                'category_id' => $shoes->id,
                'name' => 'Pegasus 41',
                'slug' => 'pegasus-41',
                'description' => 'Responsive ride for your daily miles.',
                'price' => 140.00,
                'image' => 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c7c0c0c0-0000-0000-0000-000000000002/pegasus.png',
                'featured' => false,
                'stock' => 35,
                'gender' => 'women',
            ],
            [
                'category_id' => $clothing->id,
                'name' => 'Tech Fleece Hoodie',
                'slug' => 'tech-fleece-hoodie',
                'description' => 'Lightweight warmth without the bulk.',
                'price' => 130.00,
                'image' => 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c7c0c0c0-0000-0000-0000-000000000003/tech-fleece.png',
                'featured' => true,
                'stock' => 60,
                'gender' => 'men',
            ],
            [
                'category_id' => $clothing->id,
                'name' => 'Dri-FIT ADV Top',
                'slug' => 'dri-fit-adv-top',
                'description' => 'Sweat-wicking performance for training days.',
                'price' => 75.00,
                'image' => 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c7c0c0c0-0000-0000-0000-000000000004/dri-fit.png',
                'featured' => false,
                'stock' => 100,
                'gender' => 'women',
            ],
            [
                'category_id' => $clothing->id,
                'name' => 'Sportswear Club Fleece Joggers',
                'slug' => 'club-fleece-joggers',
                'description' => 'Soft fleece for off-duty comfort.',
                'price' => 60.00,
                'image' => 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c7c0c0c0-0000-0000-0000-000000000005/joggers.png',
                'featured' => false,
                'stock' => 90,
                'gender' => 'unisex',
            ],
        ];

        foreach ($products as $product) {
            Product::firstOrCreate(['slug' => $product['slug']], $product);
        }
    }
}
