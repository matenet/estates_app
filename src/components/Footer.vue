<template>
  <footer class="container-fluid">
    <div class="content col_4 row">
      <div class="logo col-sm-3">
        <router-link :to="{ name: 'contact' }"><img src="/images/footer-logo.png" title="logo w stopce - strona główna" /></router-link>
      </div>
      <div class="menu col-sm-3">
        <h3>menu</h3>
        <nav>
          <ul>
            <li><router-link :to="{ name: 'home' }">strona główna</router-link></li>
            <li><router-link :to="{ name: 'addEstate' }">dodaj ogłoszenie</router-link></li>
            <li><router-link :to="{ name: 'logIn' }">zaloguj się</router-link></li>
            <li><router-link :to="{ name: 'contact' }">kontakt</router-link></li>
          </ul>
        </nav>
      </div>

      <div class="info col-sm-3">
        <h3>informacje</h3>
        <nav>
          <ul>
            <li><router-link :to="{ name: 'rules' }">regulamin</router-link></li>
            <li><router-link :to="{ name: 'privatePolicy' }">polityka prywatności</router-link></li>
          </ul>
        </nav>
      </div>

      <div class="contact col-sm-3">
        <h3>kontakt</h3>

        <ul>
          <li class="flaticon-placeholder-filled-point">46-233 Warszawa ul. Krakowska 32</li>
          <li class="flaticon-phone-receiver"><a href="tel:+48 566 444 445">+48 123 123 123</a></li>
          <li class="flaticon-envelope"><a href="mailto:biuro@infogotowiec.com">contact@example.com</a></li>
        </ul>

      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>

</style>