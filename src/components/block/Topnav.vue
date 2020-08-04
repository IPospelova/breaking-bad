<template>
  <header class="header">
    <div class="container">
      <nav class="nav nav--navbar">
        <router-link
          v-for="item in links"
          :key="item.id"
          :to="item.link"
          :class="item.activeClass"
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
  },
  computed: {
    links() {
      this.pages.forEach(el =>
        el.link === this.$route.path
          ? (el.activeClass = 'active')
          : (el.activeClass = '')
      )
      return this.pages
    }
    //AddActiveClass() {
    //let links = [],
    // let isMobile = 99
    // const user = { name: 'vasja', surname: 'ivanov' }
    // user.tel = '921-330-24-10'
    // user.tel = isMobile == true ? '921-330-24-10' : '821 - 921....'
    // user.tel = isMobile ? '921-330-24-10' : '821 - 921....'
    // user.tel = isMobile > 100 ? '921-330-24-10' : '821 - 921....'
    //let links = this.pages,
    //links.classActive = links.link === this.$route.path ? 'active' : ''
    // return (links = this.pages
    //   .forEach(el
    //  => el.link === this.$route.path)
    //   .class: active)
    //}
    //   AddActiveClass() {
    //     console.log('bla bla')
    //     console.log(
    //       'computed: ',
    //       this.pages.forEach(el => {
    //         if (el.link === this.$route.path) return false
    //       })
    //     )
    //     return {
    //       active: this.pages.forEach(el => {
    //         if (el.link === this.$route.path) return false
    //       })
    //     }
    //   }
  },
  methods: {
    // addClassActive(item) {
    //   if (item.link === this.$route.path) return 'active'
    //   return ''
    // }
  }
}
</script>
