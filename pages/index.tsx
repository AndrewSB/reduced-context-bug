import React, { createContext, useContext } from 'react'
import { useWindowSize } from 'react-use'

const DisplayContext = createContext<"normal" | "compact">("normal")

export default function Parent() {

  const { width } = useWindowSize()
  const windowSizeDisplayContext = width > 800 ? "normal" : "compact"

  return (
    <div className="container">
      <DisplayContext.Provider value={windowSizeDisplayContext}>
        <Child />
      </DisplayContext.Provider>
    </div>
  )
}

const Child: React.FC = () => {
  const displayContext = useContext(DisplayContext)

  return (
    <div>
      <p hidden={displayContext ==="normal"}>Compact</p>
      <p hidden={displayContext ==="compact"}>Normal</p>
    </div>
  )
}