import { defineStore } from "pinia";

export const todoStore = defineStore("todoStore", {
  state: () => ({
    todos: [
      {
        id: 1,
        complete: false,
        text: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
      },
      {
        id: 2,
        complete: true,
        text: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
      },
    ],
  }),

  getters: {
    getTodos() {
      return this.todos;
    },
  },

  actions: {
    addTodo(todo) { },

    changeTodoStatus(todo) { },
  },
});
