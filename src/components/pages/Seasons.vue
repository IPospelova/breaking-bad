<template>
  <div id="app">
    <top-nav class="bor-b"></top-nav>
    <div class="row">
      <div class="col-md-3">
        <sidebar></sidebar>
      </div>
      <div class="col-md-9">
        <h2 class="title">Seasons</h2>
        <button class="btn" @click="filter = 'Krazy-8'">Krazy-8</button>
        <button class="btn" @click="filter = '03-09-2008'">
          03-09-2008
        </button>
        <button class="btn" @click="filter = 'oddId'">
          odd id
        </button>
        <gallery :characters="filtredListByStatus"></gallery>
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
  },
  data() {
    return {
      filter: '',
      seasons: [
        {
          episode_id: 1,
          title: 'Pilot',
          season: '1',
          air_date: '01-20-2008',
          characters: [
            'Walter White',
            'Jesse Pinkman',
            'Skyler White',
            'Hank Schrader',
            'Marie Schrader',
            'Walter White Jr.',
            'Krazy-8',
            'Bogdan Wolynetz'
          ],
          episode: '1',
          series: 'Breaking Bad',
          imgSrc:
            'https://m.media-amazon.com/images/M/MV5BNTZlMGY1OWItZWJiMy00MTZlLThhMGItNDQ2ODM3YzNkOWU5XkEyXkFqcGdeQXVyNzgyOTQ4MDc@._V1_UY126_UX224_AL_.jpg'
        },
        {
          episode_id: 2,
          title: "Cat's in the Bag...",
          season: '1',
          air_date: '01-27-2008',
          characters: [
            'Walter White',
            'Jesse Pinkman',
            'Skyler White',
            'Walter White Jr.',
            'Krazy-8'
          ],
          episode: '2',
          series: 'Breaking Bad',
          imgSrc:
            'https://m.media-amazon.com/images/M/MV5BNmI5MTU3OTAtYTczMC00MDE5LTg3YjMtMjA3NWEyMmYyZWQwXkEyXkFqcGdeQXVyNjk1MzkzMzM@._V1_UX224_CR0,0,224,126_AL_.jpg'
        },
        {
          episode_id: 3,
          title: "...And the Bag's in the River",
          season: '1',
          air_date: '02-10-2008',
          characters: [
            'Walter White',
            'Jesse Pinkman',
            'Skyler White',
            'Hank Schrader',
            'Marie Schrader',
            'Walter White Jr.',
            'Krazy-8',
            'Gretchen Schwartz'
          ],
          episode: '3',
          series: 'Breaking Bad',
          imgSrc:
            'https://m.media-amazon.com/images/M/MV5BMjM0Mjc0NjI0NV5BMl5BanBnXkFtZTgwMDg2MDU5NTM@._V1_UX224_CR0,0,224,126_AL_.jpg'
        },
        {
          episode_id: 4,
          title: 'Cancer Man',
          season: '1',
          air_date: '02-17-2008',
          characters: [
            'Walter White',
            'Jesse Pinkman',
            'Skyler White',
            'Hank Schrader',
            'Marie Schrader',
            'Walter White Jr.',
            'Ken Wins'
          ],
          episode: '4',
          series: 'Breaking Bad',
          imgSrc:
            'https://m.media-amazon.com/images/M/MV5BMjM0Mjc0NjI0NV5BMl5BanBnXkFtZTgwMDg2MDU5NTM@._V1_UX224_CR0,0,224,126_AL_.jpg'
        },
        {
          episode_id: 5,
          title: 'Gray Matter',
          season: '1',
          air_date: '02-24-2008',
          characters: [
            'Walter White',
            'Jesse Pinkman',
            'Skyler White',
            'Hank Schrader',
            'Marie Schrader',
            'Walter White Jr.',
            'Elliott Schwarts',
            'Gretchen Swartz',
            'Badger'
          ],
          episode: '5',
          series: 'Breaking Bad',
          imgSrc:
            'https://m.media-amazon.com/images/M/MV5BNTgwOTE0ODYtMDEwNC00MjY1LWJjZDctNTU2MjRlNTgzY2NkXkEyXkFqcGdeQXVyNjg0Nzk2Nzc@._V1_UY126_UX224_AL_.jpg'
        },
        {
          episode_id: 6,
          title: 'Crazy Handful of Nothin',
          season: '1',
          air_date: '03-02-2008',
          characters: [
            'Walter White',
            'Jesse Pinkman',
            'Skyler White',
            'Hank Schrader',
            'Marie Schrader',
            'Walter White Jr.',
            'Tuco Salamanca'
          ],
          episode: '6',
          series: 'Breaking Bad',
          imgSrc:
            'https://m.media-amazon.com/images/M/MV5BOGU0YTA2ZGItNDFjNi00NWM1LTk5NzAtYjFkYTk2MzFhY2YyXkEyXkFqcGdeQXVyNjc0NTIwNTU@._V1_UX224_CR0,0,224,126_AL_.jpg'
        },
        {
          episode_id: 7,
          title: 'A No-Rough-Stuff-Type Deal',
          season: ' 1',
          air_date: '03-09-2008',
          characters: [
            'Walter White',
            'Jesse Pinkman',
            'Skyler White',
            'Hank Schrader',
            'Marie Schrader',
            'Walter White Jr.',
            'Tuco Salamanca'
          ],
          episode: '7',
          series: 'Breaking Bad',
          imgSrc:
            'https://m.media-amazon.com/images/M/MV5BNzM1OTA1NzgxOV5BMl5BanBnXkFtZTgwMjg2MDU5NTM@._V1_UX224_CR0,0,224,126_AL_.jpg'
        },
        {
          episode_id: 8,
          title: 'Seven-Thirty-Seven',
          season: '2',
          air_date: '03-08-2009',
          characters: [
            'Walter White',
            'Jesse Pinkman',
            'Skyler White',
            'Hank Schrader',
            'Marie Schrader',
            'Walter White Jr.',
            'Tuco Salamanca'
          ],
          episode: '1',
          series: 'Breaking Bad',
          imgSrc:
            'https://m.media-amazon.com/images/M/MV5BMjEwNjk4MTI2MF5BMl5BanBnXkFtZTcwMTIzMTMzMg@@._V1_UX224_CR0,0,224,126_AL_.jpg'
        },
        {
          episode_id: 9,
          title: 'Grilled',
          season: '2',
          air_date: '03-15-2009',
          characters: [
            'Walter White',
            'Jesse Pinkman',
            'Skyler White',
            'Hank Schrader',
            'Marie Schrader',
            'Walter White Jr.',
            'Tuco Salamanca',
            'Hector Salamanca'
          ],
          episode: '2',
          series: 'Breaking Bad',
          imgSrc:
            'https://m.media-amazon.com/images/M/MV5BZjAyYmJlMWQtYjg0Zi00NjBiLTg1ZGUtMDRiZjcwMjY1NzM2XkEyXkFqcGdeQXVyNjg0Nzk2Nzc@._V1_UX224_CR0,0,224,126_AL_.jpg'
        },
        {
          episode_id: 10,
          title: 'Bit by a Dead Bee',
          season: '2',
          air_date: '03-22-2009',
          characters: [
            'Walter White',
            'Jesse Pinkman',
            'Skyler White',
            'Hank Schrader',
            'Marie Schrader',
            'Walter White Jr.',
            'Hector Salamanca'
          ],
          episode: '3',
          series: 'Breaking Bad',
          imgSrc:
            'https://m.media-amazon.com/images/M/MV5BNzA5OWQxM2MtNzI0ZS00NWI4LWJmYWEtNjA3ODJmMzUzMzFmXkEyXkFqcGdeQXVyNjE0NDg1MDg@._V1_UX224_CR0,0,224,126_AL_.jpg'
        },
        {
          episode_id: 11,
          title: 'Down',
          season: '2',
          air_date: '03-29-2009',
          characters: [
            'Walter White',
            'Jesse Pinkman',
            'Skyler White',
            'Walter White Jr.'
          ],
          episode: '4',
          series: 'Breaking Bad',
          imgSrc:
            'https://m.media-amazon.com/images/M/MV5BMjI0NzA3MDc0MF5BMl5BanBnXkFtZTgwMTE4OTc5MjE@._V1_UX224_CR0,0,224,126_AL_.jpg'
        },
        {
          episode_id: 12,
          title: 'Breakage',
          season: '2',
          air_date: '04-05-2009',
          characters: [
            'Walter White',
            'Jesse Pinkman',
            'Skyler White',
            'Hank Schrader',
            'Marie Schrader',
            'Walter White Jr.',
            'Jane Margolis',
            'Badger'
          ],
          episode: '5',
          series: 'Breaking Bad',
          imgSrc:
            'https://m.media-amazon.com/images/M/MV5BMjIwOTg0MDU2MV5BMl5BanBnXkFtZTcwNjE2NTc0Mg@@._V1_UX224_CR0,0,224,126_AL_.jpg'
        },
        {
          episode_id: 13,
          title: 'Peekaboo',
          season: '2',
          air_date: '04-12-2009',
          characters: [
            'Walter White',
            'Jesse Pinkman',
            'Skyler White',
            'Marie Schrader',
            'Walter White Jr.',
            'Gretchen Schwartz'
          ],
          episode: '6',
          series: 'Breaking Bad',
          imgSrc:
            'https://m.media-amazon.com/images/M/MV5BMTk0NjI4NTYwOV5BMl5BanBnXkFtZTgwOTc2MDU5NTM@._V1_UX224_CR0,0,224,126_AL_.jpg'
        },
        {
          episode_id: 14,
          title: 'Negro y Azul',
          season: '2',
          air_date: '04-19-2009',
          characters: [
            'Walter White',
            'Jesse Pinkman',
            'Skyler White',
            'Hank Schrader',
            'Marie Schrader',
            'Walter White Jr.',
            'Tortuga',
            'Jane Margolis',
            'Ted Beneke'
          ],
          episode: '7',
          series: 'Breaking Bad',
          imgSrc:
            'https://m.media-amazon.com/images/M/MV5BYTBkYjQxOTQtOWNlNC00YmMxLWJlY2EtN2ZhNDBkYjc5OWU3XkEyXkFqcGdeQXVyNjE0NDg1MDg@._V1_UY126_CR1,0,224,126_AL_.jpg'
        },
        {
          episode_id: 15,
          title: 'Better Call Saul',
          season: '2',
          air_date: '04-26-2009',
          characters: [
            'Walter White',
            'Jesse Pinkman',
            'Skyler White',
            'Hank Schrader',
            'Marie Schrader',
            'Saul Goodman',
            'Jane Margolis',
            'Badger'
          ],
          episode: '8',
          series: 'Breaking Bad',
          imgSrc:
            'https://m.media-amazon.com/images/M/MV5BMTk1MTI3NjY1Ml5BMl5BanBnXkFtZTgwMTk2MDU5NTM@._V1_UX224_CR0,0,224,126_AL_.jpg'
        }
      ]
    }
  },
  computed: {
    // filtredListByStatus() {
    //   if (this.filter === '') return this.characters
    //   return this.filterByStatus(this.characters, this.filter)
    // }
    filtredListByStatus() {
      if (this.filter === '') return this.seasons
      if (this.filter === 'Krazy-8') return this.filterByKrazy(this.seasons)
      if (this.filter === '03-09-2008') return this.sortByDate(this.seasons)
      if (this.filter === 'oddId') return this.sortById(this.seasons)
      return this.seasons
    }
  },
  methods: {
    filterByKrazy(list) {
      return list.filter(el => el.characters.includes('Krazy-8'))
    },
    sortByDate(list) {
      return list.filter(el => new Date(el.air_date) > new Date('03-09-2008'))
    },
    sortById(list) {
      return list.filter(el => el.episode_id % 2 != 0)
    }
  }
}
</script>
