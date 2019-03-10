<template>
  <div class="hamburger-wrapper">
    <input id="main-menu-checkbox" type="checkbox">
    <header>
      <label for="main-menu-checkbox" class="menu-toggle">
        <span class="sr-only">Open main menu</span>
        <img  tabindex="0" role="button" aria-pressed="false" width="30" src="~/assets/img/menu-icon.svg" alt="menu">
      </label>
      <nav id="main-menu" role="navigation" class="main-menu" aria-expanded="false" aria-label="Main menu">

          <div class="menu-content-header">
            <label for="main-menu-checkbox">
              <img  tabindex="0" role="button" aria-pressed="false" width="30" src="~/assets/img/menu-icon.svg" alt="menu">
            </label>
            <img class="menu-content-logo" width="95" src="~/assets/img/liteflix-icon.svg" alt="logo" />
          </div>
          <div class="profile-name">
            <img class="profile-name-img" width="30" src="~/assets/img/user.svg" alt="user" />
            <span>Ernesto Garmendia</span>
          </div>
          <ul class="profile-options">
            <li class="profile-options-item"><a class="profile-options-link" href="#">Cambiar usuario</a></li>
            <li class="profile-options-item"><a class="profile-options-link" href="#">Configuracion</a></li>
            <li class="profile-options-item"><a class="profile-options-link" href="#">Ayuda</a></li>
          </ul>
          <ul class="profile-options">
            <li class="profile-options-item border-none">
              <a class="profile-options-link" href="#">
                <img tabindex="0" role="button" aria-pressed="false" width="20" src="~/assets/img/bell.svg" alt="bell" />
                Novedades
              </a>
            </li>
            <li class="profile-options-item border-none"><a class="profile-options-link" href="#">Series</a></li>
            <li class="profile-options-item border-none"><a class="profile-options-link" href="#">Peliculas</a></li>
            <li class="profile-options-item border-none"><a class="profile-options-link" href="#">Mi lista</a></li>
            <li class="profile-options-item border-none"><a class="profile-options-link" href="#">Niños</a></li>
          </ul>
          <div class="button-container">
            <div @click="showModal" class="play-button play-button-list" tabindex="0" role="button" aria-pressed="false">
              <img width="18" src="~/assets/img/add-list.svg" alt="play">
              <span class="play-button-text">Agregar pelicula</span>
            </div>
            <a class="logout-link" href="#">Log Out</a>
          </div>
      </nav>
      <label 
        for="main-menu-checkbox"
        class="backdrop"
        tabindex="-1"
        aria-hidden="true" hidden
      >
      </label>
    </header>
  </div>
</template>

<script>
  export default {
    methods: {
      showModal() {
        this.$modal.show('modal-form')
      }
    }
  }
</script>

<style scoped lang="scss">
  .logout-link {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
  .button-container {
    margin-left: 15px;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  .play-button-text {
    margin-left: 5px;
  }

  .play-button {
    background: #FF0000;
    width: 200px;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding-left: 12px;
  }

  .border-none {
    border: none !important;
  }
  .profile-options-item {
    border-bottom: 1px #222222 solid;
    padding-bottom: .5em;
    margin-top: .5em;
    text-align: left;
  }
  .profile-options-link {
    color: white;
    font-size: 15px;
    text-decoration: none;
    font-weight: normal;

  }
  .profile-options {
    padding: 0;
    margin: 15px;
    list-style: none;
    margin-top: 2em;
  }
  .profile-name-img {
    margin: 0 10px;
  }
  .profile-name {
    margin: 15px;
    background: #222222;
    height: 37px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 20px;
    padding: 1.4em 0;
  }
  .menu-content-logo {
    margin-left: 1em;
  }
  .menu-content-header {
    text-align: left;
    margin: 15px 0 0 15px;
    display: flex;
    align-items: center;
  }
  .hamburger-wrapper {
    display: block;
  }

  /* Screen reader only */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
  }

  .menu-toggle {
    display: inline-block;
    line-height: 1em;
    font-size: 1em;
    color: #333;
    cursor: pointer;
  }

  .menu-toggle:hover,
  #main-menu-checkbox:focus ~ header .menu-toggle {
    color: #c00;
    outline: auto;
  }

  #main-menu-checkbox {
    position: absolute;
    left: -100vw;
  }

  .main-menu {
    background: #000;
    position: absolute;
    left: -280px;
    width: 280px;
    top: 0;
    height: 100%;
    overflow-x: visible;
    transition: left 0.3s ease,
                box-shadow 0.3s ease;
    z-index: 999;
  }

  .main-menu .menu-close:hover,
  #main-menu-checkbox:focus ~ header .menu-close {
    background: #333;
    text-decoration: underline;
  }

  .main-menu .menu-close {
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
  }


  #main-menu-checkbox:checked ~ header .main-menu,
  .main-menu[aria-expanded="true"] {
    left: 0;
    outline: none;
    -moz-box-shadow: 3px 0 12px rgba(0,0,0,.25);
    -webkit-box-shadow: 3px 0 12px rgba(0,0,0,.25);
    box-shadow: 3px 0 12px rgba(0,0,0,.25);
  }

  #main-menu-checkbox:checked ~ header .menu-close,
  .main-menu[aria-expanded="true"] .menu-close {
    z-index: 1001;
  }

  #main-menu-checkbox:checked ~ header .main-menu ul,
  .main-menu[aria-expanded="true"] ul {
    position: relative;
    z-index: 1000;
  }

  #main-menu-checkbox:checked ~ header .backdrop,
  .main-menu[aria-expanded="true"] + .backdrop {
    position: absolute;
    display: block;  
    content: "";
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 998;
    background: #000;
    background: rgba(0,0,0,.85);
    cursor: default;
  }

  @supports (position: fixed) {
    .main-menu,
    #main-menu-checkbox:checked ~ header .backdrop,
    .main-menu[aria-expanded="true"] + .backdrop {
      position: fixed;
    }
  }

  @include desktop {
    .hamburger-wrapper {
      display: none;
    }
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  header {
    display: flex;
    align-items: baseline;
  }

</style>
