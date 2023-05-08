<script setup lang="ts">
definePageMeta({
  title: 'Thomas Lamant | Links',
  description: "Thomas Lamant's personal projects and professional activities"
})
</script>

<template>
  <div class="flex w-full justify-content-center align-content-center">
    <div class="grid justify-content-center">
      <CardItem id="blog" alt="Blog" position="left" title="Blog" link="https://blog.tmlmt.com">
        Blog
      </CardItem>
      <CardItem id="bodegamap" alt="Bodega Map" title="Bodega Map" link="https://www.bodegamap.com">
        BodegaMap
      </CardItem>
      <CardItem id="maraa" alt="Marå" position="left" title="Marå" link="https://www.maraa.dk">
        Maraa
      </CardItem>
      <CardItem id="linkedin" alt="LinkedIn" title="LinkedIn" link="https://www.linkedin.com/in/thomas-lamant-9a28423b/" link-text="my LinkedIn profile">
        I work @Orsted as a Project Manager in Offshore Wind Power.
      </CardItem>
    </div>
  </div>
</template>
