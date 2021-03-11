import { useState } from "react"
import { h3SetToMultiPolygon } from "h3-js"

import Map from "./Map"
import { getGeoJson } from "./Map/utility"

const App = () => {
  const [h3Indices, setH3Indices] = useState(new Set())

  const coordinates = h3SetToMultiPolygon(Array.from(h3Indices), true)
  const geoJson = getGeoJson(coordinates)
  console.log("geojson", geoJson)

  return (
    <div className="App">
      <Map onHexClick={setH3Indices} selectedH3Indices={h3Indices} />

      <code>{Array.from(h3Indices).join(",")}</code>
    </div>
  )
}

export default App
