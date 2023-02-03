<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav class='flex justify-between bg-white p-3'>
            <div class=''></div>
            <div class='cursor-pointer'>
                <RouterLink to="/">Login</RouterLink>
            </div>
        </nav>
</template>

<script>
export default {
    name: 'Header'
}
</script>