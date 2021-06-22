<template>
  <div class="bg-dark">
    <div class="flex">
      <!--main content-->
      <div class="w-full h-full relative overflow-y-scroll lg:h-screen">
        <!--header-->
        <div
          class="
            w-full
            sticky
            top-0
            py-2
            px-6
            flex
            items-center
            justify-between
          "
        >
          <!--arrow buttons-->
          <div class="flex items-center">
            <button
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
              class="
                rounded-full
                bg-black
                w-8
                h-8
                text-white
                focus:outline-none
              "
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
              <img src="../assets/logo.png" class="h-6 w-6 rounded-full mr-2" />
              <p class="text-white font-semibold text-xs mr-3">admin wmw</p>
            </button>
          </div>
        </div>

        <!--cine-cards-->
        <!--This card hard coded here on purpose,
        I made it component as well please search link-->
        <div>
          <div class="px-6 py-3 flex items-center justify-between">
            <h1
              class="
                text-2xl
                font-semibold
                text-white
                tracking-wider
                hover:underline
                pl-2
                w-full
              "
            >
              Recently Added
            </h1>
            <h2 class="pr-8 pt-4 text-xs text-lightest tracking-wider mb-3">
              NEW
            </h2>
          </div>
          <div class="w-full flex flex-wrap">
            <div
              v-for="recent in recentMovies"
              :key="recent.imdbID"
              class="p-2 w-48"
            >
              <div class="bg-light w-full h-full p-4">
                <img :src="recent.Poster" class="h-auto w-full shadow mb-2" />
                <h1 class="text-sm font-semibold text-white tracking-wide">
                  {{ recent.Title }}
                </h1>
                <h2 class="text-xs text-lightest tracking-wide mt-2">
                  {{ recent.imdbID }}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { $http } from "../main";
export default {
  name: "Home",
  components: {},
  setup() {
    const recentMovies = ref([]);

    const getRecentMovies = async () => {
      //API key can/should be used in .env file, for simplicity added here.
      let config = { headers: { Accept: "application/json" } };
      const url = "http://www.omdbapi.com/?apikey=8735ef34&s=love&y=2021";
      const result = await $http.get(url, config);
      recentMovies.value = result.data.Search;
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
