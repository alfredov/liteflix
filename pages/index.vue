<template>
  <div class="container">
    <h1>Welcome!</h1>
    <ol>
      <li v-for="(movie, index) in upComingMovies" :key="index">{{ movie.title }}</li>
    </ol>
    <Carousel :items="upComingMovies"></Carousel>
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

<style lang="scss">
  h1 {
     @include heading-3($white);
  }

  p {
    @include large-text-bold;
  }
</style>
