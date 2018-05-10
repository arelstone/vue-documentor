<template>
    <article class="doc-item" :id="component.name">
        <headline :link="`${uri}/${component.name}`">{{component.name}}</headline>
        <p class="doc-item--introduction">{{component.introduction}}</p>
        <p class="doc-item--description">{{component.description}}</p>
        <props :component="component"/>
        <example :token="component.token"/>
    </article>
</template>

<script>
import { Props, Example, Headline } from './index'

export default {
  name: 'doc-item',
  introduction: 'Component for displaying documentation',
  description: 'This component will display documentation for a component',
  token: '<doc-item :component="SomeComponent" />',
  props: {
    component: {
      type: Object,
      required: true,
      note: 'The component that needs to be documented'
    },
    uri: { type: String, required: true }
  },
  components: {
    Props,
    Example,
    Headline
  }
}
</script>
