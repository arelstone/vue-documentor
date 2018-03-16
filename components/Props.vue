<template>
    <div class="props">
        <div class="props--row header">
            <div class="props--cell name">Prop</div>
            <div class="props--cell type">Type</div>
            <div class="props--cell value">Default value</div>
            <div class="props--cell description">Description</div>
        </div>
        <div v-for="prop in getProps" class="props--row">
            <div class="props--cell name"><b v-if="prop.required">*</b>{{prop.key}}</div>
            <div class="props--cell type">{{prop.type}}</div>
            <div class="props--cell value">{{prop.default}}</div>
            <div class="props--cell description"><b v-if="prop.required">Required!</b><span v-else>Optional!</span>
                {{prop.note}}
            </div>
        </div>
    </div>
</template>

<script>

  export default {
    name: 'props',
    introduction: '',
    description: '',
    token: '',
    props: {component: {type: Object, required: true}},
    methods: {
      getPropType (type) {
        if (typeof type === 'function') {
          return type.name
        }
        return type
      },
      getDefaultValue (value) {
        if (typeof value === 'undefined') {
          return 'Not set'
        } else if (typeof value === 'string' && value.length === 0) {
          return '""'
        }
        return value
      }
    },
    computed: {
      getProps () {
        return Object.keys(this.component.props).map(key => {
          const prop = this.component.props[key]
          const obj = {
            default: this.getDefaultValue(prop.default),
            type: this.getPropType(prop.type),
            note: prop.note,
            required: prop.required,
            key: key
          }
          return obj
        })
      }
    }
  }
</script>

<style scoped lang="scss">
</style>