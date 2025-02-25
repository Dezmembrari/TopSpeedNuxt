<template>
  <div class="hero-section">
    <!-- Rating appears on desktop only -->
    <div class="reviews">
      <RatingBadge :averageRating="4.5" :totalReviews="70" />
    </div>

    <div class="hero-content">
      <h1 class="hero-title">
        <div class="title-line">
          <span class="title-text">CENTRU CONSTATARE DAUNE</span>
        </div>
        <div class="title-line">
          <span class="title-text-bold">SERVICE AUTO</span>
        </div>
      </h1>
      <div class="hero-description">
        <p class="description-text">
          Servicii complete de constatare și reparații daune auto pe asigurare, cu mașină la schimb și transport cu platformă fara cost suplimentar.
        </p>
      </div>
      <a href="tel:+40788990011" class="w-fit mx-auto block">
        <div class="extended-FAB">
          <Icon class="w-6 h-6" name="line-md:phone-call-twotone-loop" style="color: white" alt="Phone" />
          <div class="label-text">Contact</div>
        </div>
      </a>
    </div>
    <div class="hero-image-mobile">
      <NuxtImg 
        src="/whatsapp-image-2024-08-04-at-15-45-14-e5fa0d06-1-1.webp" 
        fetchpriority="high" 
        alt="Top Speed Service Bragadiru"
        class="hero-img"
        format="webp"
        sizes="xs:100vw sm:100vw md:100vw lg:100vw"
        preload 
        quality="80"
        loading="eager"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* ============= Mobile (Default) Styles ============= */
.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;  // Center content on mobile
  gap: 17px;
  min-width: 360px;
  background-color: transparent;
  overflow: visible;
}

/* Hide reviews on mobile */
.reviews {
  display: none;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;  // Center on mobile
  gap: 15px;
  padding: 10px;
  margin-top: 48px;
  overflow: visible;
}

.hero-title {
  display: flex;
  flex-direction: column;
  align-items: center;  // Center text on mobile
  gap: 4.5px;
  overflow: visible;
}

.title-line {
  width: 100%;
  text-align: center;
  line-height: 34px;
}

/* Base title styling */
.title-text,
.title-text-bold {
  white-space: nowrap;
  color: darkgreen;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

/* Mobile sizes */
.title-text {
  font-size: clamp(19px, 6.5vw, 36px);
}

.title-text-bold {
  font-size: clamp(19px, 13vw, 72px);
}

.hero-description {
  border-radius: 19.17px;
  padding: 15px 0;
  align-items: center;
}

.description-text {
  padding-top: 52px;
  color: darkgreen;
  font-family: "Roboto", sans-serif;
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
  max-width: 430px;
  text-align: justify;
}

.extended-FAB {
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: 166px;
  height: 60px;
  align-items: center;
  justify-content: center;
  background-color: #00497e;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;
  cursor: pointer;
}

.extended-FAB:hover {
  transform: scale(1.2);
}

.label-text {
  font-family: "Roboto", sans-serif;
  color: white;
  text-align: center;
  white-space: nowrap;
}

.hero-image-mobile {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-position: 50% 50%;
  background-size: cover;
  width: 100%;
  height: 70vh;
  position: relative;
  text-align: center;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
}

/* Mobile gradient overlay (180°) */
.hero-image-mobile::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: linear-gradient(180deg,
    rgb(255, 255, 255) 0%,
    rgb(243, 244, 246) 5%,
    rgba(243, 244, 246, 0) 40%,
    rgba(243, 244, 246, 0) 80%,
    rgba(243, 244, 246, 0.75) 90%,
    rgba(243, 244, 246, 1) 95%);
}

/* ============= Desktop Styles (min-width: 768px) ============= */
@media (min-width: 768px) {
  .hero-section {
    position: relative;
  }
  // Show reviews on desktop
  .reviews {
    display:inline-block ;
    position:absolute ;
    bottom: 50px;
    right: 0px;
    width: fit-content;
    z-index: 10;
    scale: 0.8;
  }
  .hero-content {
    position: absolute;
    margin: 0;
    top: 5%;
    left: 0;
    width: clamp(360px, 50%, 600px);
    z-index: 2;
    align-items: flex-start;  // Align inner content left
  }
  .hero-image-mobile {
    width: 100%;
    height: 80vh;
    min-height: 650px;
    position: relative;
    z-index: 1;
    overflow: hidden;
  }
  .hero-img {
    object-fit: fill;
    transform: translateX(150px);
  }
  .hero-image-mobile::after {
    background: linear-gradient(90deg,
      rgb(255, 255, 255) clamp(160px, 10vw, 50%),
      rgba(255, 255, 255, 0.75) 50vw,
      rgba(255, 255, 255, 0) 60vw);
  }
  // Style hero-title as a polygon that fits the text and overflows from hero-content
  .hero-title {
    position: relative;
    z-index: 2;
    background: linear-gradient(45deg, #256c17, #006a1b);
    clip-path: polygon(0 0, 100% 0, 75% 100%, 0 100%);
    padding: 1rem;
    padding-right: clamp(150px, 15vw, 200px);
    padding-left: 48px;
    width: fit-content;
    margin-left: -20px;
    text-align: left;
    align-items: flex-start;
  }
  .title-line {
    line-height: clamp(30px, 3.5vw, 50px);
  }
  // Change title text color to white on desktop and apply clamp() sizing:
  .title-text {
    color: white;
    font-size: clamp(27px, 3vw, 40px);
  }
  .title-text-bold {
    color: white;
    font-size: clamp(54px, 6vw, 81px);
  }
  .description-text {
    font-size: clamp(22px, 3vw, 36px);
    line-height: clamp(22px, 3vw, 36px);
    padding: 24px;
    text-align: left;
    max-width: 100%;
  }
}
</style>
