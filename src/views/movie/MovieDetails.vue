<template>
  <h1>Movie Details</h1>
  <p>Film Id is: {{ id }}</p>
</template>

<script>
// I used here vue option API, still in use for small projects
export default {
  props: ["id"],

  //   Because in index.js router props activated, we don't need to return as data
  //   data() {
  //     return {
  //       id: this.$route.params.id,
  //     };
  //   },
};
</script>
