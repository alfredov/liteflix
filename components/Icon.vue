<template>
  <img v-if="isButton" tabindex="0" role="button" aria-pressed="false" :width="width" :src="sourcePath" alt="" />
  <img v-else :width="width" :src="sourcePath" alt="" />
</template>

<script>
  export default {
    props: {
      type: String,
      width: String,
      isButton: Boolean
    },
    computed: {
      sourcePath() {
        return `~/assets/img/${this.type}.svg`;
      }
    }
  }
</script>
