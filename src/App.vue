<template>
  <div :class="pageClass">
    <HeaderBig v-if="currentRouteName === 'home'"></HeaderBig>
    <HeaderSmall v-else></HeaderSmall>
    <router-view/>
    <Footer></Footer>
    <cookie-law theme="mytheme" buttonText="Wyrażam zgodę">
      <div slot="message">
        Ta strona używa plików cookie. Korzystając z tej strony, wyrażasz zgodę na korzystanie z tych plików cookie. Aby uzyskać więcej informacji, odwiedź naszą <router-link :to="{ name: 'privatePolicy' }" style="color: rgb(255, 255, 255);
    text-decoration: underline;">Polityką prywatności</router-link>
      </div>
    </cookie-law>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HeaderBig from "@/components/HeaderBig.vue";
  import HeaderSmall from "@/components/HeaderSmall.vue";
  import Footer from "@/components/Footer.vue";
  import CookieLaw from 'vue-cookie-law'

  export default {
    name: "App",
    components: {
      HeaderBig,
      HeaderSmall,
      Footer,
      CookieLaw
    },
    computed: {
      currentRouteName() {
        return this.$route.name;
      },
      pageClass() {
        let pageClass = '';
        switch (this.currentRouteName) {
          case 'home':
            pageClass = 'home';
            break;
          case 'estates':
            pageClass = 'subpage ogloszenia';
            break;
          case 'addEstate':
            pageClass = 'subpage dodaj_zgloszenie';
            break;
          case 'singleEstate':
            pageClass = 'subpage produkt';
            break;
          case 'privatePolicy':
            pageClass = 'subpage contact';
            break;
          case 'rules':
            pageClass = 'subpage contact';
            break;
          case 'signUp':
            pageClass = 'subpage rejestracja';
            break;
          case 'logIn':
            pageClass = 'subpage login';
            break;
          case 'myProfile':
            pageClass = 'subpage moj-profil';
            break;
          case 'companyPromote':
            pageClass = 'subpage promuj_firme';
            break;
          case 'contact':
            pageClass = 'subpage contact';
            break;
          case '404':
            pageClass = 'subpage login';
            break;
          default:
            pageClass = 'subpage';
            break;
        }
        return pageClass;
      }
    }
  };
</script>

<style lang="scss">

</style>
