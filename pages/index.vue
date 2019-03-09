<template>
  <div>
    <Hero
      :smallImage="nowPlayingMovie.verticalImage.original"
      :mediumImage="nowPlayingMovie.horizontalImage.original"
      :title="nowPlayingMovie.title"
      :overview="nowPlayingMovie.overview"
    />
    <div class="container">
      <Carousel :items="upComingMovies" orientation="horizontal" title="Próximamente" />
      <Carousel :items="topRatedMovies" orientation="horizontal" title="Mejores Rankeadas" />
      <Carousel :items="popularMovies" orientation="vertical" title="POPURALES DE NETFLIX" />
      <Carousel :items="dramaMovies" orientation="horizontal" title="Drama" />
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Carousel from '~/components/Carousel.vue'
  import Hero from '~/components/Hero.vue'

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
        nowPlayingMovie: 'nowPlayingMovie'
      })
    },
    components: {
      Carousel,
      Hero
    }
  }
</script>

<style scoped lang="scss">
  
  

  .container {
    overflow: hidden;
    margin-top: -50px;
    z-index: 1;
    position: relative;
  }

  h1 {
     @include heading-1($white);
  }

  p {
    @include large-text-bold;
  }

  @include desktop {
    .container {
      margin-top: -100px;
    }
  }
</style>
