<template>
    <div class="wrapper">
      <div class="bg">
        <div class="image">
          <picture>
            <source media="(max-width: 799px)" :srcset="smallImage">
            <source media="(min-width: 800px)" :srcset="mediumImage">
            <img class="picture-image" :src="mediumImage" alt="">
          </picture>
        </div>
      </div>
      <div class="cta-wrapper">
        <Navbar />
        <div class="movie-content">
          <div class="movie-content-copy">
            <span class="subtitle">original de <strong>liteflix</strong></span>
            <h1>{{ title }}</h1>
          </div>
          <div class="buttons-container">
            <div></div>
            <div class="play-button" tabindex="0" role="button" aria-pressed="false">
              <img width="18" src="~/assets/img/play.svg" alt="play">
              <span class="play-button-text">Reproducir</span>
            </div>
            <div class="play-button play-button-list" tabindex="0" role="button" aria-pressed="false">
              <img width="18" src="~/assets/img/add-list.svg" alt="play">
              <span class="play-button-text">Mi Lista</span>
            </div>
            <img class="icon-add-list" tabindex="0" role="button" aria-pressed="false" width="30" src="~/assets/img/add-list-round.svg" alt="add-list">
          </div>
          <div class="description-container">
            <h4 class="description-title">Ver temporada 1</h4>
            <p class="description-text">
              {{ overview.slice(0, 187) }}...
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Navbar from '~/components/Navbar.vue'

  export default {
    props: ['smallImage', 'mediumImage', 'title', 'overview'],
    components: {
      Navbar
    }
  }
</script>

<style scoped lang="scss">
  .movie-content {
    margin-top: 200px;
  }
  .buttons-container {
    margin: 2em 0 1em 0;
    display: flex;
    justify-content: space-between;
  }

  .description-container {
    display: none;
  }

  .play-button {
    background: rgba(0,0,0, .5);
    width: 140px;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding-left: 12px;
  }

  .play-button-list {
    display: none;
    margin-left: 30px;
  }

  .play-button-text {
    margin-left: 5px;
  }
 
  h1 {
    @include heading-1($white);
  }

  .subtitle {
    text-transform: uppercase;
  }

  .wrapper {
    position: relative;
    height: 600px;
  }

  .image {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }

  .bg::before {
    background: rgba(0,0,0,.2);
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background-image: linear-gradient(to bottom,rgba(0,0,0,.5) 5%,rgba(0,0,0,0) 95%);
    zoom: 1;
  }

  .bg::after {
    content: '';
    position: absolute;
    top: auto;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background-image: linear-gradient(to top,rgba(0,0,0,1) 20%,rgba(0,0,0,0) 95%);
    zoom: 1;
    height: 10%;
  }

  .picture-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .cta-wrapper {
    color: white;
    position: absolute;
    top: 44px;
    bottom: 44px;
    z-index: 13;
    text-align: center;
    right: 0;
    left: 0;
    margin: 0 20px;
  }

  @include desktop {
    .wrapper {
      height: 800px;
    }
    .cta-wrapper {
      margin: 0 5%;
    }

    .buttons-container {
      justify-content: start;
    }

    .movie-content-copy {
      text-align: left;
      min-width: 380px;
      max-width: 700px;
    }

    h1 {
      font-size: 100px;
      margin-top: 20px;
      line-height: 1.1em;
    }

    .subtitle {
      font-size: 20px;
    }

    .movie-content {
      margin-top: 100px;
    }

    .description-container {
      display: block;
      text-align: left;
      font-size: 20px;
      font-weight: 400;
      width: 537px;
    }

    .description-title {
      margin-bottom: 0;
    }

    .description-text {
      margin-top: 8px;
    }

    .icon-add-list {
      display: none;
    }

    .play-button-list {
      display: flex;
    }
  }
</style>
