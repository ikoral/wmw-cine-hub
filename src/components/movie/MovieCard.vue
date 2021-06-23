<template>
  <!-- In Home page card was hard coded.
In Search page ,I used this card component so I can reuse whenever is necessary  -->
  <div class="p-2 w-48">
    <div class="bg-light w-full h-full p-5 relative">
      <img :src="movie.Poster" class="h-auto w-full shadow mb-2" />

      <h1 class="text-sm font-semibold text-white tracking-wide mb-4">
        {{ movie.Title }}
      </h1>

      <router-link :to="{ name: 'MovieDetails', params: { id: movie.imdbID } }">
        <h2
          class="
            text-ws text-lightest
            tracking-wide
            rounded-md
            bg-gray-600
            text-center
            bottom-0
            px-6
            m-auto
            mb-2
            absolute
          "
        >
          {{ movie.imdbID }}
        </h2>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: { type: Object, required: true },
  },
  setup() {},
};
</script>

<style></style>
