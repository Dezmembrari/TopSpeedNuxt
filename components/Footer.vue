<template>
  <footer class="bg-tertiary-blue text-white w-full p-5 absolute left-0 min-w-96">
    <div class="flex justify-around flex-wrap gap-8">
      <div class="flex-1 min-w-min">
        <h2 class="text-5xl font-bold text-shadow-md">Top Speed Service</h2>
        <hr class="border-t-2 border-white-300 mt-2 w-full" />
      </div>
      <div class="flex-1 min-w-min">
        <div class="text-lg font-semibold mb-2">Detalii de contact</div>
        <div class="flex items-center gap-2 mb-2">
          <Icon class="text-xl" name="line-md:phone-call-twotone" style="color: white;" alt="Contact"/>
          <a href="tel:+40788990011">0788 990 011</a>
        </div>
        <div class="flex items-center gap-2 mb-2">
          <Icon class="text-xl" name="line-md:email" style="color: white;" alt="Mail"/>
          <a href="mailto:contact@topspeedservice.ro">contact@topspeedservice.ro</a>
        </div>
        <div class="flex items-center gap-2 mb-2">
          <Icon class="text-xl" name="line-md:map-marker-alt-twotone-loop" style="color: white;" alt="Location"/>
          <a href="https://maps.app.goo.gl/rg6mR3coquFgzpYi6">Sos. Clinceni, DJ401A 6, Bragadiru 077025</a>
        </div>
      </div>
      <div class="flex-1 min-w-min">
        <div class="text-lg font-semibold mb-2">Legal</div>
        <div><NuxtLink class="text-white" to="/privacy">Privacy Policy</NuxtLink></div>
        <div><NuxtLink class="text-white" to="/cookies">Cookies</NuxtLink></div>
      </div>
      <div class="flex-1 min-w-min">
        <div class="text-lg font-semibold mb-2">Acces rapid</div>
        <!-- <div><NuxtLink class="text-white" to="/flota">Flota</NuxtLink></div> -->
        <div><NuxtLink class="text-white" to="/servicii">Servicii</NuxtLink></div>
        <div><NuxtLink class="text-white" to="/despre_noi">Despre noi</NuxtLink></div>
        <div><NuxtLink class="text-white" to="/contact">Contact</NuxtLink></div>
      </div>
    </div>
  </footer>
</template>
