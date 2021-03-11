import { useState } from "react"
import { h3SetToMultiPolygon } from "h3-js"

import { Row, Col } from "reactstrap"

import Map from "./Map"
import { getGeoJson } from "./Map/utility"
import GeoJSONInput from "./GeoJSONInput"

const App = () => {
  const [h3Indices, setH3Indices] = useState(new Set())

  const coordinates = h3SetToMultiPolygon(Array.from(h3Indices), true)
  const geoJson = getGeoJson(coordinates)

  // const hexes = featureToH3Set(sample, 12)

  return (
    <div className="App">
      <Row>
        <Col className="m-2">
          <Map onHexClick={setH3Indices} selectedH3Indices={h3Indices} />
        </Col>

        <Col>
          <Row>
            <Col>
              <GeoJSONInput onSubmit={setH3Indices} />
            </Col>
          </Row>
        </Col>
      </Row>

      {/* <code>{Array.from(h3Indices).join(",")}</code> */}
    </div>
  )
}

export default App
