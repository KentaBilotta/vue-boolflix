<template>
  <div>
    <header class="bg-dark p-2 d-flex justify-content-around align-items-center">
      <h1 class="text-uppercase text-danger fw-bold">boolflix</h1>
      <form @submit.prevent="$emit('queryChange', queryString)">
        <label for="search">
          <input type="text" id="search" class="p-1" v-model="queryString">
          <button class="p-1 rounded">Search</button>
        </label>
      </form>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderPage',
  data() {
    return {
      queryString: '',
    };
  },
};
</script>

<style lang="scss">

</style>
