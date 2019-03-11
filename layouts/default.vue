<template>
  <div class="default-container">
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
  import Footer from '~/components/Footer'
  export default {
    components: { Footer }
  }
</script>

<style lang="scss">

  .box-global-modal {
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
    bottom: 0 !important;
    border-radius: 0;
    padding: 1em;

    @include desktop {
      top: 20% !important;
      left: 20% !important;
      width: 600px !important;
      height: 300px !important;
      border-radius: 10px;
      padding: 0;
    }
  }

  body {
    font-family: $system-font-family;
    margin: 0;
    background: $black;
    color: $white;
  }
</style>
