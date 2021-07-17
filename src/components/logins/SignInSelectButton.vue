<template>
  <button class="btn transparent" id="sign-in-btn" v-on:click="changeMode">Sign in</button>
</template>

<script>
export default {
  name: 'SignInSelectButton',
  methods: {
    changeMode: function () {
      this.$store.commit('changeFalseLoginMode')
      console.log(this.$store.state.loginMode)
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/login-style.css";
</style>
