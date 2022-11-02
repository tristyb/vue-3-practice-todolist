<template>
  <input
    type="checkbox"
    :id="`todo-${todo.id}`"
    name="complete"
    :checked="todo.complete"
    @change="toggleTodo(todo.id)"
  />
  <label :for="`todo-${todo.id}`">{{ todo.text }}</label>
</template>

<script>
import { todoStore } from "../stores/todoStore";

export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const store = todoStore();
    const toggleTodo = store.changeTodoStatus;

    return {
      toggleTodo,
    };
  },
};
</script>

<style lang="scss" scoped></style>
