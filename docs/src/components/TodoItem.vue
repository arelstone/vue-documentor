<template>
  <div>
    <h1>
      <span v-if="done">DONE!</span>
      <span v-else>NOT DONE!</span>
      {{item}}
    </h1>
  </div>
</template>

<script>
export default {
  name: "todo-item",
  introduction: "A single item of the todo list",
  description: "A component that displays a single todo item",
  token: '<todo item="Buy milk" :done="false"/>',
  props: {
    item: { type: String, required: true, note: "The todo item" },
    done: { type: Boolean, required: true, note: "Did you do this?" }
  }
};
</script>

<style scoped>

</style>
