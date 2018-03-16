<template>
    <div id="doc-view">
        <component-list :components="components"
                        id="component-list"/>
        <div id="component-view">
            <router-view v-if="$route.name !== 'documentor'"/>
            <doc-item v-else
                      v-for="component in components"
                      :key="component.name"
                      :component="component"/>
        </div>
    </div>
</template>

<script>
  import DocItem from './components/DocItem'
  import ComponentList from './components/ComponentList'

  export default {
    name: 'documentor',
    introduction: '',
    description: '',
    token: '',
    props: {
      components: {type: Array, required: true}
    },
    components: {DocItem, ComponentList}
  }
</script>

<style lang="scss" scoped>
   @import "./style/theme";

</style>