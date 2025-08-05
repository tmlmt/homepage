<script setup lang="ts">
definePageMeta({
  title: "Thomas Lamant",
  description: "Personal homepage",
});

defineOgImageComponent("NuxtSeo", {
  theme: "#024FCA",
  description: "Personal homepage",
});
</script>

<template>
  <div class="content mx-10 flex flex-col justify-start text-lg md:w-2xl">
    <h1 class="text-gradient mt-12 mb-10 text-5xl font-bold md:mt-16">
      Thomas Lamant
    </h1>
    <p class="leading-1.3 my-4">
      Hi! I am Thomas Lamant, an offshore wind engineer working at
      <a
        href="https://www.orsted.com"
        class="font-medium text-[#024fca] italic underline visited:text-[#024fca]"
        target="_blank"
        >Ørsted</a
      >.
    </p>
    <p class="leading-1.3 my-4">
      When onshore, I love exploring all sorts of ideas. And sometimes I feel
      like writing an article about them in my
      <a
        href="https://blog.tmlmt.com"
        class="font-medium text-[#024fca] italic underline visited:text-[#024fca]"
        target="_blank"
        >blog</a
      >.
    </p>
    <p class="leading-1.3 my-4">
      Manual creativity has taken many forms for me over the years (woodworking,
      yoga, etc.). I've particularly discoved a passion for leatherwork, that I
      hope one day to bring to a broader public through my own brand,
      <a
        href="https://www.maraa.dk"
        class="font-medium text-[#024fca] italic underline visited:text-[#024fca]"
        target="_blank"
        >Marå</a
      >.
    </p>
    <p class="leading-1.3 my-4">
      Since writing my first website more than 20 years ago in 2002, I've been
      fascinated by the power of software programming. Things have become much
      more powerful nowadays, but also much more complex. When I don't play
      around with
      <span class="font-medium italic underline">Python/Pandas</span> for small
      tasks or data analysis, it is web development that I'm exploring,
      especially the
      <span class="font-medium italic underline">Nuxt</span> framework (Vue,
      Vite, Node.JS, Typescript). It powers this homepage, as well as my latest
      project,
      <a
        href="https://www.bodegamap.com"
        class="font-medium text-[#024fca] italic underline visited:text-[#024fca]"
        target="_blank"
        >Bodega Map</a
      >.
    </p>
    <p class="leading-1.3 my-4">
      See the menu in the upper right corner for relevant links, and shortcuts
      to my social media accounts. The best way to contact me is by sending an
      e-mail. ✌
    </p>
  </div>
</template>
