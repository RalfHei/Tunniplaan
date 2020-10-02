<template>
    <div>
        <header :class="{ 'h-screen': !closed }" class="fixed w-full md:relative z-40 mx-auto max-w-screen px-4 md:px-2">
            <nav class="flex py-2 md:py-8 items-center">
                <button @click="menu" class="md:hidden focus:outline-none">
                    <menu-icon fillColor="#fff" />
                </button>
            </nav>
                <div v-if="!closed" @click="menu" class="lg:hidden mt-10 absolute inset-0 z-40 bg-gray-200">
                    <button class="w-full h-10 my-4 hover:bg-gray-700">
                        <router-link class="text-2xl" to="/">Rühm</router-link></button>
                        <button class="w-full h-10 my-4 hover:bg-gray-700">
                        <router-link class="text-2xl" to="/about">Õpetaja</router-link></button>
                        <button class="w-full h-10 my-4 hover:bg-gray-700">
                        <a href="/#" class="text-2xl">Klassiruum</a></button>
                </div>
        </header>
    </div>
</template>

<script>
import MenuIcon from 'vue-material-design-icons/Menu.vue';
export default {
    components: {
        MenuIcon
    },
    data() {
        return {
            closed: true
        };
    },
    methods: {
        menu() {
            this.closed = !this.closed;
            document.querySelector('body').classList.toggle('overflow-hidden');
        },
    }
};
</script>
<style>

</style>
