<template>
  <div id="app">
    <top-nav class="bor-b"></top-nav>
    <div class="row">
      <div class="col-md-3">
        <sidebar></sidebar>
      </div>
      <div class="col-md-9">
        <h2 class="title">Deaths</h2>
        <gallery></gallery>
      </div>
    </div>
  </div>
</template>

<script>
import Topnav from '@/components/block/Topnav.vue'
import Sidebar from '@/components/block/Sidebar.vue'
import Gallery from '@/components/block/Gallery.vue'

export default {
  name: 'Deaths',
  components: {
    'top-nav': Topnav,
    sidebar: Sidebar,
    gallery: Gallery
  }
}
</script>
