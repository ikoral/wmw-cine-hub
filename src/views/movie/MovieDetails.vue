<template>
  <h1>Movie Details</h1>
  <p>Film Id is: {{ id }}</p>
</template>

<script>
// I used here vue option API, still in use for small projects
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>
