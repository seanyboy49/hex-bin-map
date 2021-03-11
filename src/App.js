import { useState } from "react"
import Map from "./Map"

const App = () => {
  const [h3Indices, setH3Indices] = useState(new Set())
  console.log("h3Indices", h3Indices)

  return (
    <div className="App">
      <Map onHexClick={setH3Indices} selectedH3Indices={h3Indices} />

      <code>{Array.from(h3Indices).join(",")}</code>
    </div>
  )
}

export default App
