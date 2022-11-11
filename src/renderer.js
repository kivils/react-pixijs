import Reconciler from 'react-reconciler';
import * as PIXI from 'pixi.js'

const hostConfig = {
  supportsMutation: true,
  isPrimaryRenderer: false,
  getRootHostContext: () => {},
  getChildHostContext: parentHostContext => parentHostContext,
  prepareForCommit: () => {},
  clearContainer: () => {},
  resetAfterCommit: () => {},
  shouldSetTextContent: () => false,
  appendChildToContainer: (container, child) => {
    container.addChild(child)
  },
  appendInitialChild: (parent, child) => {
    parent.addChild(child)
  },
  appendChild: (parent, child) => {
    parent.addChild(child)
  },
  insertInContainerBefore: (container, child) => {
    container.addChild(child)
  },
  insertBefore: (parent, child) => {
    parent.addChild(child)
  },
  removeChildFromContainer: (container, child) => {
    container.removeChild(child)
  },
  removeChild: (parent, child) => {
    parent.removeChild(child)
  },
  createInstance: (type, props) => {
    let instance

    if(type === 'sprite') {
      instance = new PIXI.Sprite(props.texture)
      const { width, height, x = 0, y = 0 } = props
      instance.width = width
      instance.height = height
      instance.x = x
      instance.y = y

      if(props.onClick) {
        instance.interactive = true
        instance.on('click', props.onClick)
      }

      if(props.onMouseMove) {
        instance.interactive = true
        instance.on('mousemove', props.onMouseMove)
      }

      return instance
    }
  },
  prepareUpdate: (instance, type, oldProps, newProps, rootContainer, hostContext) => {
    return newProps
  },
  commitUpdate: (instance, updatePayload, type) => {
    const { x, y, rotation} = updatePayload

    if(type === 'sprite') {
      instance.x = x
      instance.y = y

      if(rotation) {
        instance.rotation = rotation
      }
    }
  },
  detachDeletedInstance: () => {},
  getPublicInstance: instance => instance,
  finalizeInitialChildren: () => false,
};

export const render = (jsx, root) => {
  const reconciler = Reconciler(hostConfig)
  const container = reconciler.createContainer(root)
  // debugger

  reconciler.updateContainer(jsx, container, null, () => {})
};
