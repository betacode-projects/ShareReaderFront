<template>
  <div class="siteheader__nav__section">
    <div class="siteheader__nav__section__label">
      <router-link to="/SignIn">
        <a style="text-decoration: none;">
          <div v-bind:click="signInMode">ログイン</div>
        </a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUpLink',
  methods: {
    signInMode: function () {
      this.$store.commit('changeFalseLoginMode')
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
