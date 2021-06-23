<template>
  <div v-if="movieFullInfo" class="flex flex-col w-full mx-auto my-4 p-4">
    <div class="flex">
      <MovieCard :movie="movieCardInfo" />
    </div>
    <h1>Movie Details</h1>
    <p>Film Id is: {{ id }}</p>
    <p>{{ movieFullInfo }}</p>
  </div>
</template>

<script>
import MovieCard from "../../components/movie/MovieCard.vue";
// INFO: used here vue option API, still in use for small projects
export default {
  name: "MovieDetails",
  components: { MovieCard },
  props: ["id"],

  // API key can be taken by user credential (bearer when the user logged in)
  // I threaded this is an public API.
  data() {
    return {
      movieFullInfo: null,
      URL: "http://www.omdbapi.com/?apikey=8735ef34&i=",
    };
  },

  // INFO: Because in index.js router props activated, we don't need to return as data
  //   data() {
  //     return {
  //       id: this.$route.params.id,
  //     };
  //   },

  mounted() {
    fetch(this.URL + this.id)
      .then((res) => res.json())
      .then((data) => (this.movieFullInfo = data))
      .catch((err) => console.log(err.message));
  },

  computed: {
    movieCardInfo() {
      const infoForCard = {
        Title: this.movieFullInfo.Title,
        Year: this.movieFullInfo.Year,
        imdbID: this.id,
        Type: this.movieFullInfo.Type,
        Poster: this.movieFullInfo.Poster,
      };
      return infoForCard;
    },
  },
};
</script>
