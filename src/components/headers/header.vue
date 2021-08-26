<template>
  <div class="siteheader-wrapper w-nav">
    <div class="siteheader siteheader--expand-menu">
      <div class="siteheader__content container">
        <a href="#" aria-current="page" class="siteheader__logo w-inline-block w--current">
          <img src="@/assets/img/logo.png" alt="Sheaflick">
        </a>
        <div class="siteheader__nav__links">
          <div class="siteheader__nav__links__content">
            <SignUpLink />
            <SignInLink />
          </div>
        </div>
        <div class="siteheader__toggle siteheader__toggle--mobile">
          <div class="siteheader__toggle__bars">
            <div class="siteheader__toggle__bar siteheader__toggle__bar--top"></div>
            <div class="siteheader__toggle__bar siteheader__toggle__bar--mid"></div>
            <div class="siteheader__toggle__bar siteheader__toggle__bar--bottom"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignUpLink from './SignUpLink'
import SignInLink from './SignInLink'

export default {
  name: 'Header',
  components: {
    SignUpLink,
    SignInLink
  }
}
</script>
<style scoped>
@import "../../assets/css/fr.css";
@import "../../assets/css/style.css";
@import "../../assets/css/responsive.css";
@import "../../assets/css/main.css";
</style>
