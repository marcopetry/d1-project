export const prop = (path, defaultValue) => (props = {}) => {
  if (typeof props[path] !== 'undefined') {
    return props[path]
  }

  if (path && path.indexOf('.') > 0) {
    const paths = path.split('.')
    const { length } = paths
    let object = props[paths[0]]
    let index = 1

    while (object != null && index < length) {
      object = object[paths[index]]
      index += 1
    }

    if (typeof object !== 'undefined') {
      return object
    }
  }

  return defaultValue
}

export const theme = (path, defaultValue) => (props) => prop(path, defaultValue)(props.theme)
