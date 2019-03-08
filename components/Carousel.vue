<template>
  <div class="row__inner">
    <div class="tile" v-for="(item, index) in items" :key="index">
      <div class="tile__media">
        <img class="tile__img" :src="item.horizontalImage.w500" alt=""  />
      </div>
      <div class="tile__details">
        <div>
          <img tabindex="0" role="button" aria-pressed="false" width="25" src="~/assets/img/play.svg" alt="play">
        </div>
        <div class="tile__content">
          <div class="tile__content__right_left">
             <h3 class="tile__title">{{ item.title }}</h3>
            <div class="tile__description">98% Coincidencia +16 1h 30 min</div>
            <div class="tile__category">{{ item.firstGenre }}</div>
          </div>
          <div class="tile__content__right">
            <img class="tile__icon" tabindex="0" role="button" aria-pressed="false" width="20" src="~/assets/img/like.svg" alt="play">
            <img class="tile__icon" tabindex="0" role="button" aria-pressed="false" width="20" src="~/assets/img/add-list.svg" alt="play">
          </div>
        </div>
        <div class="tile__arrow">
          <img class="tile__icon" tabindex="0" role="button" aria-pressed="false" width="20" src="~/assets/img/arrow-down.svg" alt="play">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['items']
  }
</script>

<style scoped lang="scss">
  
  .row__inner {
    display: flex;
    overflow-x: auto;
    transition: 450ms transform;
    /* font-size: 0; */
    white-space: nowrap;
    margin: 70.3125px 0;
    padding-bottom: 10px;
  }

  .tile {
    position: relative;
    display: inline-block;
    width: 204px;
    height: 124px;
    margin-right: 5px;
    font-size: 20px;
    cursor: pointer;
    transition: 450ms all;
    transform-origin: center left;
  }

  .tile__img {
    width: 204px;
    height: 124px;
    object-fit: cover;
  }

  .tile__details {
    height: 129px;
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
    .row__inner {
      overflow: unset;
    }

    .row__inner:hover {
      transform: translate3d(-62.5px, 0, 0);
    }

    .row__inner:hover .tile:hover {
      transform: scale(1.8);
      opacity: 1;
    }

    .tile:hover ~ .tile {
      transform: translate3d(163px, 0, 0);
    }
  }
</style>
