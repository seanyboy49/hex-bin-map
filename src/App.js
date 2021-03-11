import { useState } from "react"
import { h3SetToMultiPolygon } from "h3-js"
import { featureToH3Set } from "geojson2h3"
import { Label, Input, Row, Col, Container, FormGroup, Form } from "reactstrap"

import Map from "./Map"
import { getGeoJson } from "./Map/utility"

const sample = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [-122.46092717828351, 37.77295937326589],
              [-122.46104799726534, 37.77298276352059],
              [-122.46113923694564, 37.77291042427848],
              [-122.46110965773332, 37.77281469483032],
              [-122.46120089718661, 37.772742355510026],
              [-122.46117131797716, 37.77264662595473],
              [-122.46105049945507, 37.772623235642094],
              [-122.46102092038917, 37.77252750590202],
              [-122.46090010192141, 37.77250411535596],
              [-122.46087052299909, 37.77240838543109],
              [-122.46074970458571, 37.772384994651595],
              [-122.4606584648648, 37.77245733382589],
              [-122.46068804364651, 37.77255306382838],
              [-122.4605968036986, 37.772625402924525],
              [-122.46047598487988, 37.772602011969504],
              [-122.46038474461581, 37.7726743509388],
              [-122.46041432325966, 37.772770080911755],
              [-122.46053514230829, 37.77279347183781],
              [-122.46056472109572, 37.77288920162597],
              [-122.46068554019871, 37.77291259231859],
              [-122.4607151191297, 37.773008321921985],
              [-122.46083593828706, 37.773031712381155],
              [-122.46092717828351, 37.77295937326589],
            ],
          ],
        ],
      },
    },
  ],
}

const App = () => {
  const [h3Indices, setH3Indices] = useState(new Set())

  const coordinates = h3SetToMultiPolygon(Array.from(h3Indices), true)
  const geoJson = getGeoJson(coordinates)

  // const hexes = featureToH3Set(sample, 12)

  return (
    <div className="App">
      <Map onHexClick={setH3Indices} selectedH3Indices={h3Indices} />

      {/* <code>{Array.from(h3Indices).join(",")}</code> */}
      <Row>
        <Col>
          <Form>
            <FormGroup>
              <Label for="geojson-input">Paste GeoJSON</Label>
              <Input id="geojson-input" type="textarea" rows="4" cols="20" />
            </FormGroup>
          </Form>
        </Col>
        <Col>
          <Form>
            <FormGroup>
              <Label for="geojson-input">Paste GeoJSON</Label>
              <Input id="geojson-input" type="textarea" rows="4" cols="20" />
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default App
