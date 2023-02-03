<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Layout from './components/layout/layout.vue'
</script>

<template>

  <Layout>
    <div class="bg-gray-100">
      <RouterView />
    </div>
  </Layout>
</template>