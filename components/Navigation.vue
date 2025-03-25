<template>
  <div v-if="!mobileBanner && bannerVisible" class="top-banner-0w3mEM" data-id="244:1198">
    <div class="contact-727KgL" data-id="244:1199">
      <div class="telefon-E0lKG6" data-id="244:1200">
        <Icon class="phone-0TmUck phone" name="line-md:phone-call-twotone-loop" style="color: white" alt="Phone"/>
        <div class="x0788-990-011-0TmUck x0788-990-011 inter-normal-white-14-5px" data-id="244:1202">
          <a href="tel:+40788990011" style="color: white;">0788 990 011</a>
        </div>
      </div>
      <div class="email-E0lKG6" data-id="244:1203">
        <Icon class="mail-HSA5eX mail" name="line-md:email-twotone" style="color: white" alt="Mail"/>
        <div class="officetopspeedserviceeu-HSA5eX officetopspeedserviceeu inter-normal-white-14-5px"
          data-id="244:1205">
          <a href="mailto:office@topspeedservice.eu" style="color: white;">office@topspeedservice.eu</a>
        </div>
      </div>
    </div>
    <div class="program-727KgL" data-id="244:1206">
      <Icon class="clock-cmdIc7" name="line-md:calendar" style="color: white" alt="calendar"/>
      <div class="luni-vineri-0800-cmdIc7 inter-normal-white-14-5px" data-id="244:1208">
        Luni-Vineri: 08:00-17:30
      </div>
    </div>
  </div>

  <header :class="{ 'scrolled-nav': scrolledNav }">
    <!--Top banner-->
    <nav>
      <!-- Branding -->
      <transition name="branding">
        <div v-if="showBranding" class="branding">
          <NuxtLink to="/">
            <div class="polygon xs:px-12 xs:w-72 md:w-[350px]">
              <p class="text-nowrap xs:text-xl py-3 md:text-3xl md:py-2 md:-m-5 text-left" style="text-shadow: -2px -2px 5px rgba(0, 0, 0, 0.5);">Top Speed Service</p>
            </div>
          </NuxtLink>
        </div>
      </transition>

      <!-- Navigation -->
      <ul v-show="!mobile" class="navigation">
        <li>
          <NuxtLink class="link" to="/">Acasa</NuxtLink>
        </li>
        <li>
          <NuxtLink class="link" to="/servicii">Servicii</NuxtLink>
        </li>
        <!-- <li>
          <NuxtLink class="link" to="/angajam">Angajam</NuxtLink>
        </li> -->
        <li>
          <NuxtLink class="link-t" to="/#contact">
            <div class="contacteaza-ne">
              <Icon class="w-4 h-4" name="line-md:phone-twotone" style="color: white" alt="Phone"/>
              <p>Contacteaza-ne</p>
            </div>
          </NuxtLink>
        </li>
      </ul>

      <!-- Mobile Icon -->
          <Icon @click="toggleMobileNav" v-show="mobile" :class="{ 'icon-active': mobileNav }" class="icon"  name="line-md:close-to-menu-alt-transition" style="color: darkgreen" alt="Menu_button"/>

      <!-- Mobile Dropdown Navigation -->
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li>
            <NuxtLink class="link" to="/" @click="closeMobileNav">Acasa</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" to="/servicii" @click="closeMobileNav">Servicii</NuxtLink>
          </li>
          <!-- <li>
            <NuxtLink class="link" to="/angajam" @click="closeMobileNav">Angajam</NuxtLink>
          </li> -->
          <li>
            <NuxtLink class="link" to="/#contact" @click="closeMobileNav">Contact</NuxtLink>
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
import { nextTick, onMounted } from "vue";

