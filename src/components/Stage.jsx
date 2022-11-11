import { useCallback } from 'react'
import * as PIXI from 'pixi.js'
import { AppProvider } from '../context'
import { render } from '../renderer'

const Stage = ({ width, height, children, options }) => {
  const mountStage = useCallback((canvas) => {
    const app = new PIXI.Application({
      width,
      height,
      view: canvas,
      backgroundColor: 0xe6e6fa,
      options
    })
    const provider = <AppProvider app={app}>{children}</AppProvider>

    render(provider, app.stage)
  }, [ width, height, children, options ])

  return <canvas ref={mountStage} />
}

export default Stage
