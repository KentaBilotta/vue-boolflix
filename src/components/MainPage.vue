<template>
  <div>
    <h3 class="p-2">Movies</h3>
    <ul
      v-for="objMovie in arrPropsMovies"
      :key="objMovie.id"
      class="border border-success p-2"
    >
      <li>{{ objMovie.title }}</li>
      <li>{{ objMovie.original_title }}</li>
      <li><lang-flag :iso="objMovie.original_language" /></li>
      <li>{{ objMovie.vote_average}}</li>
    </ul>
    <h3 class="p-2">TV Series/Programs</h3>
    <ul
      v-for="objSeries in arrPropsSeries"
      :key="objSeries.id"
      class="border border-danger p-2">
      <li>{{ objSeries.name }}</li>
      <li>{{ objSeries.original_name }}</li>
      <li><lang-flag :iso="objSeries.original_language" /></li>
      <li>{{ objSeries.vote_average }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  props: {
    arrPropsMovies: Array,
    arrPropsSeries: Array,
  },
};
</script>

<style lang="scss">

</style>
