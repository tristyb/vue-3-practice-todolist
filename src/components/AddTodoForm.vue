<template>
  <form @submit.prevent="addTodo">
    <input type="text" id="todo" name="todo" v-model="todoText" />
    <input type="submit" value="Add" />
  </form>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
