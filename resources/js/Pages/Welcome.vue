<script setup>

import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import {Head, Link} from '@inertiajs/inertia-vue3';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
})
</script>

<template>

    <Head><title>Hello</title></Head>

    <nav class="container mx-auto flex justify-between items-center p-4">
        <Link href="/">
            <ApplicationLogo/>
        </Link>
        <div class="flex gap-4 text-sm font-bold">
            <div v-if="canLogin" class="flex">
                <Link v-if="$page.props.auth.user" :href="route('dashboard')">
                    Dashboard
                </Link>
                <template v-else>
                    <Link :href="route('login')" class="pr-2 border-r">
                        Log in
                    </Link>
                    <Link v-if="canRegister" :href="route('register')" class="pl-2">
                        Register
                    </Link>
                </template>
            </div>
        </div>
    </nav>

    <div class="container mx-auto">

        <div class="text-center m-10">
            <h1 class="text-2xl md:text-3xl">Welcome to Soundexperts</h1>
        </div>

        <div class="flex flex-col md:flex-row mx-4 md:mx-12 xl:mx-18 gap-6 my-6">
            <div class="md:w-1/2 flex flex-row border-2 rounded-lg border-yellow border-opacity-90 p-4">
                <div
                    class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>
                    </svg>
                </div>
                <div class="flex flex-col">
                    <h2 class="text-lg font-bold mb-3">Customer</h2>
                    <p class="mb-4">I'm a customer and looking for a professional help for
                        my project.</p>
                    <Link :href="route('about')" class="mt-3 inline-flex items-center mt-auto">
                        Find professional
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                             stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                </div>
            </div>
            <div class="md:w-1/2 flex flex-row border-2 rounded-lg border-yellow border-opacity-90 p-4">
                <div
                    class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="2">
                        <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                        <path
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                    </svg>
                </div>
                <div class="flex flex-col">
                    <h2 class="text-lg font-bold mb-3">Professional</h2>
                    <p class="mb-4">I'm a professional and like to offer my services.</p>
                    <Link :href="route('about')" class="mt-3 inline-flex items-center mt-auto">Look for jobs
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                             stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>


    </div>

    <footer class="container mx-auto flex flex-col md:flex-row justify-between items-center p-4">
        <div class="text-center p-4">
            © 2022 Copyright:
            <Link href="/" class="pl-2">
                Soundexperts
            </Link>
        </div>
        <div class="flex text-sm">
            <Link :href="route('about')" class="px-3 border-r">
                About us
            </Link>
            <Link :href="route('faq')" class="px-3 border-r">
                FAQ
            </Link>
            <Link :href="route('contact')" class="pl-3">
                Contact
            </Link>
        </div>
    </footer>

</template>
