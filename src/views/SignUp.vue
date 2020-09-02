<template>
  <main>
    <form class="col_1" @submit.prevent="onSubmit()">
      <label><input v-model="email" type="email" placeholder="E-mail" name="email" required/></label>
      <label><input id="register-phone" v-model="name" type="number" placeholder="Imię i nazwisko / firma" name="imie" required/></label>
      <label><input id="register-password" v-model="password" type="password" placeholder="Hasło  (Min. 8 znaków)" name="haslo" required/></label>
      <label><input id="register-repeated-password" v-model="repeatedPassword" type="password" placeholder="Powtórz hasło" name="haslo" required/></label>
      <div><input type="checkbox" required name="z_gwarancja">Quisque malesuada placerat nisl. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi. Ut id nisl quis enim dignissim sagittis. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. </div>
      <input type="submit" name="submit" value="REJESTRACJA" />
    </form>
  </main>
</template>
<script>
  // @ is an alias to /src
  import axios from 'axios'

  export default {
    name: "SignUp",
    created() {
      this.register();
    },
    components: {
    },
    data () {
      return {
        name: '',
        email: '',
        password: '',
        repeatedPassword: ''
      }
    },
    methods: {
      onSubmit: function () {
        if (this.phone.length < 1 ){
          alert("Numer telefonu musi być podany w formacie: 48123456789");
        }
        else if (this.password.length < 1 ) {
          alert("Hasło musi zawierać co najmniej 8 znaków!");
        }
        else if (this.password !== this.repeatedPassword){
          alert("Podane hasła nie są identyczne");
        }
        else{
          this.register();
        }
      },
      register: function ()  {
        const user = {
            email: "ankietki@int.pl",
            password: "9ErnUQGFBZR4qmB9zzqG"
          };

        var email = "ankietki@int.pl";
        var password = "9ErnUQGFBZR4qmB9zzqG";
        var url = 'http://localhost:8080/api/user';
        var authorizationBasic = window.btoa(email + ':' + password);
        var config = {
          "headers": {
            "Authorization": "Basic " + authorizationBasic
          }
        };
        let vm = this;
        axios.post('http://localhost:8080/api/user', {
          email: "ankietki@int.pl",
          phone: "0048123456789",
          password: '9ErnUQGFBZR4qmB9zzqG'
        })
                .then(function (response) {
                  vm.console.log(response);
                })
                .catch(function (error) {
                  vm.console.log(error);
                });

        // axios({
        //   method: 'get',
        //   url: 'http://localhost:8080/api/user',
        //   headers: {
        //     authorization: toBase64(email + ':' + password)
        //   }
        // })
        // axios.get('http://localhost:8080/api/user', {
        //   withCredentials: true,
        //   auth: {
        //     username: 'ankietki@int.pl',
        //     password: '9ErnUQGFBZR4qmB9zzqG'
        //   }
        // })
        //         .then(function (response) {
        //           console.log(response);
        //         })
        //         .catch(function (error) {
        //           console.log(error);
        //         });
      }
    }
  };
</script>