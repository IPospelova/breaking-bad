<template>
  <header class="header">
    <div class="container">
      <nav class="nav nav--navbar">
        <router-link
          to="/"
          :class="{ active: $route.path === '/' }"
          class="link link--navbar"
          >characters</router-link
        >
        <router-link
          to="/seasons"
          :class="{ active: $route.path === '/seasons' }"
          class="link link--navbar"
          >seasons</router-link
        >
        <router-link
          to="/episodes"
          :class="{ active: $route.path === '/episodes' }"
          class="link link--navbar"
          >episodes</router-link
        >
        <router-link
          to="/quote"
          :class="{ active: $route.path === '/quote' }"
          class="link link--navbar"
          >quote</router-link
        >
        <router-link
          to="/deaths"
          :class="{ active: $route.path === '/deaths' }"
          class="link link--navbar"
          >deaths</router-link
        >
        <!-- <a href="/" class="link link--navbar">characters</a>
        <a href="/seasons" class="link link--navbar">seasons</a>
        <a href="" class="link link--navbar">episodes</a>
        <a href="" class="link link--navbar">quote</a>
        <a href="" class="link link--navbar">deaths</a> -->
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'top-nav',
  data() {
    return {}
  }
}
</script>
