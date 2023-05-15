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

// Managing card overlay opacity
// - Laptops:
//     css :hover ensures normal behavior
// - Mobile:
//     onClick enables forced mode and toggles opacity
//     onEnter remembers opacity value when entering forced mode; sets isEnter on to detect Chrome behavior
//       (on Chrome: click = mouseenter + click; on Firefox: click = click)
//     onLeave resets opacity (to 0) and forced mode (to disabled) so that we can hover again

const isOpaque = ref(false)
const isClick = ref()
const isEnter = ref()
const onClick = () => {
  isClick.value = true
  if (isEnter.value) {
    isOpaque.value = true
  } else {
    isOpaque.value = !isOpaque.value
  }
  isEnter.value = false
}
const onLeave = () => {
  isClick.value = false
  isOpaque.value = false
}
const onEnter = () => {
  isEnter.value = true
  isOpaque.value = true
}
</script>

<template>
  <div
    :class="[
      'col-12 md:col-6 flex p-0 card',
      props.column === 'left' ? 'md:justify-content-end' : '',
      props.row === 'top' ? 'md:align-items-end' : 'md:align-items-start']"
  >
    <div class="card-inner md:mx-2 md:mb-2" @click="onClick" @mouseenter="onEnter" @mouseleave="onLeave">
      <div>
        <nuxt-img :src="`/links/${props.id}.png`" sizes="sm:100vw md:360px lg:400px" :alt="props.alt" />
      </div>
      <div
        class="card-overlay text-white surface-900 px-4 py-2 h-full w-full absolute top-0 left-0 transition-ease-in-out transition-duration-500"
        :class="{'card-opaque' : isOpaque && isClick, 'card-transparent': !isOpaque && isClick}"
      >
        <div class="flex h-full flex-column justify-content-between">
          <div>
            <h2>{{ props.title }}</h2>
            <slot />
          </div>
          <div>
            <p>
              <a :href="props.link" class="explicit-link" target="_blank"><i class="pi pi-external-link mr-1" /> Go to {{ props.linkText ? props.linkText : props.link }}</a>
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

  &:not(:last-of-type) {
    @media (max-width: 768px) {
      border-bottom: #666666 1px solid;
    }
  }

  & .card-inner {
    position: relative;

    @media (min-width: 769px) {
      border: #e0e0e0 1px solid;
    }

    &:hover .card-overlay {
      opacity: 1;
    }

    & .card-overlay {
      opacity: 0;

      & a {
        color: #ffffff;
        text-decoration: underline;
        font-weight: bold;

        &.explicit-link {
          text-decoration: none;
          font-weight: normal;
        }

        & i {
          font-size: 0.8rem;
        }

        &:hover {
          color: #ffffff
        }
      }
    }
  }
}

.card-opaque {
  opacity: 1 !important
}

.card-transparent {
  opacity: 0 !important
}
</style>
