<template>
    <div id="component-b">
        ...
    </div>
</template>

<script>
  export default {
    name: 'component-b',
    introduction: 'This is component B',
    description: 'Description for ComponentB',
    token: '<component-b text="Hello from ComponentB.vue" int="42" />',
    props: {
      text: {type: String, required: true, note: 'A string passed as props'},
      int: {type: Number, default: 42, note: 'A integer passed as props'},
      arr: {type: Array, note: 'A array passed as props'},
      obj: {type: Object, note: 'A object passed as props'}
    }
  }
</script>

<style scoped lang="scss">

</style>