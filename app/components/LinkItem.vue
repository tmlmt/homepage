<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    id: string;
    alt: string;
    title: string;
    size: number;
    link: string;
    linkText?: string;
    column?: "left" | "right";
    row: "top" | "bottom";
  }>(),
  { column: "right", linkText: "" },
);

// Managing card overlay opacity
// - Laptops:
//     css :hover ensures normal behavior
// - Mobile:
//     onClick enables forced mode and toggles opacity
//     onEnter remembers opacity value when entering forced mode; sets isEnter on to detect Chrome behavior
//       (on Chrome: click = mouseenter + click; on Firefox: click = click)
//     onLeave resets opacity (to 0) and forced mode (to disabled) so that we can hover again

const isOpaque = ref(false);
const isClick = ref();
const isEnter = ref();
const onClick = () => {
  isClick.value = true;
  if (isEnter.value) {
    isOpaque.value = true;
  } else {
    isOpaque.value = !isOpaque.value;
  }
  isEnter.value = false;
};
const onLeave = () => {
  isClick.value = false;
  isOpaque.value = false;
};
const onEnter = () => {
  isEnter.value = true;
  isOpaque.value = true;
};
</script>

<template>
  <div
    :class="[
      'card md:mt- col-span-2 flex justify-center p-0 not-last-of-type:border-b-1 not-last-of-type:border-b-gray-400 md:col-span-1 not-last-of-type:md:border-b-0',
      props.column === 'left' ? 'md:justify-end' : '',
      props.row === 'top' ? 'md:items-end' : 'md:items-start',
    ]"
  >
    <div
      class="card-inner relative w-full md:mx-2 md:mb-2 md:w-[380px] md:border-1 md:border-gray-200 lg:w-[420px]"
      @click="onClick"
      @mouseenter="onEnter"
      @mouseleave="onLeave"
    >
      <div>
        <nuxt-img
          class="h-auto w-full"
          :src="`/links/${props.id}.png`"
          sizes="sm:100vw md:380px lg:420px"
          :alt="props.alt"
        />
      </div>
      <div
        class="card-overlay transition-ease-in-out transition-duration-500 absolute top-0 left-0 h-full bg-gray-900 px-6 py-3 text-white opacity-0 hover:opacity-100"
        :class="{
          'opacity-100!': isOpaque && isClick,
          'opacity-0!': !isOpaque && isClick,
        }"
      >
        <div class="flex h-full flex-col justify-between text-base">
          <div>
            <h2 class="my-4 text-3xl font-bold">{{ props.title }}</h2>
            <slot />
          </div>
          <div>
            <p>
              <a
                :href="props.link"
                class="font-normal text-white no-underline visited:text-white hover:text-white"
                target="_blank"
                ><i class="pi pi-external-link mr-1 text-xs" /> Go to
                {{ props.linkText ? props.linkText : props.link }}</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
