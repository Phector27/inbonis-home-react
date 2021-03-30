import React from "react";
import { Row, Col } from "react-bootstrap";
import logo from "../../img/hexagon.png";

export default function BusinessInfo() {
  return (
    <div className="examples">
      <Row>
        <Col>
          <div className="text-example">
            <img alt="Hexagon transparent" src={logo} className="hexagon-img" />
            <p className="small-text">
              1. Introduce el NIF y la actividad de tu negocio
            </p>
          </div>
        </Col>
        <Col>
          <div className="text-example" style={{ marginTop: 10 }}>
            <img alt="Hexagon transparent" src={logo} className="hexagon-img" />
            <p className="small-text">2. Contesta un breve cuestionario</p>
          </div>
        </Col>
        <Col>
          <div className="text-example">
            <img alt="Hexagon transparent" src={logo} className="hexagon-img" />
            <p className="small-text">
              3. Consigue una evaluación y consejos de mejora
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
