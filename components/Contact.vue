<template>
  <div class="screen flex flex-col lg:flex-row justify-center items-center p-10 bg-[#fafafa] min-w-[360px]">
    <div class="mobile-container flex-1 max-w-[800px] w-full p-5"> <!-- Added w-full for full width -->
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
                <Icon class="w-6 h-6 mb-1" name="line-md:map-marker-twotone" style="color: white" alt="location"/>
                <span class="text-white">Sos. Clinceni, DJ401A 6, Bragadiru 077025</span>
              </div>
            </div>
          </div>

          <div class="contact-form-container flex-1 w-full"> <!-- Added w-full for full width -->
            <form @submit.prevent="submitForm" class="contact-form flex flex-col gap-2 mt-5">
              <input v-model="form.nume" name="nume" placeholder="Nume" required
                class="p-2 border rounded-[10px] border-gray-300 w-full" />
              <input v-model="form.prenume" name="prenume" placeholder="Prenume" required
                class="p-2 border rounded-[10px] border-gray-300 w-full" />
              <input v-model="form.email" name="email" placeholder="Email" type="email" required
                class="p-2 border rounded-[10px] border-gray-300 w-full" />
              <input v-model="form.numar_de_telefon_optional" name="numardetelefonoptional"
                placeholder="Numar de telefon (optional)" type="number"
                class="p-2 border rounded-[10px] border-gray-300 w-full" />
              <textarea v-model="form.mesaj" name="mesaj" placeholder="Mesaj" required
                class="p-2 border rounded-[10px] border-gray-300 w-full"></textarea>
              <input type="hidden" v-model="form.honeypot" name="honeypot" />
              <button class="bg-tertiary-blue text-white rounded-[10px] p-2" type="submit" :disabled="isSubmitting">
                {{ submitButtonText }}
              </button>
            </form>
            <div v-if="formMessage" :class="['form-message mt-2 p-2 text-center rounded', formMessage.type]">
              {{ formMessage.text }}
            </div>
            <div class="recaptcha-disclaimer text-black text-sm text-center mt-2">
              This site is protected by reCAPTCHA and the Google
              <a href="https://policies.google.com/privacy" target="_blank" class="text-tertiary-blue">Privacy
                Policy</a>
              and
              <a href="https://policies.google.com/terms" target="_blank" class="text-tertiary-blue">Terms of
                Service</a>
              apply.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="map-container flex-1 max-w-[800px] w-full mt-5 lg:mt-0 lg:ml-5 p-5"> <!-- Added w-full for full width -->
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2852.2774958081704!2d25.96845447464996!3d44.3658914764609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40adffb57a537def%3A0xb5be45e52dd86aef!2sTop%20Speed%20Service%20-%20Service%20Auto%20%C8%99i%20Centru%20de%20Constatare%20Daune%20Bragadiru!5e0!3m2!1sro!2sro!4v1725889184748!5m2!1sro!2sro"
        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-full h-full rounded-[24px] shadow-lg min-h-[400px]"></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useNuxtApp } from '#app';

const form = ref({
  nume: '',
  prenume: '',
  email: '',
  numar_de_telefon_optional: '',
  mesaj: '',
  honeypot: '',
});

const isSubmitting = ref(false);
const formMessage = ref(null);

const submitButtonText = computed(() => isSubmitting.value ? 'Se trimite...' : 'Trimite Mesaj');

const submitForm = async () => {
  if (form.value.honeypot !== '') {
    console.log('Potential spam submission detected');
    return;
  }

  isSubmitting.value = true;
  formMessage.value = null;

  try {
    // Check if the reCAPTCHA library is loaded
    if (typeof window.grecaptcha === 'undefined') {
      console.error('reCAPTCHA library not loaded');
      return;
    }

    // Ensure the grecaptcha is ready
    await new Promise((resolve) => {
      window.grecaptcha.ready(() => {
        resolve();
      });
    });

    const recaptchaToken = await new Promise((resolve, reject) => {
      window.grecaptcha.execute('6LcBGFgqAAAAAByjRU_60UbV6VuQcxD4_oOS2iNE', { action: 'submit_contact_form' })
        .then((token) => {
          resolve(token);
        })
        .catch((error) => {
          console.error('Error executing reCAPTCHA:', error);
          reject(error);
        });
    });

    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: {
        ...form.value,
        recaptchaToken,
      },
    });

    console.log('Mesajul a fost trimis cu succes: ', response);
    formMessage.value = { type: 'success', text: 'Mesajul a fost trimis cu succes!' };

    // Reset form after successful submission
    form.value = {
      nume: '',
      prenume: '',
      email: '',
      numar_de_telefon_optional: '',
      mesaj: '',
      honeypot: '',
    };
  } catch (error) {
    console.error('A fost intampinata o problema: ', error);
    formMessage.value = { type: 'error', text: 'A aparut o eroare la trimiterea mesajului. Va rugam sa incercati din nou.' };
  } finally {
    isSubmitting.value = false;
  }
};
</script>
