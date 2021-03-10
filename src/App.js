import DeckGL from "@deck.gl/react"
import ReactMapGL from "react-map-gl"
import { H3HexagonLayer } from "@deck.gl/geo-layers"
import "mapbox-gl/dist/mapbox-gl.css"

import { useState } from "react"
import { bboxFromViewport, getH3IndicesForBB } from "./utility"

const TOKEN =
  "pk.eyJ1Ijoic2VhbmJvcmFtbGVlIiwiYSI6ImNrbTJlcnFqejE3NGQydXFtZng1cXR4eGgifQ.oZ0mZBtUX5u72QTPtPITfA"

// Viewport settings for Conservatory of Flowers
const INITIAL_VIEW_PORT = {
  viewState: {
    longitude: -122.4608452,
    latitude: 37.7726669,
    zoom: 16,
  },
}

const HEIGHT = 457
const WIDTH = 620

const App = () => {
  const [viewport, setViewPort] = useState(INITIAL_VIEW_PORT)

  console.log("viewport", viewport)
  // const boundingBox = bboxFromViewport(viewport.viewState)
  // const h3Indices = getH3IndicesForBB(boundingBox)
  // console.log("h3Indices", h3Indices)

  // const data = h3Indices.map((h3) => ({
  //   hex: h3,
  // }))

  const layers = [
    // new H3HexagonLayer({
    //   id: "h3-hexagon-layer",
    //   data: h3Indices,
    //   pickable: true,
    //   wireframe: true,
    //   filled: false,
    //   extruded: true,
    //   elevationScale: 0,
    //   getHexagon: (d) => d,
    // }),
  ]

  return (
    <div className="App">
      <DeckGL
        height={HEIGHT}
        width={WIDTH}
        initialViewState={viewport.viewState}
        onViewStateChange={setViewPort}
        controller={true}
        layers={layers}
      >
        <ReactMapGL mapboxApiAccessToken={TOKEN} />
      </DeckGL>
    </div>
  )
}

export default App
