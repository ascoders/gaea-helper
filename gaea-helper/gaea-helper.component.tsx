/**
 * 透明度
 */
export const opacity = {
    opacity: 1
}

export const opacityEditor = {
    field: 'style.opacity',
    label: '透明度',
    editor: 'number',
    number: {
        units: [{
            key: '',
            value: '%'
        }],
        currentUnit: '',
        max: 100,
        min: 0,
        step: 1,
        inputRange: [0, 100],
        outputRange: [0, 1],
        slider: true
    },
    editable: true
}

/**
 * 边距
 */
export const marginPadding = {
    paddingLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    marginLeft: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0
}

export const marginPaddingEditor = {
    field: null as any,
    label: '',
    editor: 'marginPadding',
    editable: true
}

/**
 * 宽高
 */
export const widthHeight = {
    height: null as any,
    minHeight: null as any,
    maxHeight: null as any,
    width: null as any,
    minWidth: null as any,
    maxWidth: null as any
}

export const widthHeightEditor = {
    field: null as any,
    label: '',
    editor: 'widthHeight',
    editable: true
}

/**
 * layout
 */
export const layout = {
    display: 'block',
    flexGrow: null as any,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'row',
    flexWrap: 'nowrap'
}

export const layoutNative = {
    flex: null as any,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'row',
    flexWrap: 'nowrap'
}

export const layoutEditor = {
    field: null as any,
    label: '',
    editor: 'layout',
    editable: true
}

/**
 * overflow
 */
export const overflow = {
    overflow: null as any,
    overflowX: null as any,
    overflowY: null as any
}

export const overflowNative = {
    overflow: 'hidden'
}

export const overflowEditor = {
    field: null as any,
    label: '',
    editor: 'overflow',
    editable: true
}

/**
 * background
 */
export const background = {
    background: null as any,
    backgroundColor: 'transparent',
    backgroundImage: null as any,
    backgroundPosition: null as any
}

export const backgroundNative = {
    backgroundColor: 'transparent'
}

export const backgroundEditor = {
    field: null as any,
    label: '',
    editor: 'background',
    editable: true
}

/**
 * 字体
 */
export const font = {
    fontWeight: null as any,
    fontStyle: 'normal',
    color: null as any,
    fontSize: 14,
    lineHeight: null as any,
    textAlign: 'left',
    textDecoration: 'none',
    whiteSpace: null as any,
    wordWrap: 'break-word',
    wordBreak: 'normal'
}

export const fontNative = {
    fontWeight: null as any,
    fontStyle: 'normal',
    color: null as any,
    fontSize: 14,
    lineHeight: null as any,
    textAlign: 'left',
    textDecorationLine: 'none',
}

export const fontEditor = {
    field: null as any,
    label: '',
    editor: 'font',
    editable: true
}

/**
 * 边框
 */
export const border = {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,

    borderLeftColor: null as any,
    borderBottomColor: null as any,
    borderRightColor: null as any,
    borderTopColor: null as any,

    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0,

    borderLeftStyle: 'none',
    borderTopStyle: 'none',
    borderRightStyle: 'none',
    borderBottomStyle: 'none'
}

export const borderNative = {
    borderBottomLeftRadius: null as any,
    borderBottomRightRadius: null as any,
    borderTopLeftRadius: null as any,
    borderTopRightRadius: null as any,

    borderColor: null as any,

    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0,

    borderStyle: null as any
}

export const borderEditor = {
    field: null as any,
    label: '',
    editor: 'border',
    editable: true
}

/**
 * 定位
 */
export const position = {
    position: 'relative',
    left: 0,
    top: 0,
    right: null as number,
    bottom: null as number,
    zIndex: null as number
}

export const positionEditor = {
    field: null as any,
    label: '',
    editor: 'position',
    editable: true
}