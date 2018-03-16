<template>
    <div id="component-a">
        component a
        ...
    </div>
</template>

<script>
  export default {
    name: 'component-a',
    introduction: 'This is component A',
    description: 'Description for ComponentA',
    token: '<component-a text="Hello from ComponentA.vue" />',
    props: {
      sayWhat: {type: String, required: true},
      object: {type: Number, required: true, note: 'Some object that you would like to pass'}
    }
  }
</script>

<style scoped lang="scss">

</style>