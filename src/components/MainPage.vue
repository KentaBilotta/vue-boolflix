<template>
  <div class="bg-dark text-white p-3 cont">
    <h3 class="p-2">Movies</h3>
    <div class="movies d-flex">
      <div
        v-for="objMovie in arrPropsMovies"
        :key="objMovie.id"
        class="m-1 position-relative"
      >
        <div class="img bg-divght">
          <img
            :src="`http://image.tmdb.org/t/p/w342${objMovie.backdrop_path}`"
            :alt="objMovie.title"
          >
        </div>
      <div class="info position-absolute top-0 start-0 p-1 overview">
          <div>
          <span class="fw-bold">Titolo:</span>
          <span class="mx-1">{{ objMovie.title }}</span>
        </div>
        <div>
          <span class="fw-bold">Titolo Originale:</span>
          <span class="mx-1">{{ objMovie.original_title }}</span>
        </div>
        <div>
          <span class="fw-bold">Lingua:</span>
          <span class="mx-1"><lang-flag :iso="objMovie.original_language" /></span>
        </div>
        <div class="votes d-flex">
          <span class="fw-bold">Voto:</span>
            <div class="d-flex">
              <div
                v-for="i in convertScore(objMovie.vote_average)"
                :key="i"
              >
                <font-awesome-icon icon="fa-solid fa-star" class="mx-1" style="color: yellow;"/>
              </div>
            </div>
        </div>
        <div>
          <span class="fw-bold">Overview:</span>
          <span class="mx-1">{{ objMovie.overview }}</span>
        </div>
      </div>
      </div>
    </div>
    <h3 class="p-2">TV Shows</h3>
    <div class="tv-shows d-flex">
      <div
        v-for="objSeries in arrPropsSeries"
        :key="objSeries.id"
        class="m-1 position-relative"
      >
        <div class="img bg-light">
          <img
            :src="`http://image.tmdb.org/t/p/w342${objSeries.backdrop_path}`"
            :alt="objSeries.name"
          >
        </div>
      <div class="info position-absolute top-0 start-0 p-1 overview">
          <div>
          <span class="fw-bold">Titolo:</span>
          <span class="mx-1">{{ objSeries.title }}</span>
        </div>
        <div>
          <span class="fw-bold">Titolo Originale:</span>
          <span class="mx-1">{{ objSeries.original_title }}</span>
        </div>
        <div>
          <span class="fw-bold">Lingua:</span>
          <span class="mx-1"><lang-flag :iso="objSeries.original_language" /></span>
        </div>
        <div class="votes d-flex">
          <span class="fw-bold">Voto:</span>
            <div class="d-flex">
              <div
                v-for="i in convertScore(objSeries.vote_average)"
                :key="i"
              >
                <font-awesome-icon icon="fa-solid fa-star" class="mx-1" style="color: yellow;"/>
              </div>
            </div>
        </div>
        <div>
          <span class="fw-bold">Overview:</span>
          <span class="mx-1">{{ objSeries.overview }}</span>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  props: {
    arrPropsMovies: Array,
    arrPropsSeries: Array,
  },
  methods: {
    convertScore(score) {
      // score : 10 = stelle : 5, stelle = (score * 5) / 10;
      return Math.round((score * 5) / 10);
    },
  },
};
</script>

<style lang="scss">
  .movies, .tv-shows{
    overflow-x: scroll;
  }
  .movies::-webkit-scrollbar, .tv-shows::-webkit-scrollbar {
    display: none;
  }
  .img, .info{
    width: 342px;
    height: 192px;
  }
  .info{
    opacity: 0;
    &:hover{
      opacity: 1;
      background-color: black;
    }
  }
  .overview{
    overflow-y: scroll;
  }
  .overview::-webkit-scrollbar{
    display: none;
  }
</style>
