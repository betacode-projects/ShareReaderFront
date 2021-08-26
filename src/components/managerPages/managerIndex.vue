<template>
  <div>
    <Header />
    <Container />
    <Footer />
  </div>
</template>

<script>
import Header from '../headers/Header'
import Footer from '../footers/Footer'
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
