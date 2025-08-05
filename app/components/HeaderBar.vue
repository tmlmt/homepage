<script setup lang="ts">
import logoSrc from "~/assets/logo.svg";
</script>

<template>
  <div class="m-3 flex content-center justify-between">
    <div class="flex items-center">
      <NuxtLink to="/"><img :src="logoSrc" width="40" alt="Logo" /></NuxtLink>
    </div>
    <div class="flex items-center justify-end">
      <NuxtLink to="/links" class="mx-2">Links</NuxtLink>
      <a
        v-umami="'LinkedIn profile'"
        href="https://www.linkedin.com/in/thomas-lamant-9a28423b/"
        aria-label="LinkedIn profile"
        target="_blank"
        ><i class="pi pi-linkedin mx-2"
      /></a>
      <a
        v-umami="'Instagram profile'"
        href="https://instagram.com/tmlmt"
        aria-label="Instagram profile"
        target="_blank"
        ><i class="pi pi-instagram mx-2"
      /></a>
      <a
        v-umami="'Github profile'"
        href="https://github.com/tmlmt"
        aria-label="GitHub profile"
        target="_blank"
        ><i class="pi pi-github mx-2"
      /></a>
      <a
        v-umami="'Contact link'"
        href="https://blog.tmlmt.com/contact"
        aria-label="Send me a message"
        target="_blank"
        ><i class="pi pi-envelope mx-2"
      /></a>
    </div>
  </div>
</template>
