<template>
    <div>
        <h3>Example</h3>
        <pre>
            <code class="html">{{token}}</code>
        </pre>
    </div>
</template>

<script>
  export default {
    name: 'example',
    introduction: '',
    description: '',
    token: '',
    props: {
      token: {type: String, required: true}
    }
  }
</script>

<style scoped lang="scss">

</style>