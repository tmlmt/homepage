<script setup lang="ts">
const route = useRoute()

useSeoMeta({
  author: 'Thomas Lamant',
  title: route.title as string || 'Thomas Lamant',
  ogTitle: route.title as string || 'Thomas Lamant',
  description: route.description as string || "Thomas Lamant's homepage",
  ogDescription: route.description as string || "Thomas Lamant's homepage"
})
</script>

<template>
  <div class="flex flex-column h-full w-full md:justify-content-center align-items-center">
    <main>
      <slot />
    </main>
  </div>
</template>
