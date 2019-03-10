<template>
  <div class="header">
    <span class="menu">
      <img  tabindex="0" role="button" aria-pressed="false" width="30" src="~/assets/img/menu-icon.svg" alt="menu">
    </span>
    <a href="#" class="logo">
      <img  tabindex="0" role="button" aria-pressed="false" width="95" src="~/assets/img/liteflix-icon.svg" alt="logo">
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
    <modal name="hello-world" :clickToClose="false" :classes="['box-global-modal', 'v--modal']">
      <div class="box-modal">
        <span @click="closeModal" tabindex="0" role="button" aria-pressed="false" class="box-close-icon">x</span>
        <div class="box-upload-container">
          <a class="box-upload-link" href="#">
            <img width="15" src="~/assets/img/clip.svg" alt="arrow">
            Agregar archivo
          </a>
          o arrastrarlo y soltarlo aqui
        </div>
        <div class="box-form">
          <label class="box-form-input" for="">
            <span class="box-form-label">NOMBRE DE LA PELICULA</span>            
            <input class="box-form-input-value " type="text" />
          </label>
          <label class="box-form-input" for="">
            <span class="box-form-label">CATEGORIA</span>
            <select class="box-form-select" name="" id="">
              <option value="">Animacion</option>
              <option value="">Accion</option>
            </select>
          </label>
          
        </div>
        <button class="box-button">Subir pelicula</button>
      </div>
    </modal>
  </div>
</template>

<script>
  export default {
    methods: {
      showModal() {
        this.$modal.show('hello-world')
      },
      closeModal() {
        this.$modal.hide('hello-world')
      }
    }
  }
</script>

<style scoped lang="scss">
  .box-close-icon {
    color: black;
    position: absolute;
    top: 0px;
    right: 0px;
    padding: .4em;
    cursor: pointer;
  }
  .box-upload-link {
    color: #0076FF;
    text-decoration: none;
  }
  .box-modal {
    padding: 30px 20px;
    text-align: center;
  }

  .box-upload-container {
    color: #9B9B9B;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 1px black dashed;
  }

  .box-form {
    text-align: left;
    color: black;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .box-form-input {
    display: flex;
    flex-direction: column;
    width: 270px;

  }

  .box-form-input-value {
    border: none;
    border-bottom: 1.4px #000 solid;
    height: 20px;
  }

  .box-form-label {
    color: #9B9B9B;
    font-weight: normal;
    font-size: 16px;
  }

  .box-form-select {
    height: 30px;
  }

  .box-button {
    height: 60px;
    width: 280px;
    background: #000;
    color: white;
    font-size: 16px;
    font-weight: normal;
    border-radius: 35px
  }
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

  .menu {
    display: block;
  }

  .navigation {
    display: none;
  }

  .profile {
    display: none;
  }

  @include desktop {
    .menu {
      display: none;
    }

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
