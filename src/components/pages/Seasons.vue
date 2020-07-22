<template>
  <div id="app">
    <top-nav class="bor-b"></top-nav>
    <div class="row">
      <div class="col-md-3">
        <sidebar></sidebar>
      </div>
      <div class="col-md-9">
        <h2 class="title">Seasons</h2>
        <gallery
          :class="{ 'gallery__card--season': $route.path === '/seasons' }"
        ></gallery>
      </div>
    </div>
  </div>
</template>

<script>
import Topnav from '@/components/block/Topnav.vue'
import Sidebar from '@/components/block/Sidebar.vue'
import Gallery from '@/components/block/Gallery.vue'

export default {
  name: 'Seasons',
  components: {
    'top-nav': Topnav,
    sidebar: Sidebar,
    gallery: Gallery
  }
}
</script>
