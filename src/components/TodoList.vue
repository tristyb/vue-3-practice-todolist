<template>
  <ul>
    <li>
      <Todo />
    </li>
  </ul>
</template>

<script>
import Todo from "./Todo.vue";

export default {
  setup() {
    return {
      Todo,
    };
  },
};
</script>

<style lang="scss" scoped></style>
