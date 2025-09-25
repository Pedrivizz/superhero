<template>
  <div class="layout-container surface-100 min-h-screen flex flex-column">
    <home-toolbar />

    <section class="search-section surface-100 p-3 border-round mb-3">
      <input
          v-model="searchTerm"
          @keyup.enter="searchHero"
          :placeholder="t.searchPlaceholder"
          aria-label="Search input"
          class="pv-input"
      />
      <button @click="searchHero" class="pv-button">{{ t.searchButton }}</button>
    </section>

    <main class="comic-view surface-0 p-4 border-round">
      <superhero-list :heroes="heroes" :t="t" />
      <p v-if="error" class="error-message">{{ t.errorMessage }}</p>
      <p v-else-if="heroes.length === 0" class="no-results">{{ t.noResults }}</p>
    </main>

    <home-footer />
  </div>
</template>


<script>
import HomeToolbar from './shared/presentation/components/home-toolbar.component.vue'
import HomeFooter from './shared/presentation/components/home-footer.component.vue'
import SuperheroList from './superhero/presentation/components/superhero-list.component.vue'
import { fetchSuperheroByName } from './superhero/infrastructure/superhero.api.js'
import { mapSuperheroData } from './superhero/domain/model/superhero.entity.js'
import en from './locales/en.json'
import es from './locales/es.json'

export default {
  name: 'App',
  components: {
    HomeToolbar,
    HomeFooter,
    SuperheroList
  },
  data() {
    return {
      searchTerm: 'Batman',
      heroes: [],
      error: false,
      lang: 'en',
      translations: {
        en,
        es
      }
    }
  },
  computed: {
    t() {
      return this.translations[this.lang]
    }
  },
  async mounted() {
    await this.searchHero()
  },
  methods: {
    async searchHero() {
      this.error = false
      const rawData = await fetchSuperheroByName(this.searchTerm)
      if (!rawData || rawData.response !== 'success') {
        this.heroes = []
        this.error = true
        return
      }
      this.heroes = mapSuperheroData(rawData)

    },
    switchLang() {
      this.lang = this.lang === 'en' ? 'es' : 'en'
    }
  }
}
</script>

<style scoped>
.search-section {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
}
.pv-input {
  padding: 0.5rem;
  width: 250px;
}
.pv-button {
  padding: 0.5rem 1rem;
}
.comic-view {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.error-message {
  color: red;
  font-weight: bold;
  margin-top: 2rem;
}
.no-results {
  font-weight: bold;
  margin-top: 2rem;
}

.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f4f4f4;
}

.search-section {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  max-width: 700px;
  margin: 2rem auto;
}

.comic-view {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
}


.pv-input {
  padding: 0.5rem;
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.pv-button {
  padding: 0.5rem 1rem;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.pv-button:hover {
  background-color: #1a252f;
}


.error-message,
.no-results {
  color: #e74c3c;
  font-weight: bold;
  margin-top: 2rem;
}

footer {
  padding: 1rem;
  text-align: center;
  background-color: #eee;
}


</style>


