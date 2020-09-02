<template>
  <main>
    <div class="contact col_2">

      <div class="left">
        <h3 class="title-form">formularz kontaktowy</h3>

        <form class="contact-form">
          <label class="col_1"><input type="text" placeholder="IMIĘ I NAZWISKO" name="name" required oninvalid="this.setCustomValidity(' Proszę wypełnić wskazane pole ')" oninput="setCustomValidity('')" /></label>
          <label class="col_1"><input type="email" placeholder="EMAIL" name="email" required oninvalid="this.setCustomValidity(' Proszę wypełnić wskazane pole ')" oninput="setCustomValidity('')" /></label>
          <label class="col_1 textarea"><textarea  placeholder="WPISZ ZAPYTANIE" name="email" required oninvalid="this.setCustomValidity(' Proszę wypełnić wskazane pole ')" oninput="setCustomValidity('')" ></textarea></label>
          <input type="submit" name="submit" value="WYŚLIJ" />
        </form>
      </div>

      <div class="right">
        <h3 class="title-form">dane kontaktowe</h3>
        <ul>
          <li class="flaticon-placeholder-filled-point">46-233 Warszawa ul. Krakowska 32</li>
          <li class="flaticon-phone-receiver"><a href="tel:+48 566 444 445">+48 +48 123 123 123</a></li>
          <li class="flaticon-envelope"><a href="mailto:biuro@infogotowiec.com">contact@example.com</a></li>
        </ul>
        <iframe class="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39092.80267346288!2d21.050061121848575!3d52.23793133083733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarszawa!5e0!3m2!1spl!2spl!4v1557263365730!5m2!1spl!2spl" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>

    </div>
  </main>
</template>
<script>
  // @ is an alias to /src

  export default {
    name: "Contact",
    components: {
    },
    data () {
      return {

      }
    },
  };
</script>