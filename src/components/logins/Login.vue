<template>
  <div class="container">
    <div class="forms-container">
      <div class="signin-signup">
        <SignInForm />
        <SignUpForm />
      </div>
    </div>
    <div class="panels-container">
      <div class="panel left-panel">
        <SignUpSelector />
        <img src="@/assets/img/security_SVG.svg" class="image" alt="" />
      </div>
      <div class="panel right-panel">
        <SignInSelector />
        <img src="@/assets/img/app_development_SVG.svg" class="image" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import SignUpSelector from './SignUpSelector'
import SignInSelector from './SignInSelector'

export default {
  name: 'SignIn',
  components: {
    SignInForm,
    SignUpForm,
    SignUpSelector,
    SignInSelector
  }
}
</script>
<style scoped>
@import "../../assets/css/login-style.css";
</style>
