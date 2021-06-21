<template>
  <div class="m-6">
    <div>
      <input
        type="text"
        class="bg-white shadow text-xl rounded-md"
        v-model="serachTerm"
      />
      <button @click="searchMovie" class="btn">SEARCH</button>
    </div>

    <h2 class="mt-10 text-2xl font-semibold">Results</h2>
    <div>{{ moviesList }}</div>
  </div>
</template>

<script>
import { showSideBar, toggleSideBar } from "@/components/sidebar/side-state";
export default {
  setup() {
    let moviesList = [];
    let serachTerm = "";
    const searchMovie = () => {
      //API key can/should be used in .env file, for simplicity added here.
      const url = "http://www.omdbapi.com/?apikey=8735ef34&s=" + serachTerm;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          moviesList = data;
        });
    };
    return { showSideBar, toggleSideBar, searchMovie, moviesList };
  },
};
</script>
