<template>
  <form action="#" class="sign-up-form">
      <h2 class="title">アカウント作成</h2>
      <UserNameField />
      <EmailField />
      <PasswordField />
      <SignUpButton />
      <p class="social-text">SNSでアカウント作成</p>
      <SocialLogin />
  </form>
</template>
<script>
import UserNameField from './UserNameField'
import EmailField from './EmailField'
import PasswordField from './PasswordField'
import SignUpButton from './SignInButton'
import SocialLogin from './SocialLogin'

export default {
  name: 'SignUpForm',
  components: {
    UserNameField,
    EmailField,
    PasswordField,
    SignUpButton,
    SocialLogin
  }
}
</script>
<style scoped>
@import "../../assets/css/login-style.css";
</style>
