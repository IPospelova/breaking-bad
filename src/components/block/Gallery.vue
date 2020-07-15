<template>
  <section class="gallery">
    <div class="row">
      <div v-for="character in characters" :key="character.id" class="col-md-3">
        <!-- gallery__card -->
        <div class="gallery__card">
          <div class="gallery__img-wrap">
            <img :src="character.imgSrc" alt="" class="gallery__img" />
          </div>
          <div class="gallery__bottom">
            <h3 class="gallery__nick">nike "{{ character.nike }}"</h3>
            <p class="gallery__name">name "{{ character.name }}"</p>
            <p class="gallery__date">birthday: {{ character.birthday }}</p>
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
  data() {
    return {
      characters: [
        {
          imgSrc:
            'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
          nike: 'Heisenberg1',
          name: 'Walter White1',
          birthday: '09-07-1955'
        },
        {
          imgSrc:
            'https://majdkhatib.com/wp-content/uploads/2018/03/Breaking-Bad-Walter-White1.jpg?x72778',
          nike: 'Heisenberg2',
          name: 'Walter White2',
          birthday: '09-07-1956'
        },
        {
          imgSrc:
            'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
          nike: 'Heisenberg3',
          name: 'Walter White3',
          birthday: '09-07-1957'
        },
        {
          imgSrc:
            'https://majdkhatib.com/wp-content/uploads/2018/03/Breaking-Bad-Walter-White1.jpg?x72778',
          nike: 'Heisenberg4',
          name: 'Walter White4',
          birthday: '09-07-1958'
        },
        {
          imgSrc:
            'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
          nike: 'Heisenberg5',
          name: 'Walter White5',
          birthday: '09-07-1959'
        }
      ],
      seasons: [
        {
          ingSrc:
            'https://img2.goodfon.ru/wallpaper/nbig/5/bf/breaking-bad-bryan-cranston-6290.jpg',
          title: 'season 1'
        },
        {
          ingSrc: 'https://images.vfl.ru/ii/1560181145/4c6d59be/26844233.jpg',
          title: 'season 2'
        },
        {
          ingSrc: 'https://region.center/source/VLADIMIR/2019/chp/64646.jpg',
          title: 'season 3'
        },
        {
          ingSrc:
            'https://a-static.besthdwallpaper.com/breaking-bad-4-tapet-800x1280-9580_198.jpg',
          title: 'season 4'
        },
        {
          ingSrc:
            'https://mediacritys.files.wordpress.com/2010/09/breaking62.jpg',
          title: 'season 5'
        }
      ]
    }
  }
}
</script>
