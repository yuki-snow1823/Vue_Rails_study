<template>
  <div>
    <AddTodo @submit="addTodo" />
    <TodoList :todos="todos" />
    <!-- おそらくここで表示をさせている -->
  </div>
</template>

<script>
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import axios from 'axios';

export default {
  components: {
    AddTodo,
    TodoList
  },
  created() {
    console.log("API_KEY:", process.env.API_KEY);  //<= これ追加
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    addTodo(title) {
      this.todos.push({
        title
      });
    }
  }
};
</script>

<style>
</style>
