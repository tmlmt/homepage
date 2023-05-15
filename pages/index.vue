<script setup lang="ts">
definePageMeta({
  title: 'Thomas Lamant',
  description: "Thomas Lamant's homepage"
})
defineOgImageStatic({ description: "Thomas Lamant's homepage" })
</script>

<template>
  <div class="flex flex-column content justify-content-start mx-5">
    <h1 class="text-gradient">Thomas Lamant</h1>
    <p>
      Hi! I am Thomas Lamant, an offshore wind engineer working at
      <a href="https://www.orsted.com" class="emphasis" target="_blank">Ørsted</a>.
    </p>
    <p>
      When onshore, I love exploring all sorts of ideas. And sometimes I feel like
      writing an article about them in my
      <a href="https://blog.tmlmt.com" class="emphasis" target="_blank">blog</a>.
    </p>
    <p>
      Manual creatity has taken many forms for me over the years (woodworking, yoga, etc.).
      I've particularly discoved a passion for leatherwork, that I hope one day to
      to bring to a broader public through my own brand,
      <a href="https://www.maraa.dk" class="emphasis" target="_blank">Marå</a>.
    </p>
    <p>
      Since writing my first website more than 20 years ago in 2002, I've been
      fascinated by the power of software programming. Things have become much more
      powerful nowadays, but also much more complex. When I don't play around with
      <span class="emphasis">Python/Pandas</span> for small tasks or data analysis, it is
      web development that I'm exploring, especially the
      <span class="emphasis">Nuxt</span> framework
      (Vue, Vite, Node.JS, Typescript). It powered this homepage, but also my latest
      project, <a href="https://www.bodegamap.com" class="emphasis" target="_blank">Bodega Map</a>.
    </p>
    <p>
      See the menu in the upper right corner for relevant links, and shortcuts to my social media accounts.
      The best way to contact me is by sending an e-mail. ✌
    </p>
  </div>
</template>

<style lang="postcss">
.content {
  width: calc(100% - 4rem);

  @media (min-width: 768px) {
    width: 600px;
  }

  & h1 {
    margin-top: 2rem;
    font-size: 40px;

    @media (max-width: 768px) {
      margin-top: 1.5rem;
    }
  }

  & .emphasis {
    font-style: italic;
    font-weight: 500;
    text-decoration: underline;
  }

  & p {
    line-height: 1.3;

    & a, a:visited {
      color: #024FCA;

      &:hover {
        color: #024FCA;
        text-decoration: underline;
      }
    }
  }
}

</style>
