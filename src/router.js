import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
          import(/* webpackChunkName: "home" */ "./views/Home.vue")
    },
    {
      path: "/ogloszenia",
      name: "estates",
      component: () =>
          import(/* webpackChunkName: "estates" */ "./views/Estates.vue")
    },
    {
        path: "/ogloszenie/:property_id",
        name: "singleEstate",
        props: true,
        component: () =>
            import(/* webpackChunkName: "singleEstate" */ "./views/SingleEstate.vue")
    },
    {
        path: "/dodaj-ogloszenie",
        name: "addEstate",
        component: () =>
            import(/* webpackChunkName: "addEstate" */ "./views/AddEstate.vue")
    },
    {
        path: "/edytuj-ogloszenie/:property_id",
        name: "editEstate",
        props: true,
        component: () =>
            import(/* webpackChunkName: "editEstate" */ "./views/EditEstate.vue")
    },
    {
        path: "/zakoncz-ogloszenie/:property_id",
        name: "endEstate",
        props: true,
        component: () =>
            import(/* webpackChunkName: "endEstate" */ "./views/EndEstate.vue")
    },
    {
      path: "/kontakt",
      name: "contact",
      component: () =>
          import(/* webpackChunkName: "contact" */ "./views/Contact.vue")
    },
    {
      path: "/logowanie",
      name: "logIn",
      component: () =>
          import(/* webpackChunkName: "logIn" */ "./views/LogIn.vue")
    },
    {
      path: "/rejestracja",
      name: "signUp",
      component: () =>
          import(/* webpackChunkName: "signUp" */ "./views/SignUp.vue")
    },
      {
          path: "/nie-pamietam-hasla",
          name: "resetPassword",
          component: () =>
              import(/* webpackChunkName: "signUp" */ "./views/ResetPassword.vue")
      },
    {
      path: "/regulamin",
      name: "rules",
      component: () =>
          import(/* webpackChunkName: "rules" */ "./views/Rules.vue")
    },
    {
      path: "/polityka-prywatnosci",
      name: "privatePolicy",
      component: () =>
          import(/* webpackChunkName: "privatePolicy" */ "./views/PrivatePolicy.vue")
    },
    {
      path: "/moj-profil/",
      name: "myProfile",
      component: () =>
          import(/* webpackChunkName: "myProfile" */ "./views/MyProfile.vue")
    },
    {
      path: "/promuj-firme/",
      name: "companyPromote",
      component: () =>
          import(/* webpackChunkName: "companyPromote" */ "./views/CompanyPromote.vue")
    },
    {
      path: "/promuj-ogloszenie/:property_id",
      name: "promoteEstate",
      props: true,
      component: () =>
          import(/* webpackChunkName: "companyPromote" */ "./views/PromoteEstate.vue")
    },
    {
        path: "*",
        name: "errorPageNotFound",
        component: () =>
            import(/* webpackChunkName: "errorPageNotFound" */ "./views/404.vue") }
  ],
  scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});
