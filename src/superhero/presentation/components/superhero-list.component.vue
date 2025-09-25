<template>
  <transition-group name="fade" tag="div" class="card-grid" aria-label="Superhero list">
    <superhero-card
        v-for="hero in heroes"
        :key="hero.id"
        :hero="hero"
        :t="t"
    />

  </transition-group>
</template>


<script>
import SuperheroCard from './superhero-card.component.vue'

export default {
  name: 'superhero-list',
  props: {
    heroes: Array,
    t: Object // ← nuevo prop para traducciones
  },
  components: {
    SuperheroCard
  }
}


</script>



<style scoped>
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  padding: 2rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: scale(0.95);
}
.fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>

