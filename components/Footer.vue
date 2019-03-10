<template>
  <footer class="footer">
    <div class="social-container">
      <a href="#">
        <img width="25" src="~/assets/img/facebook-icon.svg" alt="facebook" />
      </a>
      <a href="#">
        <img width="25" src="~/assets/img/instagram-icon.svg" alt="instagram" />
      </a>
      <a href="#">
        <img width="27" src="~/assets/img/twitter-icon.svg" alt="twitter" />
      </a>
      <a href="#">
        <img width="30" src="~/assets/img/youtube-icon.svg" alt="youtube" />
      </a>
    </div>
    <ul class="footer-list">
      <li class="footer-list-item"><a class="footer-link" href="#">Todos los titulos</a></li>
      <li class="footer-list-item"><a class="footer-link" href="#">Prensa</a></li>
      <li class="footer-list-item"><a class="footer-link" href="#">Confidencialidad</a></li>
      <li class="footer-list-item"><a class="footer-link" href="#">Contacto</a></li>
      <li class="footer-list-item"><a class="footer-link" href="#">Cancelar subscripcion</a></li>
      <li class="footer-list-item"><a class="footer-link" href="#">Inversores</a></li>
      <li class="footer-list-item"><a class="footer-link" href="#">Legales</a></li>
      <li class="footer-list-item"><a class="footer-link" href="#">Ayuda</a></li>
      <li class="footer-list-item"><a class="footer-link" href="#">RRHH</a></li>
      <li class="footer-list-item"><a class="footer-link" href="#">Cookies</a></li>
    </ul>
    <span class="copy-right">© 1997-2018 Liteflix, Inc.</span>
  </footer>
</template>

<style scoped lang="scss">
  .social-container {
    display: flex;
    width: 180px;
    justify-content: space-between;
    align-items: center;
  }

  .footer {
    margin-top: 1em;
    margin-left: 5%;
    margin-bottom: 1em;
  }

  .copy-right {
    font-weight: 200;
    font-size: 14px;
  }

  .footer-list {
    color: #999999;
    padding: 0;
    margin: 20px 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, minmax(50px, 250px));
    column-gap: 30px;
  }

  .footer-link {
    text-decoration: none;
    color: white;
  }

  .footer-list-item {
    margin-bottom: .8em;
  }

  @include desktop {
    .footer {
      margin-left: 5%;
      margin-bottom: 5%;
    }
    .footer-list {
      display: grid;
      grid-template-columns: repeat(3, minmax(50px, 250px));
      column-gap: 50px;
    }
  }
</style>
