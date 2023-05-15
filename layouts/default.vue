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
    <div class="flex flex-auto mt-5 content-container justify-content-center">
      <main>
        <slot />
      </main>
    </div>
    <FooterBar />
  </div>
</template>

<style lang="postcss">
.content-container {
  @media(max-width: 768px) {
    margin-top: 0 !important;
  }
}
</style>
