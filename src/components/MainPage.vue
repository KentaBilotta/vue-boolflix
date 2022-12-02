<template>
  <div>
    <ul v-for="objMovie in arrPropsMovies" :key="objMovie.id" class="border border-success p-2">
      <li>{{ objMovie.title }}</li>
      <li>{{ objMovie.original_title }}</li>
      <li>{{ objMovie.original_language }}</li>
      <li>{{ objMovie.vote_average}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  props: {
    arrPropsMovies: Array,
  },
};
</script>

<style lang="scss">

</style>
