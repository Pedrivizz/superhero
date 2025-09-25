<template>
  <pv-card class="card" aria-label="Superhero card">
    <img
        :src="hero.image.url"
        :alt="hero.name"
        class="card-image"
    />
    <div class="card-content">
      <p><strong>ID:</strong> {{ hero.id }}</p>
      <h2>{{ hero.name }}</h2>
      <p><strong>Name:</strong> {{ hero.name }}</p> <!-- segunda vez como piden -->
      <p><strong>{{ t.intelligence }}:</strong> {{ hero.powerstats.intelligence }}</p>
      <p><strong>{{ t.aliases }}:</strong> {{ hero.biography.aliases.join(', ') }}</p>
    </div>
  </pv-card>
</template>




<script>
export default {
  name: 'superhero-card',
  props: {
    hero: Object,
    t: Object
  },
  data() {
    return {
      showImage: true
    }
  },
  methods: {
    hideImage() {
      this.showImage = false
    }
  }
}


</script>

<style scoped>
.card {
  width: 300px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.card-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.card-content {
  padding: 1rem;
  word-break: break-word;
}

.card-content h2 {
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
}

.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
