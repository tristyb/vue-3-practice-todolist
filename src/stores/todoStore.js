import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

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
    addTodo(todoText) {
      this.todos.push({
        id: uuidv4(),
        complete: false,
        text: todoText,
      });
    },

    changeTodoStatus(todo) { },
  },
});
