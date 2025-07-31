<template>
  <div>
    <NuxtLayout>
      <NuxtPage :transition="{ name: 'my', mode: 'out-in' }" />
    </NuxtLayout>
  </div>
</template>

<style>
.my-enter-active,
.my-leave-active {
  transition: opacity 0.3s;
}
.my-enter,
.my-leave-active {
  opacity: 0;
}
</style>
