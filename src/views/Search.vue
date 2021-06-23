<template>
  <div class="m-6 text-center">
    <div>
      <input
        type="text"
        class="bg-white shadow text-xl p-1 rounded-md"
        v-model="searchTerm"
      />
      <button @click="searchMovie" class="btn">SEARCH</button>
    </div>

    <h2 class="mt-10 text-2xl font-semibold">Results</h2>

    <div class="w-full flex flex-wrap">
      <MovieCard
        v-for="movie in moviesList"
        :key="movie.imdbID"
        :movie="movie"
      />
    </div>
  </div>
</template>

<script>
import { showSideBar, toggleSideBar } from "@/components/sidebar/side-state";
import { ref } from "vue";
import MovieCard from "../components/movie/MovieCard.vue";
export default {
  components: { MovieCard },
  setup() {
    // INFO wee need to use ref in Vue3 to make values reactive.
    const moviesList = ref([]);
    const searchTerm = ref("");

    const searchMovie = () => {
      //API key can/should be used in .env file, for simplicity added here.
      const url =
        "http://www.omdbapi.com/?apikey=8735ef34&s=" + searchTerm.value;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          moviesList.value = data.Search;
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
