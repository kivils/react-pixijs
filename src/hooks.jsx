import { useContext, useEffect } from 'react'
import { AppContext } from './context'

export const useApp = () => {
  return useContext(AppContext)
}

export const useTick = (fn) => {
  const { ticker } = useApp()

  useEffect(() => {
    ticker.add(fn)

    return () => {
      ticker.remove(fn)
    }
  }, [ fn, ticker ])
}
