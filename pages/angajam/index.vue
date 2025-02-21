<script setup lang="ts">
useSeoMeta({
  ogImage: 'https://topspeedservice.eu/whatsapp-image-2024-08-04-at-15-45-14-e5fa0d06-1-1.webp',
  twitterTitle: 'Top Speed Service Bragadiru - Service Auto și Centru Daune',
  twitterDescription: 'Top Speed Service, un service auto cu peste 20 de ani pe piata angajeaza. Aplica acum!',
  twitterImage: 'https://topspeedservice.eu/whatsapp-image-2024-08-04-at-15-45-14-e5fa0d06-1-1.webp',
  twitterCard: 'summary'
})

import AplicaAcum from '~/components/AplicaAcum.vue';
import {type JobMeta } from '~/types/types';

const { data: jobs } = await useAsyncData('jobs', () => {
  return queryCollection('angajam').select('title', 'meta', 'path' ).all()
});


const getDetailsFromMeta = (meta: JobMeta): string[] => {
  return [
    meta.salariu || 'Salariu nespecificat',
    meta.perioada || 'Perioada nespecificata',
    meta.program || 'Program nespecificat',
  ];
};
</script>

<template>
  <div class="hero">

    <NuxtImg 
      src="/angajam.jpg" 
      alt="Hero Image" 
      class="hero-img" 
      layout="fill" 
      object-position="50% 50%" 
      object-fit="cover"
    />

    <h1 class="cauti-o-schimbare">
      <span class="color-wrapper">Cauti o schimbare?</span>
      <span class="span"> Top <br> Speed Service Angajeaza!</span>
    </h1>
    <p class="paragraf">
      Căutăm tinichigii, vopsitori-pregătitori, mecanici și operator calculator.
    </p>
    <h2 class="subtext">
      -- Service auto cu peste 20 de ani experienta. Aplica acum! --
    </h2>

    <a href="tel:+40765999999" class="contact-button">
      <div class="extended-FAB">
        <Icon class=" w-6 h-6" name="line-md:phone-call-twotone-loop" style="color: white" alt="Phone" />
        <div class="label-text">Contact</div>
      </div>
    </a>

  </div>
  <div class="big-div bg-[#e1e6df]">
    <h3 class="subtitle">Ce iti oferim:</h3>
    <div class="mini-cards grid grid-cols-3 gap-4 auto-rows-fr">
      <div class="mini-card">
        <Icon class="icon-1" name="mdi:home-city-outline" style="color: darkgreen;" />
        <p class="p_mini-card">
          Oferim cazare gratuită pentru angajații care vin din țară.
        </p>
      </div>
      <div class="mini-card">
        <Icon class="icon-1" name="mdi:certificate-outline" />
        <p class="p_mini-card">Posibilitatea de calificare la locul de muncă</p>
      </div>
      <div class="mini-card">
        <Icon class="icon-1" name="mdi:hammer-wrench" />
        <p class="p_mini-card">
          Ucenicie pentru cei care vor să se dezvolte în acest domeniu.
        </p>
      </div>
      <div class="mini-card">
        <Icon class="icon-1" name="mdi:account-cash" />
        <p class="p_mini-card">
          Salarii negociate în funcție de cunoștințe și experiență.
        </p>
      </div>
    </div>
    <AplicaAcum/>
  </div>
  <div class="big-div bg-[#e6ece4]">
    <h3 class="subtitle">Roluri pe care le cautam:</h3>

    <div v-for="job in jobs">
    <NuxtLink :to="job.path" >
    <Postare 
      :title="job.title"
      :details=getDetailsFromMeta(job.meta)
    />
    </NuxtLink>
    </div>

    <!-- <div v-for="job in jobs">
      <h1>
        {{ job.title }} <br>
        {{ job.meta.salariu }} <br>
        {{ job.meta.perioada }} <br>
        {{ job.meta.program }} <br>
        <br>
        <br>
        <br>
      </h1>
    </div> -->

    <!-- <Postare title="Angajam tinichigiu"
      :details="['Salariu negociabil de la 9999 RON', 'Perioada nedeterminata', 'Program full-time']" />

    <Postare title="Angajam vopsitor-pregatitor"
      :details="['Salariu negociabil de la 9999 RON', 'Perioada nedeterminata', 'Program full-time']" />

    <Postare title="Angajam mecanic"
      :details="['Salariu negociabil de la 9999 RON', 'Perioada nedeterminata', 'Program full-time']" />

    <Postare title="Angajam operator calculator"
      :details="['Salariu negociabil de la 9999 RON', 'Perioada nedeterminata', 'Program full-time']" /> -->
  
    </div> 

