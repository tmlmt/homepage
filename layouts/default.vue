<script setup lang="ts">
const route = useRoute()

useSeoMeta({
  author: 'Thomas Lamant',
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1',
  title: route.meta.title as string || 'Thomas Lamant',
  description: route.meta.title as string || "Thomas Lamant's homepage"
})
</script>

<template>
  <div class="flex flex-column h-full w-full absolute">
    <HeaderBar />
    <div class="flex flex-auto mt-5 justify-content-center">
      <slot />
    </div>
    <FooterBar />
  </div>
</template>
