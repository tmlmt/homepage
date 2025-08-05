<script setup lang="ts">
definePageMeta({
  title: "Thomas Lamant | Business Card",
  description: "Lead Category Manager at Ørsted",
  layout: "cards",
});
</script>

<template>
  <div
    class="card flex w-full flex-col justify-center text-gray-800 md:w-3xl md:border md:border-gray-400"
  >
    <div>
      <nuxt-img
        src="/cards/offshorewind_bg_768px.jpg"
        height="299"
        width="768"
        sizes="sm:100vw md:768px"
        class="h-auto w-full"
        title="Credit: Nicholas Doherty via Unsplash"
      />
      <nuxt-img
        src="/cards/orsted_profile-pic.png"
        height="1046"
        width="1046"
        sizes="sm:30vw md:150px"
        class="relative bottom-[15vw] left-[calc(50%-15vw)] h-auto w-[30vw] md:bottom-[75px] md:left-[calc(50%-75px)] md:w-[150px]"
        alt="Thomas Lamant"
      />
    </div>
    <div class="mx-2 mb-5 grid h-full grid-cols-12">
      <div class="col-span-12 mb-8 flex flex-col items-center">
        <h1 class="text-gradient-blue my-0 text-4xl font-bold">
          Thomas Lamant
        </h1>
        <p class="text-lg">
          Lead Category Manager <b>@</b>
          <span class="ml-1 font-semibold text-[#4099db]">Orsted</span>
        </p>
      </div>
      <div class="col-span-2 flex items-center justify-center">
        <i class="pi pi-briefcase" />
      </div>
      <div class="col-span-10 my-2">
        <p>Lead Category Manager<br >Foundations Primary Structures</p>
      </div>
      <div class="col-span-2 flex items-center justify-center">
        <i class="pi pi-users" />
      </div>
      <div class="col-span-10 my-2">
        <p>Offshore Category Strategy<br >Procurement</p>
      </div>
      <div class="col-span-2 flex items-center justify-center">
        <i class="pi pi-map-marker" />
      </div>
      <div class="col-span-10 my-2">
        <p>Nesa Allé 1<br >2820 Gentofte<br >Denmark</p>
      </div>
      <div class="col-span-2 flex items-center justify-center">
        <i class="pi pi-envelope" />
      </div>
      <div class="col-span-10 my-2">
        <p>
          <a
            class="text-[#024fca] visited:text-[#024fca] hover:text-[#024fca] hover:underline"
            href="mailto:thlam@orsted.com"
            >thlam@orsted.com</a
          >
        </p>
      </div>
      <div class="col-span-2 flex items-center justify-center">
        <i class="pi pi-phone" />
      </div>
      <div class="col-span-10 my-2">
        <p>
          <a
            class="text-[#024fca] visited:text-[#024fca] hover:text-[#024fca] hover:underline"
            href="tel:+4599559068"
            >+45 99 55 90 68</a
          >
        </p>
      </div>
      <div class="col-span-2 flex items-center justify-center">
        <i class="pi pi-linkedin" />
      </div>
      <div class="col-span-10 my-2">
        <p>
          <a
            class="text-[#024fca] visited:text-[#024fca] hover:text-[#024fca] hover:underline"
            href="https://www.linkedin.com/in/thomas-lamant-9a28423b/"
            >LinkedIn Profile</a
          >
        </p>
      </div>
      <div class="col-span-2 flex items-center justify-center">
        <i class="pi pi-download" />
      </div>
      <div class="col-span-10 my-2">
        <p>
          <a
            class="text-[#024fca] visited:text-[#024fca] hover:text-[#024fca] hover:underline"
            href="/cards/ThomasLamant_Orsted.vcf"
            >Download Vcard</a
          >
        </p>
      </div>
    </div>
  </div>
</template>
