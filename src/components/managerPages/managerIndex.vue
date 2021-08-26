<template>
  <div>
    <Header />
    <Container />
    <Footer />
  </div>
</template>

<script>
import Header from '../headers/header'
import Footer from '../footers/footer'
import Container from './dashboardMain'

export default {
  name: 'Manager',
  components: {
    Header,
    Footer,
    Container
  }
}
</script>
