<template>
  <div class="container">
    <h1>Welcome!</h1>
    <Carousel :items="upComingMovies" orientation="horizontal" title="Próximamente" />
    <Carousel :items="topRatedMovies" orientation="horizontal" title="Mejores Rankeadas" />
    <Carousel :items="popularMovies" orientation="vertical" title="POPURALES DE NETFLIX" />
    <Carousel :items="dramaMovies" orientation="horizontal" title="Drama" />
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
        upComingMovies: 'upComingMovies',
        popularMovies: 'popularMovies',
        dramaMovies: 'dramaMovies',
        topRatedMovies: 'topRatedMovies',
        nowPlayingMovies: 'nowPlayingMovies'
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
     @include heading-1($white);
  }

  p {
    @include large-text-bold;
  }
</style>
