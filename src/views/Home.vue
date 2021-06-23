<template>
  <div class="bg-dark">
    <div class="flex">
      <!--main content-->
      <div class="w-full h-full relative overflow-y-scroll lg:h-screen">
        <!--cine-cards-->
        <div class="w-full flex flex-wrap">
          <MovieCard
            v-for="movie in recentMovies"
            :key="movie.imdbID"
            :movie="movie"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { $http } from "../main";
import MovieCard from "../components/movie/MovieCard.vue";
export default {
  name: "Home",
  components: { MovieCard },
  setup() {
    const recentMovies = ref([]);

    const getRecentMovies = async () => {
      // API key can be taken by user credential (bearer when the user logged in)
      // I threaded this is an public API.
      let config = { headers: { Accept: "application/json" } };
      const url = "http://www.omdbapi.com/?apikey=8735ef34&s=love&y=2021";
      const result = await $http.get(url, config);
      recentMovies.value = result.data.Search;
      console.log(recentMovies.value);
    };

    onMounted(() => {
      getRecentMovies();
    });

    return {
      recentMovies,
      getRecentMovies,
    };
  },
};
</script>
