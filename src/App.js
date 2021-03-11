import { useState } from "react"
import Map from "./Map"

const App = () => {
  const [h3Indices, setH3Indices] = useState([])

  return (
    <div className="App">
      <Map onHexClick={setH3Indices} selectedH3Indices={h3Indices} />

      <code>{h3Indices.join(",")}</code>
    </div>
  )
}

export default App
