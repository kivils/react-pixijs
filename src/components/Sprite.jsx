import * as PIXI from 'pixi.js'

const Sprite = ({ img, ...props }) => {
  const texture = PIXI.Texture.from(img)

  return (
    <sprite texture={texture} {...props} />
  )
}

export default Sprite
