<template>
  <div>
    <div class="aplica-acum">
      <h4 class="aplica">Aplica acum:</h4>
      <a href="tel:+40765999999" class="contact-button">
        <div class="extended-FAB">
          <Icon class=" w-6 h-6" name="line-md:phone-call-twotone-loop" style="color: white" alt="Phone" />
          <div class="label-text">Contact</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
.aplica-acum {
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

/* .text-wrapper-3 {
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
} */


.extended-FAB {
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: 166px;
  height: 60px;
  margin: 0 40px 0 40px;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #00497e;
  border-radius: 25px;
  overflow:auto ;
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