<DespreNoi/>
</template>


<style scoped>
.hero {
  align-items: center;
  align-self: stretch;
  background: linear-gradient(180deg,
      rgba(0, 0, 0, 0.5) 20.5%,
      rgba(0, 0, 0, 0) 50.5%,
      rgba(0, 0, 0, 0.5) 80%);
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 90vh;
  justify-content: center;
  position: relative;

}

.hero-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Ensures the image stays behind the text */
  object-fit: cover;
  object-position: 50% 50%;
  min-width: 360px;
}

.cauti-o-schimbare {
  color: transparent;
  font-family: "Roboto-Medium", sans-serif;
  font-size: 4.5rem;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  text-shadow: 4px 4px 4px #00000040;
  /* width: 966px; */

  @media (max-width: 720px) {
    font-size: 3.5rem;
  }
}

.color-wrapper {
  color: darkgreen;
}

.span {
  color: #ffffff;
}

.paragraf {
  color: #ffffff;
  font-family: "Roboto-Medium", sans-serif;
  font-size: 2.25rem;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  /* width: 618px; */

  @media (max-width: 720px) {
    font-size: 1.75rem;
  }
}

.subtext {
  color: #8c8c8c;
  font-family: "Roboto-Medium", sans-serif;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  text-shadow: 0px 4px 4px #ffffff73;
  width: 336px;
}



.div {
  color: #ffffff;
  font-family: "Roboto-Medium", sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}


.big-div {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  padding: 48px 12px;
  position: relative;
  width: 100%;
}

.subtitle {
  /* align-self:auto ; */
  flex: none;
  color: #000000;
  font-family: "Roboto-Medium", sans-serif;
  font-size: clamp(36px, 7vw, 48px);
  width: clamp(360px, 90%, 1230px);
}

.mini-cards {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 60px 60px;
  justify-content: center;
  padding: 10px 24px;
  position: relative;
  width: 100%;
}

.mini-card {
  align-items: center;
  background-color: #fffffffc;
  border-radius: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
  /* height: 317px; */
  gap: 12px;
  justify-content: center;
  overflow: hidden;
  padding: 30px 85px;
  position: relative;
  width: 260px;

  @media (max-width: 950px) {
    width: clamp(340px, 80%, 700px);
  }
}

.icon-1 {
  background-color: darkgreen;
  height: 79.28px;
  position: relative;
  width: 84px;
}

.p_mini-card {
  color: black;
  font-family: "Roboto-Regular", sans-serif;
  font-size: 24px;
  font-weight: 400;
  height: 161px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -35.50px;
  margin-right: -35.50px;
  position: relative;
  text-align: center;
  width: 160px;

  @media (max-width: 950px) {
    font-size: 28px;
    width: clamp(250px, 70%, 700px);
  }
}

/* .aplica-acum {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  overflow: hidden;
  position: relative;
  padding: 0 0 20px 0;
}

.aplica {
  color: #000000;
  font-family: "Roboto-Medium", sans-serif;
  font-size: 1.75rem;
  font-weight: 500;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 100%;
}

 .text-wrapper-3 {
  color: #ffffff;
  font-family: "Roboto-Medium", sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
} 


.extended-FAB {
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: 166px;
  height: 60px;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #00497e;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all 0.2s ease;

  &:hover {
    scale: 1.2;
  }

   .img {
    position: relative;
    width: 24px;
    height: 24px;
  } 

  .label-text {
    position: relative;
    width: fit-content;
    font-family: 'Roboto', sans-serif;
    color: white;
    text-align: center;
    white-space: nowrap;
  }
} */
</style>


/* mobile */