<script setup lang="ts">
const props = withDefaults(defineProps<{
  id: string,
  alt: string,
  title: string,
  link: string,
  linkText?: string,
  position?: 'left' | 'right' }>(), { position: 'right', linkText: '' })
</script>

<template>
  <div
    :class="[
      'col-12 md:col-6 flex p-0 card',
      props.position === 'left' ? 'md:justify-content-end' : '']"
  >
    <div class="card-inner md:mx-2 mb-2">
      <div>
        <nuxt-img :src="`/cards/${props.id}.png`" width="398" :alt="props.alt" />
      </div>
      <div class="text-white surface-900 px-4 py-2 card-overlay">
        <div class="flex flex-column justify-content-between h-full">
          <div>
            <h2>{{ props.title }}</h2>
            <slot />
          </div>
          <div>
            <p>
              <a :href="props.link" target="_blank"><i class="pi pi-external-link mr-1" /> Go to {{ props.linkText ? props.linkText : props.link }}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">

.card {
  @media (max-width: 768px) {
    justify-content: center;
  }
}

.card-inner {
  position: relative;
  width: 400px;
  height: 400px;
  border: #e0e0e0 1px solid;

  &:hover .card-overlay {
    opacity: 1;
  }

  & .card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: 0.5s ease;

    & a {
      color: #ffffff;

      & i {
        font-size: 0.8rem;
      }
    }
  }
}
</style>
