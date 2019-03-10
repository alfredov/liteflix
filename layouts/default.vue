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
    border-radius: 10px;
  }

  body {
    font-family: $system-font-family;
    margin: 0;
    background: $black;
    color: $white;
  }
</style>
