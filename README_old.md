Vue-documentor is a addon for your vue-router that creates a living documentation for all of your vue.js components.

It is quite simple. Just import the documentor route mapping function and pass your components

This package is inspired by [https://github.com/propellant/doctor/](https://github.com/propellant/doctor/ "propellant/doctor").


# Installation
Vue-documentor is available as a npm package at
> yarn add vue-documentor

or

> npm install vue-documentor


# Getting started

1. Install vue-documentor
    > yarn add vue-documentor
1. Add vue-documentor to routing and parse your components
1. Profit!


You need to add three properties to your components. A `name`, an `introduction` and a `token` \(the html tag\).

All props on a component need to be defined as `Objects` with a type and a `note`.

In your router-file import `vue-documentor` and use the `mapDocumentorRoutes`-function.

### Example components:

```
export default {
    name: 'component-a',
    introduction: 'This is the ComponentA',
    description: 'Renders a collection of items',
    token: '<component-a :items="[{}]" />',
    props: {
        items: {
            type: Array, 
            required: true, 
            note: 'The collection that will be rendered'
        }
    }
}
```

### Router

```
import {mapDocumentorRoutes} from 'vue-documentor' 
import ComponentA from '@/components/ComponentA'

new Router({
    // Define your own routes
    // {path: '/', name: 'Home', component: Home},
    ...mapDocumentorRoutes({
        ComponentA,
        // ...
    })
})
```

### Export all components at once

An easy way to include all your components is to create a file that exports all of them.

```
// components/index.js

import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'

export {
    ComponentA,
    ComponentB,
    ComponentC
}
```

You will then in your router file be able to get rid of all those imports

You will now be able to import \* from the component-file

eg:

```
import * as AllComponents from './components'

new Router({
    ...mapDocumentorRoutes(AllComponents)
})
```



You will now be able to visit /#/documentor to see your vue-documentor


# Theming
You can easily create your own theme by copying the vue-documentor/style directory to your own assets.

> cp node_modules/vue-documentor/style src/assets/vue-documentor-theme

# TODO:
- [] Add options to mapDocumentorRoutes to be able to select the Uri and view component
- [] Add testing utils to pull in for testing your own component
