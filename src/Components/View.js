export const View = (props) => {
    const childs = Array.isArray(props.children) ? props.children : [props.children]
    const activeView = props.activeView

    const renderComponents = [];

    for (let child of childs) {
        if (child.props.id === activeView || child.props.id === undefined)
            renderComponents.push(child)
    }

    return (renderComponents);

};