<template>
  <header>
    <a href="/">Tristan's Todos</a>
  </header>

  <main>
    <TodoList />
    <AddTodoForm />
  </main>
</template>

<script setup>
import AddTodoForm from "./components/AddTodoForm.vue";
import TodoList from "./components/TodoList.vue";
</script>

<style scoped></style>
