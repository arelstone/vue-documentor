/**
 * Loop thru a collection of components.
 * @param components
 * @returns {{name: string, introduction, description, token, props: component.props|{tag, path, locale, places}}[]}
 */
const loopAndFilterComponents = (components) => Object.keys(components).map(key => filterComponent(components[key]))


export default loopAndFilterComponents