<template>
  <div class="hidden md:block">
    <div class="hero-area">
      <div class="reviews">
        <RatingBadge :averageRating="4.5" :totalReviews="70" />
      </div>

      <div class="overlap">
        <div class="imagine">
          <NuxtImg 
            class="whatsapp-image"
            src="/whatsapp-image-2024-08-04-at-15-45-14-e5fa0d06-1-1.webp" 
            fetchpriority="high" 
            alt="Top Speed Service Bragadiru"
            format="webp"
            sizes="xs:100vw sm:100vw md:100vw lg:100vw"
            preload 
            quality="80"
            />
        </div>
        <div class="rectangle"></div>
        <div class="text">
          <div class="titlu">
            <h1 class="CENTRU-CONSTATARE">
              <span class="text-wrapper">CENTRU CONSTATARE DAUNE </span>
              <span class="span">SERVICE AUTO</span>
            </h1>
          </div>
          <p class="paragraph">
            Servicii complete de constatare și reparații daune auto pe asigurare, cu mașină la schimb și
            transport cu
            platformă fără cost suplimentar.
          </p>
           <NuxtLink class="link" to="/#contact">
            <div class="extended-FAB">
              <Icon class=" w-6 h-6" name="line-md:phone-call-twotone-loop" style="color: darkgreen" alt="Phone" />
              <div class="label-text">Contact</div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>


  <div class="md:hidden">
    <div class="hero-section">
      <div class="hero-content">
        <div class="hero-title">
          <div class="title-line">
            <span class="title-text">CENTRU CONSTATARE DAUNE<br /></span>
          </div>
          <div class="title-line">
            <span class="title-text-bold">SERVICE AUTO</span>
          </div>
        </div>
        <div class="hero-description">
          <p class="description-text">
            Servicii complete de constatare și reparații daune auto pe asigurare, cu mașină la schimb și
            transport cu
            platformă fara cost suplimentar.
          </p>
        </div>

        <a href="tel:+40788990011" class=" w-fit mx-auto block ">
        <div class="extended-FAB">
          <Icon class=" w-6 h-6" name="line-md:phone-call-twotone-loop" style="color: white" alt="Phone" />
          <div class="label-text">Contact</div>
        </div>
      </a>

        <!-- <a href="tel:+40788990011" class="contact-button">
          <div class="button-content">
            <Icon class="w-6 h-6 mb-1" name="line-md:phone-call-twotone-loop" style="color: white" alt="Phone" />
            <div class="button-text">
              CONTACTEAZA-NE
            </div>
          </div>
        </a> -->
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
  </div>

</template>


<style lang="scss" scoped>
.hero-area {
  position: relative;
  width: 100%;
  height: 80vh;
  max-height: 670px;
  min-height: 620px;
  overflow: visible;

  .overlap {
    position: absolute;
    width: 100%;
    height: 80vh;
    max-height: 680px;
    min-height: 620px;
    top: 0px;
    left: 0px;
    overflow: hidden;

    .imagine {
      position: absolute;
      width: stretch;
      height: 718px;
      top: -10px;
      left: 440px;

      .whatsapp-image {
        position: absolute;
        width: 100%;
        height: 711px;
        top: 1px;
        left: 0px;
      }
    }

    .rectangle {
      position: absolute;
      width: 1280px;
      height: 100%;
      top: 0px;
      left: 0px;
      backdrop-filter: blur(1px) brightness(100%);
      -webkit-backdrop-filter: blur(1px) brightness(100%);
      background: linear-gradient(90deg,
          rgb(255, 255, 255) 40%,
          rgba(255, 255, 255, 0.75) 50%,
          rgba(255, 255, 255, 0) 80%);
    }

    .text {
      display: flex;
      flex-direction: column;
      width: 1000px;
      align-items: center;
      justify-content: center;
      gap: 18px;
      position: absolute;
      top: 133px;
      left: -107px;

      .titlu {
        position: relative;
        align-self: center;
        width: 100%;
        height: 189px;
        overflow: hidden;
        background-size: 100% 100%;
        background: linear-gradient(45deg, #256c17, #006a1b);
        clip-path: polygon(0% 0%, 100% 0%, 75% 100%, 0% 100%);
        // border-radius: 25px;


        .CENTRU-CONSTATARE {
          left: 210px;
          position: absolute;
          width: 689px;
          top: 26px;
          font-family: "Roboto", sans-serif;
          font-weight: 700;
          color: white;
          font-size: 40px;
          letter-spacing: -1.2px;
          line-height: 40px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          line-clamp: 3;
          -webkit-box-orient: vertical;

          .text-wrapper {
            letter-spacing: -0.48px;
            line-height: 48px;
          }

          .span {
            font-size: 81px;
            letter-spacing: -1.97px;
            line-height: 81px;
          }
        }
      }

      .paragraph {
        position: relative;
        width: 577px;
        background: linear-gradient(180deg, rgb(7, 110, 9) 0%, rgb(5.49, 86.31, 7.06) 100%);
        -webkit-background-clip: text !important;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 36px;
        text-align: justify;
        letter-spacing: 0;
        line-height: 44px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        line-clamp: 4;
        -webkit-box-orient: vertical;
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
        background-color: transparent;
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
          color: darkgreen;
          text-align: center;
          white-space: nowrap;
        }
      }
    }
  }
}

.reviews {
  position: sticky;
  top: 10vh;
  right: 10px;
  width: fit-content;
  scale: 0.8;
  z-index: 10;
  float: right;
  margin-top: 20px;

  @media (max-width:1280px) {
    scale: 0.6;
    right: -20px;
  }
}

