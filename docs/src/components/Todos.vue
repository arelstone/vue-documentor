<template>
  <div>
    <todo-item v-for="todo in todos" 
              :key="todo.id" 
              :item="todo.todo"
              :done="todo.done"/>
  </div>
</template>

<script>
import TodoItem from './TodoItem'

export default {
  name: 'todos',
  introduction: 'Display a collection of todos',
  description: 'Loops thru a collection of todos and displays them using the todo-item component',
  token: '<todos :todos="[{todo: "Buy milk", done: false}, {todo: "Buy butter, done: true}]" />',
  props: {
      todos: {type: Array, requirred: true, note: 'A collection of todos'}
  },
  components: {TodoItem}
}
</script>

