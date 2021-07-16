<template>
  <button class="btn transparent" id="sign-up-btn" v-on:click="changeMode">Sign up</button>
</template>

<script>
export default {
  name: 'SignUpSelectButton',
  methods: {
    changeMode: function () {
      this.$store.commit('changeTrueLoginMode')
      console.log(this.$store.state.loginMode)
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/login-style.css";
</style>
