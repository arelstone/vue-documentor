/**
 * No need to pass along all data of the component.
 * This will only return what we need
 * @param component
 * @returns {{name: string, introduction, description, token, props: component.props|{tag, path, locale, places}}}
 */
const filterComponent = (component) => {
    return {
        name: component.name,
        introduction: component.introduction,
        description: component.description,
        token: component.token,
        props: component.props
    }
}

export default filterComponent;