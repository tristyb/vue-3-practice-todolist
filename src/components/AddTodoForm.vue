<template>
  <form @submit.prevent="addTodo">
    <input type="text" id="todo" name="todo" v-model="todoText" />
    <input type="submit" value="Add" />
  </form>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const todoText = ref("");

    return {
      todoText,
    };
  },
};
</script>

<style lang="scss" scoped></style>
