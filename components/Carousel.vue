<template>
  <div class="row__inner">
    <div class="tile" v-for="(item, index) in items" :key="index">
      <div class="tile__media">
        <img class="tile__img" :src="item.horizontalImage.w500" alt=""  />
      </div>
      <div class="tile__details">
        <div class="tile__title">
          Top Gear
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

<style scoped>
  .row__inner {
    transition: 450ms transform;
    font-size: 0;
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

  .tile__title {
    padding-bottom: 2em;
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
</style>
