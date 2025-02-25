<template>
  <div class="flex flex-col py-5 lg:py-10 lg:flex-row justify-center items-center min-w-[360px] bg-[#f1fceccc]" id="despre">
    <div class="flex flex-col m-5 p-5 md:flex-row max-w-[1250px] md:p-10 bg-white rounded-2xl shadow-lg overflow-hidden min-w-[340px]">
      <div class="w-full md:w-1/2 flex-shrink-0 flex justify-center items-center">
        <div class="frame self-center">
          <NuxtImg defer loading="lazy" sizes="xs:50% sm:50% md:200px" class="unsplash" alt="Unsplash" src="/service_1.webp" />
          <NuxtImg defer loading="lazy" sizes="xs:50% sm:50% md:200px" class="unsplash" alt="Unsplash" src="/service_2.webp" />
          <NuxtImg defer loading="lazy" sizes="xs:50% sm:50% md:200px" class="unsplash" alt="Unsplash" src="/autocar.webp" />
          <NuxtImg defer loading="lazy" sizes="xs:50% sm:50% md:200px" class="unsplash" alt="Unsplash" src="/service_3.webp" />
        </div>
      </div>
      <div class="p-6 md:w-1/2 flex flex-col justify-center">
        <h2 class="text-2xl font-bold mb-4">Despre noi</h2>
        <p class="text-wrapper-despre-noi rounded-2xl overflow-auto flex-grow">
          Din 2001, Top Speed Service SRL a evoluat constant, adaptându-se celor mai recente tehnologii și standarde din
          industrie. Astăzi, suntem un service auto modern, dotat cu echipamente de ultimă generație și o echipă de
          specialiști pasionați de ceea ce fac. Oferim o gamă completă de servicii, de la întreținerea periodică până la
          reparațiile complexe, toate la cele mai înalte standarde de calitate. Alegeți Top Speed Service și
          beneficiați de experiența noastră, de profesionalismul echipei noastre și de prețuri competitive.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.frame {
  position: relative;
  width: clamp(340px, 70%, 512px);
  // height: clamp(340px, 70%, 512px);
  aspect-ratio: 1 / 1;
  background: rgb(255, 255, 250);
  border-radius: 25px;
  padding: 12px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-wrap: wrap;
  gap: 0px 0px;
  justify-content: center;
  align-items: center;

  @media(max-width:720px) {
    width: 80%;
    height: auto;
  }

  .unsplash {
    width: 50%;
  }
}

.text-wrapper-despre-noi {
  color: #000;
  font-family: "Roboto", sans-serif;
  font-size: 1.25rem;
  line-height: 1.5;
  overflow-wrap: break-word;
  display: flex;
  flex-direction: column;
}
</style>
