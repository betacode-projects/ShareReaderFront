<template>
  <div class="content">
    <h3>アカウント作成</h3>
    <p>アカウントをお持ちでない方はこちらのボタンを押してください。</p>
    <SignUpSelectButton />
  </div>
</template>
<script>
import SignUpSelectButton from './SignUpSelectButton'

export default {
  name: 'SignUpSelector',
  components: {
    SignUpSelectButton
  }
}
</script>
