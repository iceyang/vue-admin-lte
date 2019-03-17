<template>
  <div id="app" class="wrapper">
    <Header />
    <Sidebar />
    <Content />
    <Footer />
    <ControlSidebar />
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'
import Sidebar from './components/layout/Sidebar.vue'
import Content from './components/layout/Content.vue'
import Footer from './components/layout/Footer.vue'
import ControlSidebar from './components/layout/ControlSidebar.vue'
export default {
  name: 'app',
  components: {
    Header,
    Sidebar,
    Content,
    Footer,
    ControlSidebar,
  }
}
</script>
