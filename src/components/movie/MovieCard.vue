<template>
  <!-- In Home page card was hard coded.
In Search page ,I used this card component so I can reuse whenever is necessary  -->
  <div class="p-2 w-48">
    <div class="bg-light w-full h-full p-5">
      <img :src="movie.Poster" class="h-auto w-full shadow mb-2" />
      <h1 class="text-sm font-semibold text-white tracking-wide">
        {{ movie.Title }}
      </h1>
      <h2 class="text-ws text-lightest tracking-wide"></h2>
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
