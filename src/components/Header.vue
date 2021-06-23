<template>
  <!--header-->
  <div class="bg-gradient-to-l from-dark to to-gray-600">
    <div
      class="w-full py-2 px-6 flex items-center justify-between sticky top-0"
    >
      <!--arrow buttons-->
      <div class="flex items-center">
        <button
          @click="back"
          class="
            rounded-full
            bg-black
            w-8
            h-8
            mr-3
            text-white
            focus:outline-none
          "
        >
          <i class="fas fa-angle-left text-2xl"></i>
        </button>
        <button
          @click="forward"
          class="rounded-full bg-black w-8 h-8 text-white focus:outline-none"
        >
          <i class="fas fa-angle-right text-2xl"></i>
        </button>
      </div>

      <!--user profile-->
      <div class="relative">
        <button
          class="
            bg-light
            rounded-full
            p-1
            px-2
            flex
            items-center
            focus:outline-none
          "
        >
          <img src="../assets/logo.jpg" class="h-6 w-6 rounded-full mr-2" />
          <p class="text-white font-semibold text-xs mr-3">admin wmw</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    forward() {
      this.$router.go(+1);
    },
    back() {
      this.$router.go(-1);
    },
    toSomewhere() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