@media (max-width:1280px) {
  .hero-area {
    height: 60vw;
    min-height: 540px;
    max-height: 690px;

    .overlap {
      position: absolute;
      width: 100%;
      height: 60vw;
      min-height: 540px;
      max-height: 690px;
      overflow: hidden;

      .imagine {
        position: absolute;
        width: stretch;
        height: 718px;
        top: -2px;
        left: 0px;

        .whatsapp-image {
          position: absolute;
          width: 100%;
          min-width: 60vw;
          height: 711px;
          top: 1px;
          left: 150px;
        }
      }

      .rectangle {
        position: absolute;
        width: 90vw;
        height: stretch;
        top: 0px;
        left: 0px;
        backdrop-filter: blur(1px) brightness(100%);
        -webkit-backdrop-filter: blur(1px) brightness(100%);
        background: linear-gradient(90deg,
            rgb(255, 255, 255) 40%,
            rgba(255, 255, 255, 0.75) 50%,
            rgba(255, 255, 255, 0) 80%);
      }

      .text {
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* Centers horizontally */
        align-items: left;
        padding-left: 12px;

        .titlu {
          width: 100%;
          height: 15vw;

          .CENTRU-CONSTATARE {
            left: 16vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            /* Centers horizontally */
            align-items: left;
            width: auto;
            height: auto;

            .text-wrapper {
              font-size: 3vw;
              letter-spacing: -0.48px;
              line-height: 3vw;
            }

            .span {
              font-size: 6.3vw;
              letter-spacing: -1.97px;
              line-height: 6.3vw;
            }
          }
        }

        .paragraph {
          display: flex;
          flex-direction: column;
          justify-content: center;
          /* Centers horizontally */
          align-items: center;
          width: 50%;
          height: auto;
          font-size: 2.5vw;
          line-height: calc(2.5vw + 2px);
        }

        .extended-FAB {
          display: flex;
          flex-direction: row;
          gap: 8px;
          width: fit-content;
          height: fit-content;
          padding: 12px 25px 12px 25px;
          align-items: center;
          justify-content: center;
          position: relative;
          background-color: transparent;
          border-radius: 25px;
          overflow: hidden;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          transition: all 0.2s ease;

          &:hover {
            scale: 1.2;
          }


          .img {
            position: relative;
            width: 14px;
            height: 14px;
          }

          .label-text {
            position: relative;
            width: fit-content;
            font-family: 'Roboto', sans-serif;
            text-align: center;
            white-space: nowrap;
            font-size: 14px;

          }
        }
      }
    }
  }
}


@media (max-width: 768px) {

  .hero-section,
  .hero-content,
  .hero-image {
    display: flex;
    flex-direction: column;
    width: 100%;
    flex: 1;
  }

  .hero-section {
    align-items: flex-start;
    gap: 17px;
    z-index: 4;
    min-width: 360px;
    background-color: rgb(255, 255, 255);
  }

  .hero-content {
    align-items: center;
    gap: 15px;
    padding: 10px;
    margin-top: 48px;
  }

  .hero-title {
    align-items: flex-start;
    gap: 4.5px;
  }

  .title-line {
    align-self: stretch;
    text-align: center;
    line-height: 34px;
  }

  .title-text,
  .title-text-bold {
    color: darkgreen;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
  }

  .title-text {
    font-size: clamp(19px, 6.5vw, 36px);
  }

  .title-text-bold {
    font-size: clamp(19px, 13vw, 72px);
  }

  .hero-description {
    // align-self: stretch;
    border-radius: 19.17px;
    padding: 15px 0px;
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

  .contact-button {
    align-self: center;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: darkgreen;
    border-radius: 118.08px;
    box-shadow: 0px 2px 6px 2px #00000026, 0px 1px 2px #0000004c, 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
    min-width: 94.46429443359375px;
    transition: all 0.2s ease;
    text-decoration: none;
    color: white;
  }

  .contact-button:hover {
    transform: scale(1.1);
  }

  .button-content {
    display: inline-flex;
    gap: 14px;
    padding: 19px;
    background-color: darkgreen;
    border-radius: 118.08px;
  }

  .button-icon {

    color: white;
  }

  .button-text {
    font-weight: 500;
    white-space: nowrap;
    align-items: center;
  }

  .hero-image {
    align-items: center;
    gap: 10px;
    // padding: 0px 20px 25px 25px;
  }

  .hero-image img {
    max-width: 100%;
    height: auto;
    border-radius: 4em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
}

.hero-image-mobile {
  align-items: center;
  /* align-self: stretch; */
  /* padding: 0 1rem 0 1rem; */

  background-position: 50% 50%;
  /* aspect-ratio: 1/1; */
  background-size: cover;
  width: 100%;
  height: 70vh;
  justify-content: space-between;
  position: relative;
  text-align: center;


  .hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
}
}

.hero-image-mobile::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg,
      rgb(255, 255, 255) 0%,
      rgb(243, 244, 246) 5%,
      rgba(243, 244, 246, 0) 40%,
      rgba(243, 244, 246, 0) 80%,
      rgba(243, 244, 246, 0.75) 90%,
      rgba(243, 244, 246, 1) 95%);
  pointer-events: none;
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

    .label-text {
      position: relative;
      width: fit-content;
      font-family: 'Roboto', sans-serif;
      color: white;
      text-align: center;
      white-space: nowrap;
    }
  }
</style>
