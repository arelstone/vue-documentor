import { Documentor, DocItem } from '../main'

export const mapDocumentorRoutes = (components, options) => {
  // @todo implement options
  const mergedOptions = Object.assign({}, {view: Documentor, path: '/documentor'}, options)
  return [{
    name: 'documentor',
    path: mergedOptions.path,
    component: mergedOptions.view,
    props: {components: loopAndFilterData(components)},
    children: mapChildRoutes(components, mergedOptions)
  }]
}
/**
 * Handle mapping of child routes according to the vue-router docs
 * @param components
 * @returns {any[]}
 */
const mapChildRoutes = (components, options) => {
  return Object.keys(components).map(key => {
    const component = components[key]
    const obj = {
      path: `${options.path}/${component.name}`,
      name: component.name,
      component: DocItem,
      props: {component},
    }
    return obj
  })
}
/**
 * Loop thru a collection of components.
 * @param components
 * @returns {{name: string, introduction, description, token, props: component.props|{tag, path, locale, places}}[]}
 */
const loopAndFilterData = (components) => Object.keys(components).map(key => filterData(components[key]))

/**
 * No need to pass along all data of the component.
 * This will only return what we need
 * @param component
 * @returns {{name: string, introduction, description, token, props: component.props|{tag, path, locale, places}}}
 */
const filterData = (component) => {
  return {
    name: component.name,
    introduction: component.introduction,
    description: component.description,
    token: component.token,
    props: component.props,
    filename: component.__file,
  }
}
