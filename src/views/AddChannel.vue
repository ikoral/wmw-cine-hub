<template>
  <div class="my-6 sm:mx-auto mx-2 text-center relative max-w-md">
    <input
      class="w-full p-4 border rounded-md mb-6"
      type="text"
      v-model="newChannel"
      @keypress.enter="addChannel"
      placeholder="Add a new subscription channel..."
    />
    <div>
      <ul class="relative">
        <li
          class="mb-2 p-2 bg-white shadow-lg border rounded-md w-full"
          v-for="channel in channels"
          :key="channel.id"
          @click="deleteTodo(channel.id)"
        >
          {{ channel.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const channels = ref([
      { id: 1, title: "wmw-core" },
      { id: 2, title: "star wars" },
    ]);
    const newChannel = ref("");

    const addChannel = () => {
      //Let the application add maximum five channels
      if (channels.value.length >= 5) {
        newChannel.value = "";
        return;
      }
      if (newChannel.value) {
        const id = Math.random();
        channels.value = [{ id, title: newChannel.value }, ...channels.value];
        newChannel.value = "";
      }
    };

    const deleteChannel = (id) => {
      channels.value = channels.value.filter((channel) => channel.id != id);
    };

    return { channels, newChannel, addChannel, deleteChannel };
  },
};
</script>
