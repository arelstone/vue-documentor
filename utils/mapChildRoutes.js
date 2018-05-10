/**
 * Handle mapping of child routes according to the vue-router docs
 * @param components
 * @param options
 * @returns {any[]}
 */
const mapChildRoutes = (components, options) => {
    return Object.keys(components).map(key => {
      const component = components[key]
      return {
        path: `${options.uri}/${component.name}`,
        name: component.name,
        component: DocItem,
        props: {
          component,
          uri: options.uri
        }
      }
    })
  }
  

  export default mapChildRoutes;