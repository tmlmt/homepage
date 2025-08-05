<script setup lang="ts">
definePageMeta({
  title: "Thomas Lamant | Business Card",
  description: "Lead Category Manager at Ørsted",
  layout: "cards",
});
</script>

<template>
  <div class="flex flex-column justify-content-center card">
    <div class="card-header">
      <nuxt-img
        src="/cards/offshorewind_bg_768px.jpg"
        height="299"
        width="768"
        sizes="sm:100vw md:768px"
        class="background-pic"
        title="Credit: Nicholas Doherty via Unsplash"
      />
      <nuxt-img
        src="/cards/orsted_profile-pic.png"
        height="1046"
        width="1046"
        sizes="sm:30vw md:150px"
        class="profile-pic"
        alt="Thomas Lamant"
      />
    </div>
    <div class="grid h-full mx-2 mb-5">
      <div class="col-12 flex flex-column align-items-center mb-3">
        <h1 class="my-0 text-gradient-blue">Thomas Lamant</h1>
        <p>
          Lead Category Manager <b>@</b> <span class="orsted-blue">Orsted</span>
        </p>
      </div>
      <div class="col-2 flex align-items-center justify-content-center">
        <i class="pi pi-briefcase" />
      </div>
      <div class="col-10">
        <p>Lead Category Manager<br />Foundations Primary Structures</p>
      </div>
      <div class="col-2 flex align-items-center justify-content-center">
        <i class="pi pi-users" />
      </div>
      <div class="col-10">
        <p>Offshore Category Strategy<br />Procurement</p>
      </div>
      <div class="col-2 flex align-items-center justify-content-center">
        <i class="pi pi-map-marker" />
      </div>
      <div class="col-10">
        <p>Nesa Allé 1<br />2820 Gentofte<br />Denmark</p>
      </div>
      <div class="col-2 flex align-items-center justify-content-center">
        <i class="pi pi-envelope" />
      </div>
      <div class="col-10">
        <p><a href="mailto:thlam@orsted.com">thlam@orsted.com</a></p>
      </div>
      <div class="col-2 flex align-items-center justify-content-center">
        <i class="pi pi-phone" />
      </div>
      <div class="col-10">
        <p><a href="tel:+4599559068">+45 99 55 90 68</a></p>
      </div>
      <div class="col-2 flex align-items-center justify-content-center">
        <i class="pi pi-linkedin" />
      </div>
      <div class="col-10">
        <p>
          <a href="https://www.linkedin.com/in/thomas-lamant-9a28423b/"
            >LinkedIn Profile</a
          >
        </p>
      </div>
      <div class="col-2 flex align-items-center justify-content-center">
        <i class="pi pi-download" />
      </div>
      <div class="col-10">
        <p><a href="/cards/ThomasLamant_Orsted.vcf">Download Vcard</a></p>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
body {
  color: #333333;
}

.orsted-blue {
  color: #4099db;
  font-weight: 600;
}

a,
a:visited {
  color: #024fca;

  &:hover {
    color: #024fca;
    text-decoration: underline;
  }
}

p {
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
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
      height: 400px;
    }
  }

  & .background-pic {
    width: 100%;
    height: auto;
  }

  & .profile-pic {
    position: relative;
    left: calc(50% - 15vw);
    bottom: calc(15vw);
    width: 30vw;
    height: auto;

    @media (min-width: 769px) {
      left: calc(50% - 75px);
      bottom: calc(75px);
      width: 150px;
    }
  }
}
</style>
