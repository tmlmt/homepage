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
