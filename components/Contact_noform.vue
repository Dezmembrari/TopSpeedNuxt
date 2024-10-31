<template>
  <div class="screen flex flex-col lg:flex-row justify-center items-center p-5 bg-[#fafafa] min-w-[360px]">
    <div class="mobile-container flex-1 max-w-[800px] w-full"> <!-- Added w-full for full width -->
      <div class="contact-card p-5 bg-white shadow-lg rounded-[25px] text-black">
        <div class="content-container flex flex-col lg:flex-row gap-8 justify-center items-center">
          <div
            class="card-info flex-1 bg-tertiary-blue shadow-lg rounded-[25px] p-5 flex flex-col justify-center items-center text-center w-full lg:w-auto">
            <h2 class="title text-[1.8rem] text-white mb-5">Informatii contact</h2>
            <div class="contact-details flex flex-col gap-5 items-center">
              <a href="tel:+40788990011" class="text-white">
                <div class="contact-item flex flex-col items-center text-center gap-2 text-[1.2rem]">
                  <Icon class="w-6 h-6 mb-1" name="line-md:phone-call-twotone-loop" style="color: white" alt="Phone"/>
                  <p>0788 990 011</p>
                </div>
              </a>
              <a href="mailto:contact@topspeedservice.ro" class="text-white">
                <div class="contact-item flex flex-col items-center text-center gap-2 text-[1.2rem]">
                  <Icon class="w-6 h-6 mb-1" name="line-md:email-twotone" style="color: white" alt="Mail"/>
                  <p>contact@topspeedservice.ro</p>
                </div>
              </a>
              <div class="contact-item flex flex-col items-center text-center gap-2">
                <Icon class="w-6 h-6 mb-1" name="line-md:map-marker-twotone" style="color: white" alt="locaion"/>
                <span class="text-white">Sos. Clinceni, DJ401A 6, Bragadiru 077025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="map-container flex-1 max-w-[800px] w-full mt-5 lg:mt-0 lg:ml-5"> <!-- Added w-full for full width -->
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2852.2774958081704!2d25.96845447464996!3d44.3658914764609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40adffb57a537def%3A0xb5be45e52dd86aef!2sTop%20Speed%20Service%20-%20Service%20Auto%20%C8%99i%20Centru%20de%20Constatare%20Daune%20Bragadiru!5e0!3m2!1sro!2sro!4v1725889184748!5m2!1sro!2sro"
        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-full h-full rounded-[24px] shadow-lg min-h-[400px]"></iframe>
    </div>
  </div>
</template>

<script setup>

</script>
