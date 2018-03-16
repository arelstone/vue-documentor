<template>
    <div id="component-list">
        <h3>Components</h3>
        <ul>
            <li>
                <router-link to="/documentor">All components</router-link>
            </li>
            <li v-for="component in components">
                <router-link :to="`/documentor/${component.name}`">{{component.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'component-list',
    introduction: '',
    description: '',
    token: '',
    props: {
      components: {type: Array, required: true}
    }
  }
</script>

<style scoped lang="scss">

</style>