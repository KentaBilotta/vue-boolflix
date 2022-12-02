<template>
  <div>
    <HeaderPage @queryChange="search"/>
    <MainPage :arrPropsMovies="arrMovies"/>
  </div>
</template>

<script>
import axios from 'axios';
import HeaderPage from '@/components/HeaderPage.vue';
import MainPage from '@/components/MainPage.vue';

export default {
  name: 'App',
  components: {
    HeaderPage,
    MainPage,
  },
  data() {
    return {
      baseAPI: 'https://api.themoviedb.org/3',
      apiKey: '44e341faf62d3533b7b19ef7bbfb15da',
      resultsLanguage: 'it-IT',
      arrMovies: [],
    };
  },
  methods: {
    search(queryString) {
      // chiamata axios all'url di ricerca
      // l'url e' suddiviso in (BASE_URL + END_POINT + (QUERY_STRING))
      axios.get(`${this.baseAPI}/search/movie`, {
        params: {
          api_key: this.apiKey,
          query: queryString,
          language: this.resultsLanguage,
        },
      })
        .then((axiosResponse) => {
          this.arrMovies = axiosResponse.data.results;
          console.log(this.arrMovies);
        });
    },
  },
};
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap";

</style>
