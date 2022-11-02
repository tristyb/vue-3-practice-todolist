<template>
  <form @submit.prevent="addTodo">
    <input type="text" id="todo" name="todo" v-model="todoText" />
    <input type="submit" value="Add" />
  </form>
</template>

<script>
import { ref } from "vue";
import { todoStore } from "../stores/todoStore";

export default {
  setup() {
    const todoText = ref("");
    const store = todoStore();

    function addTodo() {
      store.addTodo(todoText.value);
    }

    return {
      todoText,
      addTodo,
    };
  },
};
</script>

<style lang="scss" scoped></style>
