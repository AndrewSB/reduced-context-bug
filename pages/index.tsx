import React, { createContext, useContext } from 'react'
import { useWindowSize } from 'react-use'

const DisplayContext = createContext<"normal" | "compact">("normal")

type Props = {
  fetched: string
}

export default function Parent({fetched}: Props) {
  const { width } = useWindowSize()
  const windowSizeDisplayContext = width > 800 ? "normal" : "compact"

  return (
    <div className="container">
      <DisplayContext.Provider value={windowSizeDisplayContext}>
        <Child />
        <p>{fetched}</p>
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

export async function getStaticProps() {
  const fetched = "fetched from service"
  return {
    props: {
    fetched
    }
  }
}

