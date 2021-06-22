<template>
  <div class="m-6">
    <div>
      <input
        type="text"
        class="bg-white shadow text-xl rounded-md"
        v-model="searchTerm"
      />
      <button @click="searchMovie" class="btn">SEARCH</button>
    </div>

    <h2 class="mt-10 text-2xl font-semibold">Results</h2>

    <div>{{ moviesList }}</div>
  </div>
</template>

<script>
import { showSideBar, toggleSideBar } from "@/components/sidebar/side-state";
import { ref } from "vue";
export default {
  setup() {
    // wee need to use ref in Vue3 to make values reactive.
    const moviesList = ref([]);
    const searchTerm = ref("");

    const searchMovie = () => {
      //API key can/should be used in .env file, for simplicity added here.
      const url =
        "http://www.omdbapi.com/?apikey=8735ef34&s=" + searchTerm.value;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          moviesList.value = data;
        });
    };
    return {
      showSideBar,
      toggleSideBar,
      searchMovie,
      moviesList,
      searchTerm,
    };
  },
};
</script>
