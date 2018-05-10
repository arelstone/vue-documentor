import Documentor from './Documentor'
import DocItem from './components/DocItem'
import ComponentList from './components/ComponentList'
import {filterComponent, loopAndFilterComponents, mapChildRoutes} from './utils'

const defaultOptions = {
  uri: '/documentor'
}

const mapDocumentorRoutes = (components, options = defaultOptions) => {
  return [{
    path: options.uri,
    name: 'documentor',
    component: Documentor,
    props: {
      components: loopAndFilterComponents(components),
      uri: options.uri
    },
    children: mapChildRoutes(components, options)
  }]
}

export {
  Documentor,
  DocItem,
  mapDocumentorRoutes
}