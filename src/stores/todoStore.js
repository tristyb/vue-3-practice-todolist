import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";
import { useStorage } from "@vueuse/core";

export const todoStore = defineStore("todoStore", {
  state: () => ({
    todos: useStorage("todos", [
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
    ]),
  }),

  getters: {
    getTodos() {
      return this.todos.sort((a, b) => {
        return a.complete === b.complete ? 0 : a.complete ? 1 : -1;
      });
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

    changeTodoStatus(todoId) {
      const todo = this.todos.find((todo) => todo.id === todoId);
      todo.complete = !todo.complete;
    },
  },
});
