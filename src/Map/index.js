import DeckGL from "@deck.gl/react"
import ReactMapGL from "react-map-gl"
import { H3HexagonLayer } from "@deck.gl/geo-layers"
import { useState } from "react"

import { bboxFromViewport, getH3IndicesForBB } from "./utility"

const TOKEN =
  "pk.eyJ1Ijoic2VhbmJvcmFtbGVlIiwiYSI6ImNrbTJlcnFqejE3NGQydXFtZng1cXR4eGgifQ.oZ0mZBtUX5u72QTPtPITfA"

const HEIGHT = 457
const WIDTH = 620

// Viewport settings for Conservatory of Flowers
const INITIAL_VIEW_STATE = {
  longitude: -122.4608452,
  latitude: 37.7726669,
  zoom: 18,
  height: HEIGHT,
  width: WIDTH,
}

const Map = () => {
  const [viewState, setViewState] = useState(INITIAL_VIEW_STATE)

  const boundingBox = bboxFromViewport(viewState)
  const h3Indices = getH3IndicesForBB(boundingBox)

  const layers = [
    new H3HexagonLayer({
      id: "h3-hexagon-layer",
      data: h3Indices,
      pickable: true,
      wireframe: true,
      filled: true,
      extruded: true,
      elevationScale: 0,
      getHexagon: (d) => d,
      getLineColor: [0, 0, 0],
      getFillColor: [0, 0, 0, 1], // rgba - rgb=0, but a=1 to make the hex clickable
      opacity: 1,
      onClick: (info) => console.log("info", info),
    }),
  ]

  return (
    <DeckGL
      height={HEIGHT}
      width={WIDTH}
      initialViewState={viewState}
      onViewStateChange={({ viewState }) => setViewState(viewState)}
      controller={true}
      layers={layers}
    >
      <ReactMapGL mapboxApiAccessToken={TOKEN} />
    </DeckGL>
  )
}

export default Map
