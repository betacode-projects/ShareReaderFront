<template>
  <form action="#" class="sign-in-form">
    <h2 class="title">ログイン</h2>
    <UserNameField />
    <PasswordField />
    <SignInButton />
    <p class="social-text">SNSでサインイン</p>
    <SocialLogin />
  </form>
</template>

<script>
import UserNameField from './UserNameField'
import PasswordField from './PasswordField'
import SignInButton from './SignInButton'
import SocialLogin from './SocialLogin'

export default {
  name: 'SignInForm',
  components: {
    UserNameField,
    PasswordField,
    SignInButton,
    SocialLogin
  }
}
</script>

<style scoped>
@import "../../assets/css/login-style.css";
</style>
