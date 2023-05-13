<script setup lang="ts">
const props = withDefaults(defineProps<{
  id: string,
  alt: string,
  title: string,
  size: number,
  link: string,
  linkText?: string,
  column?: 'left' | 'right',
  row: 'top' | 'bottom' }>(), { column: 'right', linkText: '' })
</script>

<template>
  <div
    :class="[
      'col-12 md:col-6 flex p-0 card',
      props.column === 'left' ? 'md:justify-content-end' : '',
      props.row === 'top' ? 'md:align-items-end' : 'md:align-items-start']"
  >
    <div class="card-inner md:mx-2 md:mb-2">
      <div>
        <nuxt-img :src="`/cards/${props.id}.png`" sizes="sm:100vw md:360px lg:450px" :alt="props.alt" />
      </div>
      <div class="card-overlay text-white surface-900 px-4 py-2 h-full w-full absolute top-0 left-0 transition-ease-in-out transition-duration-500">
        <div class="flex h-full flex-column justify-content-between">
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
  border: #e0e0e0 1px solid;

  &:hover .card-overlay {
    opacity: 1;
  }

  & .card-overlay {
    opacity: 0;

    & a {
      color: #ffffff;

      & i {
        font-size: 0.8rem;
      }
    }
  }
}
</style>
