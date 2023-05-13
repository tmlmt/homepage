<script setup lang="ts">
definePageMeta({
  title: 'Thomas Lamant | Links',
  description: "Thomas Lamant's personal projects and professional activities"
})
</script>

<template>
  <div class="flex w-full">
    <div class="grid grid-nogutter">
      <CardItem
        id="blog"
        alt="Blog"
        column="left"
        row="top"
        title="Blog"
        :size="1477"
        link="https://blog.tmlmt.com"
      >
        Blog
      </CardItem>
      <CardItem
        id="bodegamap"
        alt="Bodega Map"
        row="top"
        title="Bodega Map"
        :size="1139"
        link="https://www.bodegamap.com"
      >
        BodegaMap
      </CardItem>
      <CardItem
        id="maraa"
        alt="Marå"
        row="bottom"
        column="left"
        title="Marå"
        :size="823"
        link="https://www.maraa.dk"
      >
        Maraa
      </CardItem>
      <CardItem
        id="linkedin"
        alt="LinkedIn"
        row="bottom"
        title="LinkedIn"
        :size="823"
        link="https://www.linkedin.com/in/thomas-lamant-9a28423b/"
        link-text="my LinkedIn profile"
      >
        I work @Orsted as a Project Manager in Offshore Wind Power.
      </CardItem>
    </div>
  </div>
</template>
