<template>
  <section class="gallery">
    <div class="row">
      <div v-for="character in characters" :key="character.id" class="col-md-3">
        <!-- gallery__card -->
        <div
          :class="{ 'gallery__card--season': $route.path === '/seasons' }"
          class="gallery__card"
        >
          <div
            class="gallery__img-wrap"
            :class="{ 'gallery__img-wrap--season': $route.path === '/seasons' }"
          >
            <img :src="character.imgSrc" alt="" class="gallery__img" />
          </div>
          <div v-if="$route.path === '/'" class="gallery__bottom">
            <h3 class="gallery__nick">nike {{ character.nickname }}</h3>
            <p class="gallery__name">name "{{ character.name }}"</p>
            <p class="gallery__date">birthday: {{ character.birthday }}</p>
          </div>
          <div v-else class="gallery__bottom gallery__bottom--season">
            <h3 class="gallery__nick">nike {{ character.title }}</h3>
            <p class="gallery__name">season {{ character.season }}</p>
            <p class="gallery__date">air date: {{ character.air_date }}</p>
          </div>
        </div>

        <!-- gallery__card END -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'gallery',
  props: {
    characters: {
      type: Array,
      required: true
    }
  },
  data() {
    return {}
  }
}
</script>
