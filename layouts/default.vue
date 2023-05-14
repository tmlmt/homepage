<script setup lang="ts">
const route = useRoute()

useSeoMeta({
  author: 'Thomas Lamant',
  title: route.meta.title as string || 'Thomas Lamant',
  ogTitle: route.meta.title as string || 'Thomas Lamant',
  description: route.meta.description as string || "Thomas Lamant's homepage",
  ogDescription: route.meta.description as string || "Thomas Lamant's homepage"
})
</script>

<template>
  <div class="flex flex-column h-full w-full absolute">
    <HeaderBar />
    <div class="flex flex-auto mt-5 justify-content-center">
      <main>
        <slot />
      </main>
    </div>
    <FooterBar />
  </div>
</template>
