<template>
  <div class="two-row-component">
    <!-- First Row -->
    <div class="row shadow-lg" v-if="showFirstRow">
      <div class="column text-column">
        <h2 class="text-2xl mb-1 font-medium">{{ title1 }}</h2>
        <p class="mb-4 text-base">{{ text1 }}</p>
      </div>
      <div class="column image-column">
        <div :class="['image', imageClass1]"></div>
      </div>
    </div>

    <!-- Second Row (reversed layout) -->
    <div class="row reversed shadow-lg" v-if="showSecondRow">
      <div class="column image-column">
        <div :class="['image', imageClass2]"></div>
      </div>
      <div class="column text-column">
        <h2 class="text-2xl mb-1 font-medium">{{ title2 }}</h2>
        <p class="mb-4 text-base">{{ text2 }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title1: {
      type: String,
      required: false,
      default: ''
    },
    text1: {
      type: String,
      required: false,
      default: ''
    },
    imageClass1: {
      type: String,
      required: false,
      default: ''
    },
    title2: {
      type: String,
      required: false,
      default: ''
    },
    text2: {
      type: String,
      required: false,
      default: ''
    },
    imageClass2: {
      type: String,
      required: false,
      default: ''
    },
    showFirstRow: {
      type: Boolean,
      default: true
    },
    showSecondRow: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.two-row-component {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 30px;
  padding: 12px;
  
  @media (min-width: 1280px) {
    max-width: 1280px;
    margin: auto;
    align-content: center;
    justify-content: center;
  }

  @media (max-width: 480px) {
    padding: 0px;
    margin: 10px;
  }
}

.row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  background: white;
  border-radius: 25px;
  padding: 24px;
  min-width: 340px;

  @media (max-width: 480px) {
    padding: 10px;
  }
}

.column {
  flex: 1;
}

.text-column {
  h2 {
    align-content: center;
    justify-content: center;
  }

}

.image-column {
  .image {
    margin: auto;
    display: flex;
    border-radius: 25px;
    width: 350px;
    height: 237.92px;
    border: 2px solid #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3), 0 6px 20px rgba(0, 0, 0, 0.4);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    
  }
  @media (max-width: 480px) {
      width: 100%;
      height: auto;
      .image{
        width: 100%;
        min-width: 30px;
      }
    }
}

/* Responsive styles */
@media (max-width: 768px) {
  .row {
    flex-direction: column;
  }
}

/* Reversed row for the second row */
.reversed {
  flex-direction: row;
}

  @media (max-width: 768px) {
  .reversed {
    flex-direction: column-reverse;
  }
}
</style>