export default {
  name: "Navigation",
  data() {
    return {
      scrolledNav: false,
      mobile: false,
      mobileNav: false,
      windowWidth: null,
      showBranding: false,
      mobileBanner: false,
      bannerVisible: true // Initially true to show the banner
    };
  },

  mounted() {
    if (process.client) {
      this.checkScreen(); // Check screen size after mount
      window.addEventListener('resize', this.checkScreen);
      window.addEventListener('scroll', this.updateScroll);

      // Trigger the branding animation on page load after DOM is fully updated
      nextTick(() => {
        setTimeout(() => {
          this.showBranding = true;
        }, 100);  // Adjust the delay as needed
      });
    }
  },

  beforeUnmount() {
    if (process.client) {
      window.removeEventListener('resize', this.checkScreen);
      window.removeEventListener('scroll', this.updateScroll);
    }
  },

  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    closeMobileNav() {
      this.mobileNav = false;
    },

    updateScroll() {
      const scrollPosition = window.scrollY;
      this.scrolledNav = scrollPosition >= 10;
      if(scrollPosition < 20 && !this.bannerVisible){
        this.bannerVisible=true;
      } else {
        if(scrollPosition >= 70)
        this.bannerVisible=false;
      }
    },

    checkScreen() {
      if (process.client) {
        this.windowWidth = window.innerWidth;
        this.mobile = this.windowWidth <= 765;
        this.mobileBanner = this.mobile;
        if (!this.mobile) {
          this.mobileNav = false; // Close mobile nav if in desktop mode
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  top: 0;
  left: 0;
  background-color: #d2e9d3;
  z-index: 99;
  width: 100%;
  min-width: 360px;
  position: sticky;
  transition: 0.5s ease all;
  color: rgba(255, 255, 255, 1.0);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);


  nav {
    max-height: 48px;
    display: flex; // Align branding, navigation, and icon in a single row
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0px 24px;
    padding-left: 0; // Adjust padding to align with branding

    @media (min-width: 1140px) {
      .navigation {
        margin-right: 5%;
      }
    }



    .branding {
      display: flex;
      align-items: center;
      position: relative; // Fix branding to the left edge
      left: 0; // Stick to the left of the screen
      top: 0px; // Align with the top of the header
      height: 48px;
      padding: 0px 0px; // Maintain padding for the logo
      background-color: transparent; // Add background color to match header
      overflow-y: visible;

      .polygon{
        left: 0px;
        clip-path: polygon(0% 0%, 100% 0%, 75% 100%, 0% 100%);
        background-color: darkgreen;
        // height: 60px;
        // width: 350px;
      }

      @media (max-width: 480px) {
        left: -40px;
      }


      a {
        display: inline-block; // Ensures it doesn't affect layout
        margin: 0; // Reset margins
        padding: 0; // Reset padding
        border: none; // Remove any borders
        text-decoration: none; // Remove underline

        img {
          display: block; // Ensures the image does not have extra space around it
          height: 60px; // Maintain aspect ratio
          width: auto; // Maintain aspect ratio
          transition: 0.5s ease all;
        }

        // img {
        //   height: 48px;
        //   transition: 0.5s ease all;

      }
    }

    .navigation {
      display: none; // Hidden by default (for mobile)
      line-clamp: 0;
      -webkit-line-clamp: 0;

      @media (min-width: 766px) {
        display: flex; // Show on larger screens
        align-items: center;
        justify-content: flex-end;
        list-style: none;
        padding: 2px;
        margin: 10;
        flex: 1; // Allows it to take remaining space
      }

      li {
        margin-left: 12px;

        .link {
          font-size: 14px;
          color: #000000;
          text-decoration: none;
          font-weight: 500;
          transition: 0.5s ease all;
          padding-bottom: 4px;
          border-bottom: 1px solid transparent;

          &:hover {
            color: #000000;
            border-color: #1a5e25; //schimbat
            scale: 1.2;
          }
        }

        .link-t {
          font-size: 14px;
          color: #00000000;
          text-decoration: none;
          font-weight: 500;
          transition: 0.5s ease all;
          padding-bottom: 4px;
          border-bottom: transparent;

          &:hover {
            color: transparent;
            border-color: transparent; //schimbat
            background-color: transparent;
            scale: 1.2;
            box-shadow: 0 4px 6px -1px rgba($color: #000000, $alpha: 0.1), 0 2px 4px -1px rgba($color: #000000, $alpha: 0.06);
          }
        }

        .contacteaza-ne {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 5px 10px;
          margin: 5px 0px 5px 0px;
          position: relative;
          flex: 0 0 auto;
          background-color: #005403;
          border-radius: 25px;
          transition: all 0.2s ease;
          color: #fff
        }
      }
    }

    .icon {
      display: flex;
      justify-content: center;
      height: 35px;
      cursor: pointer;
      color: #31522a; // icon color
      font-size: 35px;
      //margin-left: auto; // Push icon to the right side
      min-height: 35px;

      @media (min-width: 766px) {
        display: none; // Hide icon on larger screens
      }

    }

    .icon-active {
      // display: inline-flex;
      // height: 35px;
      // font-size: 35px;
      transform: rotate(180deg);
      transition: 0.8s ease all;
      }
    
    .dropdown-nav {
      display: flex; // Default to flex (mobile)
      flex-direction: column; // Stack vertically
      align-items: flex-start; // Align to the left
      position: fixed; // Position relative to nav
      top: 0px; // Adjusted to below the header
      height: 100%;
      width: 70%;
      left: 0;
      background-color: rgba(255, 255, 255, 0.98);
      padding: 16px 24px;
      list-style: none;
      margin: 0;
      z-index: 98;

      li {
        margin-left: 0px;
        margin-top: 10px;
        margin-bottom: 10px;

        .link {
          font-size: 24px;
          color: #000000;
          text-decoration: none;
          font-weight: 500;
          padding-bottom: 4px;
          transition: 0.8s ease all;

          &:hover {
            color: #a2d48e;
          }
        }
      }

      @media (min-width: 766px) {
        display: none; // Hide on larger screens
      }
    }




    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
      transition: 0.3s ease-in-out all;
    }

    .mobile-nav-enter-from,
    .mobile-nav-leave-to {
      transform: translateX(-550px); ///Animatie de intrare din stanga in dreapta pe X
    }

    .mobile-nav-enter-to {
      transform: translateX(0px);
    }


    .branding-enter-active,
    .branding-leave-active {
      transition: 1.2s ease-out all;
    }

    .branding-enter-from,
    .branding-leave-to {
      transform: translateX(-100%); ///Animatie de intrare din stanga in dreapta pe X
      opacity: 0;
    }

    .branding-enter-to {
      transform: translateX(0px);
      opacity: 1;
    }

  }
}

.scrolled-nav {
  min-width: 360px;
  background-color: #d2e9d3;
  box-shadow: 0 4px 6px -1px rgba($color: #000000, $alpha: 0.5), 0 2px 4px -1px rgba($color: #000000, $alpha: 0.06);

  nav {
    min-width: 360px;
    padding: 0px 15px;
    padding-left: 0; // Align padding to match with branding
    transition: all 0.3s ease-in;

    .navigation{
      height: 38px;
    }

    .branding {
      padding: 0px 0px; // Maintain padding for the logo
      height: 32px;

      .polygon{
        position: relative;
        top: 0px;
        //height:55px;
      }
    }
  }
}


.top-banner-0w3mEM {
  align-items: center;
  background-color: black;
  display: flex;
  justify-content: space-between;
  left: 0px;
  padding: 12px 100px;
  position: relative;
  top: 0px;
  width: 100%;
  z-index: 100; // Ensure it stays above other elements

  @media (max-width: 766px) {
    display: none; // Hide banner on screens smaller than 750px
  }

  .contact-727KgL {
    align-items: center;
    background-color: transparent;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 15.143617630004883px;
    position: relative;

    .telefon-E0lKG6 {
      align-items: center;
      background-color: transparent;
      display: inline-flex;
      flex: 0 0 auto;
      gap: 2.900930166244507px;
      height: 21.924304962158203px;
      position: relative;

      .phone-0TmUck {
        height: 21.756977081298828px;
        width: 22.482208251953125px;
      }

      .x0788-990-011-0TmUck {
        display: -webkit-box;
        height: 16.680349349975586px;
        line-height: 17.4px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 96.4559326171875px;
      }
    }

    .email-E0lKG6 {
      align-items: center;
      background-color: transparent;
      display: inline-flex;
      flex: 0 0 auto;
      gap: 4.3513946533203125px;
      position: relative;

      .mail-HSA5eX {
        height: 21.756977081298828px;
        width: 23.715702056884766px;
      }

      .officetopspeedserviceeu-HSA5eX {
        display: -webkit-box;
        height: 17px;
        line-height: 17.4px;
        overflow: hidden;
        text-align: left;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 200.72918701171875px;
      }
    }
  }

  .program-727KgL {
    color: white;
    align-items: center;
    background-color: transparent;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 8.0765962600708px;
    position: relative;

    .clock-cmdIc7 {
      height: 21.756977081298828px;
      width: 21.756977081298828px;
    }

    .luni-vineri-0800-cmdIc7 {
      display: -webkit-box;
      height: 17;
      line-height: 17.4px;
      overflow: hidden;
      text-align: left;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 171.63058471679688px;
    }
  }
}
</style>
