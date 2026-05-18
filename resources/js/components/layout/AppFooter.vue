<template>
    <footer class="mt-auto border-t border-neutral-200 bg-nike-light">
        <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div class="grid gap-8 md:grid-cols-4">
                <div>
                    <p class="text-lg font-bold tracking-tighter">NIKE</p>
                    <p class="mt-2 text-sm text-nike-gray">
                        Just Do It. Performance gear for athletes everywhere.
                    </p>
                </div>
                <div v-for="section in footerSections" :key="section.title">
                    <h4 class="text-sm font-medium">{{ section.title }}</h4>
                    <ul class="mt-4 space-y-2">
                        <li v-for="link in section.links" :key="link">
                            <a href="#" class="text-sm text-nike-gray hover:text-nike-black">{{ link }}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <p class="mt-12 text-center text-xs text-nike-gray">
                &copy; {{ year }} Nike Store Demo. For educational purposes only.
            </p>
        </div>
    </footer>
</template>

<script setup>
const year = new Date().getFullYear();

const footerSections = [
    { title: 'Products', links: ['Shoes', 'Clothing', 'Accessories', 'New Releases'] },
    { title: 'Help', links: ['Order Status', 'Shipping', 'Returns', 'Contact Us'] },
    { title: 'Company', links: ['About Nike', 'Careers', 'News', 'Investors'] },
];
</script>
