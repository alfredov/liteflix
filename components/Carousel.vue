<template>
  <div class="wrapper">
    <h3>{{ title }}</h3>
    <div>
      <div :class="rowClassName">
        <div class="tile" :class="classObject" v-for="(item, index) in cachedItems" :key="`${index}-v1`">
          <div class="tile__media">
            <img class="tile__img" :class="classObject" :src="imageName(item)" alt="" />
          </div>
          <div class="tile__details" :style="styleObject">
            <div>
              <img tabindex="0" role="button" aria-pressed="false" width="25" src="~/assets/img/play-round.svg" alt="play">
            </div>
            <div class="tile__content">
              <div class="tile__content__right_left">
                <h3 class="tile__title">{{ item.title }}</h3>
                <div class="tile__description">98% Coincidencia +16 1h 30 min</div>
                <div class="tile__category">{{ item.firstGenre }}</div>
              </div>
              <div class="tile__content__right">
                <img class="tile__icon" tabindex="0" role="button" aria-pressed="false" width="20" src="~/assets/img/like-round.svg" alt="play">
                <img class="tile__icon" tabindex="0" role="button" aria-pressed="false" width="20" src="~/assets/img/add-list-round.svg" alt="play">
              </div>
            </div>
            <div class="tile__arrow">
              <img class="tile__icon" tabindex="0" role="button" aria-pressed="false" width="20" src="~/assets/img/arrow-down.svg" alt="play">
            </div>
          </div>
        </div>

        <div class="tile" :class="classObject" v-for="(item, index) in items" :key="`${index}-v2`">
          <div class="tile__media">
            <img class="tile__img" :class="classObject" :src="imageName(item)" alt="" />
          </div>
          <div class="tile__details" :style="styleObject">
            <div>
              <img tabindex="0" role="button" aria-pressed="false" width="25" src="~/assets/img/play-round.svg" alt="play">
            </div>
            <div class="tile__content">
              <div class="tile__content__right_left">
                <h3 class="tile__title">{{ item.title }}</h3>
                <div class="tile__description">98% Coincidencia +16 1h 30 min</div>
                <div class="tile__category">{{ item.firstGenre }}</div>
              </div>
              <div class="tile__content__right">
                <img class="tile__icon" tabindex="0" role="button" aria-pressed="false" width="20" src="~/assets/img/like-round.svg" alt="play">
                <img class="tile__icon" tabindex="0" role="button" aria-pressed="false" width="20" src="~/assets/img/add-list-round.svg" alt="play">
              </div>
            </div>
            <div class="tile__arrow">
              <img class="tile__icon" tabindex="0" role="button" aria-pressed="false" width="20" src="~/assets/img/arrow-down.svg" alt="play">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['items', 'orientation', 'title', 'cachedItems'],
    computed: {
      rowClassName: function() {
        return {
          'row__innerV': this.orientation === 'vertical',
          'row__innerH': this.orientation === 'horizontal'
        }
      },
      classObject: function() {
        return {
          'tile-vertical-dim': this.orientation === 'vertical',
          'tile-horizontal-dim': this.orientation === 'horizontal'
        }
      },
      styleObject: function() {
        return `height: ${this.orientation === 'vertical'? 405 : 129}px`
      }
    },
    methods: {
      imageName(item) {
        return (this.orientation === 'vertical') ? item.verticalImage.w500: item.horizontalImage.w500
      }
    }
  }
</script>

<style scoped lang="scss">
  $verticalWidth: 200px;
  $verticalHeight: 400px;

  $horizontalWidth: 204px;
  $horizontalHeight: 124px;

  .wrapper {
    padding-left: 5%;
  }
  
  .row-control {
    position: absolute;
    top: 0;
    height: 124px;
    width: 52px;
    right: 0;
    z-index: 1;
    background-color: rgba(0,0,0,0.7);
  }


  h3 {
    @include heading-3
  }

  .tile-horizontal-dim {
    width: $horizontalWidth;
    height: $horizontalHeight;
  }

  .tile-vertical-dim {
    width: $verticalWidth;
    height: $verticalHeight;
  }

	%row_properties {
    display: flex;
    overflow-x: auto;
    transition: 450ms transform;
    white-space: nowrap;
    padding-bottom: 10px;    
    display: flex;
    overflow-x: auto;
    transition: 450ms transform;
    white-space: nowrap;
    margin-bottom: 70px;
    padding-bottom: 10px;
	}

  .row__innerV {
    @extend %row_properties;
  }

  .row__innerH {
    @extend %row_properties;
  }

  .tile {
    position: relative;
    display: inline-block;
    margin-right: 5px;
    font-size: 20px;
    cursor: pointer;
    transition: 450ms all;
    transform-origin: center left;
  }

  .tile__img {
    object-fit: cover;
  }

  .tile__details {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-end;
    padding: 0 12px;

    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    font-size: 10px;
    opacity: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, #000000 100%);
    transition: 450ms opacity;
  }

  .tile__details:after {
    margin-top: -25px;
    margin-left: -25px;
    width: 50px;
    height: 50px;
    border: 3px solid #ecf0f1;
    line-height: 50px;
    text-align: center;
    border-radius: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 1;
  }

  .tile:hover .tile__details {
    opacity: 1;
  }

  .tile__arrow {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .tile__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .tile__content__right {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .tile__icon {
    margin-bottom: 5px;
  }

  .tile__content__right_left {
    width: 150px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .tile__title {
    margin: 0;
    font-size: 15px;
    font-weight: 900;
  }

  .tile__description, .tile__category {
    font-size: 9px;
    font-weight: lighter;
  }
  @include desktop {
    .row__innerV {
      overflow: unset;
    }

    .row__innerH {
      overflow: unset;
    }

    .row__innerV:hover {
      transform: translate3d(-62.5px, 0, 0);
    }

    .row__innerH:hover {
      transform: translate3d(-62.5px, 0, 0);
    }

    .row__innerV:hover .tile:hover {
      transform: scale(1.2);
      opacity: 1;
    }

    .row__innerH:hover .tile:hover {
      transform: scale(1.8);
      opacity: 1;
    }

    .tile-vertical-dim:hover ~ .tile {
      transform: translate3d(40px, 0, 0);
    }

    .tile-horizontal-dim:hover ~ .tile {
      transform: translate3d(163px, 0, 0);
    }
  }
</style>
