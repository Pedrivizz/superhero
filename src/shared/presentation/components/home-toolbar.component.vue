<template>
  <pv-toolbar class="toolbar" aria-label="Main toolbar">
    <template #start>
      <h1 class="title">Superhero Comic</h1>
    </template>
  </pv-toolbar>
</template>

<script>
import Toolbar from 'primevue/toolbar'

export default {
  name: 'home-toolbar',
  components: {
    'pv-toolbar': Toolbar
  }
}
</script>

<style scoped>
.toolbar {
  background-color: #2c3e50;
  color: white;
  padding: 1rem;
}
.title {
  margin: 0;
  font-size: 1.5rem;
}
</style>
