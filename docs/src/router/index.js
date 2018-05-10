import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Todos from '@/components/Todos'
import TodoItem from '@/components/TodoItem'
import {Todos as TodoApi} from '@/api/Todos'
import {mapDocumentorRoutes} from 'vue-documentor'

const components = {Todos, TodoItem}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todos',
      component: Todos,
      props: {todos: TodoApi()}
    },
    {
      path: '/hello-world',
      name: 'HelloWorld',
      component: HelloWorld
    },
    ...mapDocumentorRoutes(components)
  ]
})
