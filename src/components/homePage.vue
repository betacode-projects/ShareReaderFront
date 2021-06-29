<template>
  <div class="homePage">
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: 'homePage',
  data () {
    return {
      title: `QUICK・SHARE ・ UPLOAD\n
      Share ReaderはQRコードで\n
      データ共有できるサービスです。`
    }
  }
}
</script>

<style scoped>
 @import './assets/css/style.css'
</style>
