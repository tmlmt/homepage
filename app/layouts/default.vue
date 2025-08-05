<script setup lang="ts">
const route = useRoute();

useSeoMeta({
  author: "Thomas Lamant",
  title: (route.title as string) || "Thomas Lamant",
  ogTitle: (route.title as string) || "Thomas Lamant",
  description: (route.description as string) || "Thomas Lamant's homepage",
  ogDescription: (route.description as string) || "Thomas Lamant's homepage",
});
</script>

<template>
  <div class="absolute flex h-full w-full flex-col">
    <HeaderBar />
    <div class="mt-0 flex flex-auto justify-center md:mt-5">
      <main>
        <slot />
      </main>
    </div>
    <FooterBar />
  </div>
</template>
