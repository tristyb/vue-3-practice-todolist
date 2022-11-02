<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <Todo :todo="todo" />
    </li>
  </ul>
</template>

<script>
import Todo from "./Todo.vue";
import { computed } from "vue";
import { todoStore } from "../stores/todoStore";

export default {
  setup() {
    const store = todoStore();

    const todos = computed(() => {
      return store.getTodos;
    });

    return {
      Todo,
      todos,
    };
  },

  components: {
    Todo,
  },
};
</script>

<style lang="scss" scoped></style>
