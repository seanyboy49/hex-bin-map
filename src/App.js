import { useState } from "react"
import { h3SetToMultiPolygon } from "h3-js"

import { Row, Col, Container } from "reactstrap"

import Map from "./Map"
import { getGeoJson } from "./Map/utility"
import GeoJSONInput from "./GeoJSONInput"

const App = () => {
  const [h3Indices, setH3Indices] = useState(new Set())

  const coordinates = h3SetToMultiPolygon(Array.from(h3Indices), true)
  const geoJson = getGeoJson(coordinates)

  return (
    <div className="App">
      <Row>
        <Col className="m-2">
          <Map onHexClick={setH3Indices} selectedH3Indices={h3Indices} />
        </Col>

        <Col className="m-2">
          <Row>
            <GeoJSONInput onSubmit={setH3Indices} />
          </Row>

          <Row className="m-2 d-flex flex-column">
            <h3>H3 Indices</h3>

            <div>
              <code>{Array.from(h3Indices).join(",")}</code>
            </div>
          </Row>

          <Row className="m-2 d-flex flex-column">
            <h3>GeoJSON</h3>

            <div>
              <code>{geoJson}</code>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default App
