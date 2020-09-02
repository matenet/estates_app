<template>
  <header id="header" class="subpage">
    <nav>
      <ul>
        <li class="logo"><router-link :to="{ name: 'home' }"></router-link></li>
        <li v-if="currentRouteName !== 'addEstate'" class="nav1"><router-link :to="{ name: 'addEstate' }">dodaj ogłoszenie</router-link></li>
        <li v-else class="nav1"><router-link :to="{ name: 'home' }">strona główna</router-link></li>
        <li class="nav2"><router-link :to="{ name: 'logIn' }">zaloguj się</router-link></li>
      </ul>
    </nav>

    <h1 class="title-header">{{ pageTitle }}</h1>
    <h2 class="subtitle">{{ pageSubtTitle }}</h2>
  </header>
</template>

<script>
  export default {
    name: "HeaderSmall",
    computed: {
      currentRouteName() {
        return this.$route.name;
      },
      pageTitle() {
        let pageTitle = '';
        switch(this.currentRouteName) {
          case 'estate':
            pageTitle = 'Ogłoszenia';
            break;
            case 'addEstate':
            pageTitle = 'Dodaj ogłoszenie';
            break;
            case 'singleEstate':
            pageTitle = 'Mieszkanie';
            break;
            case 'promoteEstate':
            pageTitle = 'Promuj ogłoszenie';
            break;
          case 'privatePolicy':
            pageTitle = 'Polityka prywatności';
            break;
          case 'rules':
            pageTitle = 'Regulamin';
            break;
          case 'signUp':
            pageTitle = 'Rejestracja';
            break;
          case 'logIn':
            pageTitle = 'Zaloguj się';
            break;
          case 'resetPassword':
            pageTitle = 'Nie pamiętam hasła';
            break;
          case 'myProfile':
            pageTitle = 'Mój profil';
            break;
          case 'contact':
            pageTitle = 'Kontakt';
            break;
          case 'companyPromote':
            pageTitle = 'Promuj swoją firmę';
            break;
          default:
            pageTitle = '';
            break;
        }
        return pageTitle;
      },
      pageSubtTitle() {
        let pageSubTitle = '';
        switch(this.currentRouteName) {
          case 'contact':
            pageSubTitle = 'Skontaktuj się z nami';
            break;
          default:
            pageSubTitle = '';
            break;
        }
        return pageSubTitle;
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
