<template>
  <div class="container">
    <h1>Welcome!</h1>
    <Carousel :items="upComingMovies" orientation="horizontal" />
    <Carousel :items="upComingMovies" orientation="vertical" />
    <ol>
      <li v-for="(movie, index) in upComingMovies" :key="index">{{ movie.title }}</li>
    </ol>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Carousel from '~/components/Carousel.vue'

  export default {
    async fetch({ store }) {
      await store.dispatch('getMovies')
    },
    computed: {
      ...mapGetters({
        movies: 'movies',
        upComingMovies: 'upComingMovies'
      })
    },
    components: {
      Carousel
    }
  }
</script>

<style scoped lang="scss">
  .container {
    overflow: hidden;
  }

  h1 {
     @include heading-3($white);
  }

  p {
    @include large-text-bold;
  }
</style>
