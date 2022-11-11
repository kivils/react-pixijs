import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Sprite from './components/Sprite'
import Stage from './components/Stage'
import './index.css';
import apple from './resources/apple.png'
import boy from './resources/boy.png'
import { useTick } from './hooks'

const root = ReactDOM.createRoot(document.getElementById('root'));

const STAGE_WIDTH = 800
const STAGE_HEIGHT = 600
const BOY_HEIGHT = 130

root.render(
  <Stage width={STAGE_WIDTH} height={STAGE_HEIGHT}>
    <App />
  </Stage>
);

function App() {
  const [ visible, setVisible ] = useState(true)
  const [ y, setY ] = useState(15)

  const handleClick = () => {
    setVisible(prev => !prev)
  }

  const handleMouseMove = (e) => {
    const updatedY = e.data.global.y
    const maxY = STAGE_HEIGHT - BOY_HEIGHT

    setY(updatedY < maxY ? updatedY : maxY)
  }

  // useTick(delta => {
  //   setY(prev => prev + delta * 10)
  // })

  return (
    <>
      <Sprite img={boy} width={150} height={BOY_HEIGHT} x={0} y={y} onClick={handleClick} onMouseMove={handleMouseMove} />
      { visible && <Sprite img={apple} width={70} height={50} x={550} y={15}/> }
    </>
  )
}
