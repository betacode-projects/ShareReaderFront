<template>
  <div class="siteheader__nav__section">
    <div class="siteheader__nav__section__label">
      <router-link to="/SignUp">
        <a href="#" style="text-decoration: none;">
          <div v-bind:click="signUpMode">アカウント作成</div>
        </a>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'signUpLink',
  methods: {
    signUpMode: function () {
      this.$store.commit('changeTrueLoginMode')
      console.log(this.$store.state.loginMode)
    }
  }
}
</script>
<style scoped>
@import "../../assets/css/fr.css";
@import "../../assets/css/style.css";
@import "../../assets/css/responsive.css";
@import "../../assets/css/main.css";
</style>
