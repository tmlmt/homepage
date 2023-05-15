<script setup lang="ts">
definePageMeta({
  title: 'Thomas Lamant | Business Card',
  description: 'Offshore Wind Engineer at Ørsted',
  layout: 'cards'
})
</script>

<template>
  <div class="flex flex-column justify-content-center h-full card">
    <div class="card-header">
      <nuxt-img src="/cards/orsted_bg.jpg" sizes="sm:100vw md:768px" alt="On top of a 2MW Wind Turbine in France" />
      <nuxt-img src="/cards/orsted_profile-pic.png" sizes="sm:30vw md:150px" class="profile-pic" alt="Thomas Lamant" />
    </div>
    <div class="grid h-full mx-2 mb-5">
      <div class="col-12 flex flex-column align-items-center">
        <h1 class="my-0 text-gradient-blue">Thomas Lamant</h1>
        <p>Project Manager <b>@</b> <span class="orsted-blue">Orsted</span></p>
      </div>
      <div class="col-2 flex align-items-center justify-content-center"><i class="pi pi-user" /></div>
      <div class="col-10"><p>Head of Product Development<br>Product Line Foundations</p></div>
      <div class="col-2 flex align-items-center justify-content-center"><i class="pi pi-user" /></div>
      <div class="col-10"><p>Innovation Project Management<br>Strategy, Innovation, Portfolio & Partnership</p></div>
      <div class="col-2 flex align-items-center justify-content-center"><i class="pi pi-map-marker" /></div>
      <div class="col-10"><p>Nesa Allé 1<br>2820 Gentofte<br>Denmark</p></div>
      <div class="col-2 flex align-items-center justify-content-center"><i class="pi pi-envelope" /></div>
      <div class="col-10"><a href="mailto:thlam@orsted.com">thlam@orsted.com</a></div>
      <div class="col-2 flex align-items-center justify-content-center"><i class="pi pi-phone" /></div>
      <div class="col-10"><a href="tel:+4599559068">+45 99 55 90 68</a></div>
      <div class="col-2 flex align-items-center justify-content-center"><i class="pi pi-download" /></div>
      <div class="col-10"><a href="mailto:thlam@orsted.com"><a href="/cards/ThomasLamant_Orsted.vcf">Download Vcard</a></a></div>
    </div>
  </div>
</template>

<style lang="postcss">
body {
  color: #333333;
}

.orsted-blue {
  color: #4099db;
  font-weight: 600;
}

a, a:visited {
  color: #458bfd;

  &:hover {
    color: #458bfd;
    text-decoration: underline;
  }
}

p {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.card {
  width: 100vw;

  @media (min-width: 769px) {
    width: 768px;

    border: #666666 1px solid;
  }

  & .card-header {
    height: 60vw;

    @media (min-width: 769px) {
      height: 380px;
    }
  }

  & .profile-pic {
    position: relative;
    left: calc(50% - 15vw);
    bottom: calc(15vw);

    @media (min-width: 769px) {
      left: calc(50% - 75px);
      bottom: calc(75px);
    }
  }

}
</style>
