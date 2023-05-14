<script setup lang="ts">
const description = "Thomas Lamant's homepage"

definePageMeta({
  title: 'Thomas Lamant',
  description
})
defineOgImageStatic({ description })
</script>

<template>
  <div class="flex flex-column content justify-content-start mx-5">
    <h1>Thomas Lamant</h1>
    <p>
      Hi! I am Thomas Lamant, an offshore wind engineer working at
      <a href="https://www.orsted.com" target="_blank">Ørsted</a>.
    </p>
    <p>
      When onshore, I love exploring all sorts of ideas. And it happens
      sometimes that I feel like writing an article about it in my
      <span class="emphasis">blog</span>.
    </p>
    <p>
      Manual creatity has taken many forms over the years (woodworking, yoga, etc.),
      but I've particularly discoved a passion for leatherwork, that I hope one day to
      to bring to a broader public through my own brand.
    </p>
    <p>
      Since writing my first website more than 20 years ago in 2002, I've been
      fascinated by the power of software programming. Things have become much more
      powerful now, but also much more complex. While I play around in <span class="emphasis">Python/Pandas</span> for
      small tasks or data analysis, it is web development that I've been exploring a lot recently,
      especially with the <span class="emphasis">Nuxt</span> framework (Vue, Vite, Node.JS, Typescript).
    </p>
    <p>
      See the menu in the upper right corner for relevant links, and shortcuts to my social media accounts.
      The best way to contact me is by sending an e-mail. Cheers !
    </p>
  </div>
</template>

<style lang="postcss">
.content {
  width: 600px;
}

.emphasis {
  font-style: italic;
  font-weight: 500;
}

h1 {
  display: inline-block;
  margin-top: 1rem;
  font-size: 40px;
  background: linear-gradient(to right,#458bfd 0%, #eb7ca7 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

p {
  line-height: 1.3;

  & a, a:visited {
    color: #458bfd;

    &:hover {
      color: #458bfd;
      text-decoration: underline;
    }
  }
}
</style>
