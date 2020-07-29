<template>
  <header class="header">
    <div class="container">
      <nav class="nav nav--navbar">
        <router-link
          v-for="item in pages"
          :key="item.id"
          :to="item.link"
          class="link link--navbar"
          >{{ item.page }}</router-link
        >
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'top-nav',
  data() {
    return {
      pages: [
        { link: '/', page: 'character' },
        { link: '/seasons', page: 'seasons' },
        { link: '/episodes', page: 'episodes' },
        { link: '/quote', page: 'quote' },
        { link: '/deaths', page: 'deaths' }
      ]
    }
  }
}
</script>
