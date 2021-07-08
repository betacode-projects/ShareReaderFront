<template>
  <div class="content">
    <h3>ログイン</h3>
    <p>アカウントをお持ちの方はこちらのボタンを押してください。</p>
    <SignInSelectButton />
  </div>
</template>
<script>
import SignInSelectButton from './SignInSelectButton.vue'

export default {
  name: 'SignInSelector',
  components: {
    SignInSelectButton
  }
}
</script>
<style scoped>
@import "../../assets/css/login-style.css";
</style>
