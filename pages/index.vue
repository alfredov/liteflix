<template>
  <div>
    <Modal />
    <Hero
      :smallImage="nowPlayingMovie.verticalImage.original"
      :mediumImage="nowPlayingMovie.horizontalImage.original"
      :title="nowPlayingMovie.title"
      :overview="nowPlayingMovie.overview"
    />
    <div class="container">
      <Carousel :items="upComingMovies" :cachedItems="cachedItems" orientation="horizontal" title="Próximamente" />
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
  import Modal from '~/components/Modal'

  export default {
    async fetch({ store }) {
      await store.dispatch('getMovies')
    },
    data() {
      return { cachedItems: [] }
    },
    computed: {
      ...mapGetters({
        genres: 'genres',
        upComingMovies: 'upComingMovies',
        popularMovies: 'popularMovies',
        dramaMovies: 'dramaMovies',
        topRatedMovies: 'topRatedMovies',
        nowPlayingMovie: 'nowPlayingMovie'
      })
    },
    components: {
      Modal,
      Carousel,
      Hero
    },
    mounted() {
      const movies = JSON.parse(localStorage.movies || '[]')
      this.cachedItems = movies
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
