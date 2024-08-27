<script setup lang="ts">
definePageMeta({
  title: 'Thomas Lamant | Links',
  description: "Thomas Lamant's personal projects and professional activities"
})

defineOgImageComponent('NuxtSeo', {
  title: 'Links',
  theme: '#024FCA'
})
</script>

<template>
  <div class="flex h-full w-full justify-content-center">
    <div class="grid grid-nogutter">
      <LinkItem
        id="blog"
        alt="Blog"
        column="left"
        row="top"
        title="Blog"
        :size="1477"
        link="https://blog.tmlmt.com"
      >
        Self-hosted blog powered by <a href="https://ghost.org/" target="_blank">Ghost</a>, where
        I sometimes take the time to write and share thoughts on topics that come to mind.
      </LinkItem>
      <LinkItem
        id="bodegamap"
        alt="Bodega Map"
        row="top"
        title="Bodega Map"
        :size="1139"
        link="https://www.bodegamap.com"
      >
        Discover Denmark's traditional pubs on an interactive map and find the ones closest to you!
        A self-hosted project powered by <a href="https://nuxt.com" target="_blank">Nuxt</a>.
      </LinkItem>
      <LinkItem
        id="maraa"
        alt="Marå"
        row="bottom"
        column="left"
        title="Marå"
        :size="823"
        link="https://www.maraa.dk"
      >
        <p>My Denmark-based, privately held company dedicated to making and selling leatherwork.</p>
        <p>CVR: 41983043</p>
        <p>Company sheet: <a href="https://datacvr.virk.dk/enhed/virksomhed/41983043" target="_blank">Virk.dk</a></p>
      </LinkItem>
      <LinkItem
        id="linkedin"
        alt="LinkedIn"
        row="bottom"
        title="LinkedIn"
        :size="823"
        link="https://www.linkedin.com/in/thomas-lamant-9a28423b/"
        link-text="my LinkedIn profile"
      >
        I currently work <a href="https://orsted.com/" target="_blank">Ørsted</a> as a Project Manager in Offshore Wind Power.
      </LinkItem>
    </div>
  </div>
</template>
