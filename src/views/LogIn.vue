<template>
  <main>
    <div class="login col_2">

      <div class="left">
        <h3 class="title-form">formularz logowania</h3>

        <form class="login-form" @submit.prevent="onSubmit($event)">
          <label class="col_1"><input v-model="login" type="text" placeholder="E-mail" name="login" required /></label>
          <label class="col_1"><input v-model="password" type="password" placeholder="Hasło" name="pass" required /></label>
          <input type="submit" name="submit" value="ZALOGUJ" />
        </form>
      </div>

      <div class="right">
        <h3 class="title-form">Czy już się zarejestrowałeś ?</h3>
        <p>Jeśli jeszcze nie masz konta w tym serwisie, to proszę załóż je klikając <router-link :to="{ name: 'signUp' }">tutaj</router-link></p>
      </div>
    </div>
  </main>
</template>
<script>
  // @ is an alias to /src

  export default {
    name: "LogIn",
    components: {
    },
    data () {
      return {
        login: '',
        password: ''
      }
    },
    methods: {
      onSubmit() {
        this.sendData();
      },
        sendData: function()
        {
          this.$router.push({name: 'myProfile'});
        }
    },
  };
</script>