<script setup lang="ts">
import logoSrc from '~/assets/logo.svg'
</script>

<template>
  <div class="grid justify-content-between align-content-center m-3">
    <div class="col-4 flex align-items-center">
      <NuxtLink to="/"><img :src="logoSrc" width="40" alt="Logo"></NuxtLink>
    </div>
    <div class="col-4 flex justify-content-end align-items-center">
      <NuxtLink to="/links" class="mx-2">Links</NuxtLink>
      <a href="https://www.linkedin.com/in/thomas-lamant-9a28423b/" aria-label="LinkedIn profile" target="_blank"><i class="pi pi-linkedin mx-2" /></a>
      <a href="https://instagram.com/tmlmt" aria-label="Instagram profile" target="_blank"><i class="pi pi-instagram mx-2" /></a>
      <a href="https://github.com/tmlmt" aria-label="GitHub profile" target="_blank"><i class="pi pi-github mx-2" /></a>
      <a href="mailto:tom@tmlmt.com" aria-label="Send me an email" target="_blank"><i class="pi pi-envelope mx-2" /></a>
    </div>
  </div>
</template>
