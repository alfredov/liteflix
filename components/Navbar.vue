<template>
  <div class="header">
    <span class="menu">
      <HamburgerMenu />
    </span>
    <a href="#" class="logo">
      <img tabindex="0" role="button" aria-pressed="false" width="95" src="~/assets/img/liteflix-icon.svg" alt="logo">
    </a>
    <nav class="navigation">
      <ul class="navigation-list">
        <li class="navigation-list-item"><a class="list-item-link link-active" href="#">Inicio</a></li>
        <li class="navigation-list-item"><a class="list-item-link" href="#">Series</a></li>
        <li class="navigation-list-item"><a class="list-item-link" href="#">Películas</a></li>
        <li class="navigation-list-item"><a class="list-item-link" href="#">Agregados recientemente </a></li>
        <li class="navigation-list-item">
          <div>
            <a class="list-item-link" href="#">
              Mi Lista
            </a>
          </div>
        </li>
      </ul>
      <div @click="showModal" class="add-button" tabindex="0" role="button" aria-pressed="false">
        <img width="18" src="~/assets/img/add-list.svg" alt="add item">
      </div>
    </nav>
    <div class="search">
      <img  class="search-icon" tabindex="0" role="button" aria-pressed="false" width="20" src="~/assets/img/search-icon.svg" alt="search">
      <div class="profile">
        <ul class="navigation-list profile-list">
          <li class="navigation-list-item"><a class="list-item-link link-active" href="#">Niños</a></li>
          <li class="navigation-list-item">
            <a class="list-item-link" href="#">
              <img tabindex="0" role="button" aria-pressed="false" width="20" src="~/assets/img/bell.svg" alt="bell">
            </a>
          </li>
          <li class="navigation-list-item">
            <a tabindex="0" role="button" aria-pressed="false" class="list-item-link profile-arrow" href="#">
              <img width="25" src="~/assets/img/user.svg" alt="user">
              <img width="15" src="~/assets/img/arrow-down.svg" alt="arrow">
            </a>
          </li>
        </ul>
      </div>
    </div>
    
  </div>
</template>

<script>
  import HamburgerMenu from '~/components/HamburgerMenu'

  export default {
    methods: {
      showModal() {
        this.$modal.show('modal-form')
      }
    },
    components: {
      HamburgerMenu
    }
  }
</script>

<style scoped lang="scss">
  .profile-arrow {
    display: flex;
    width: 50px;
    justify-content: space-between;
  }

  .profile-list {
    display: flex;
    align-items: center;
  }

  .add-button {
    background: #FF0000;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    cursor: pointer;
    margin-left: 1em;
  }

  .navigation-list {
    padding: 0;
    list-style: none;
    margin: 0;
  }

  .navigation-list-item {
    display: inline-block;
    margin-left: 1em;
  }

  .list-item-link {
    color: white;
    text-decoration: none;
    font-weight: normal;
    font-size: 14px;
  }

  .link-active {
    font-weight: bold;
    font-size: 15px;
  }

  .search-icon {
    cursor: pointer;
  }

  .header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .navigation {
    display: none;
  }

  .profile {
    display: none;
  }

  @include desktop {
    .navigation {
      display: flex;
      align-items: center;
    }

    .header {
      justify-content: start;
    }

    .profile {
      display: block;
    }

    .search {
      position: absolute;
      right: 0;
      display: flex;
    }
  }  
</style>
