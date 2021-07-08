<template>
  <form action="#" class="sign-in-form">
    <h2 class="title">ログイン</h2>
    <div class="input-field">
      <i class="fas fa-user"></i>
      <input type="text" placeholder="Username" />
    </div>
    <div class="input-field">
      <i class="fas fa-lock"></i>
      <input type="password" placeholder="Password" />
    </div>
    <input type="submit" value="Login" class="btn solid" />
    <p class="social-text">SNSでサインイン</p>
    <SocialLogin />
  </form>
</template>
<script>
import SocialLogin from './SocialLogin'

export default {
  name: 'SignInForm',
  components: {
    SocialLogin
  }
}
</script>
