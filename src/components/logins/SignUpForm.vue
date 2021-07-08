<template>
  <form action="#" class="sign-up-form">
      <h2 class="title">アカウント作成</h2>
      <div class="input-field">
          <i class="fas fa-user"></i>
          <input type="text" placeholder="Username" />
      </div>
      <div class="input-field">
          <i class="fas fa-envelope"></i>
          <input type="email" placeholder="Email" />
      </div>
      <div class="input-field">
          <i class="fas fa-lock"></i>
          <input type="password" placeholder="Password" />
      </div>
      <input type="submit" class="btn" value="Sign up" />
      <p class="social-text">SNSでアカウント作成</p>
      <SocialLogin />
  </form>
</template>
<script>
import SocialLogin from './SocialLogin'

export default {
  name: 'SignUpForm',
  components: {
    SocialLogin
  }
}
</script>
