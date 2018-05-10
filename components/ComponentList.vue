<template>
    <div id="component-list">
        <ul>
            <li>
                <input type="text"
                    v-model="filter"
                    class="form-control"
                    placeholder="Filter by component name" />
            </li>
            <li>
                <router-link :to="uri"><b>All components</b></router-link>
            </li>
            <li v-for="component in inputFilter" 
              :key="component.name"
              class="component--item">
                <router-link :to="`${uri}/${component.name}`">{{component.name}}</router-link>
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
    components: { type: Array, required: true },
    uri: { type: String, required: true }
  },
  data () {
    return {
      filter: ''
    }
  },
  computed: {
    inputFilter () {
      return (
        (this.filter &&
          this.components.filter(component =>
            component.name.includes(this.filter)
          )) ||
        this.components
      )
    }
  }
}
</script>

<style scoped lang="scss">
input.form-control {
  width: 100%;
  font-size: 12px;
  padding: 5px 7px;
}
</style>