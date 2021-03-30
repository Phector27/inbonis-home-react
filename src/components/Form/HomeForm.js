import React from "react";
import { Form } from "react-bootstrap";

export default function HomeForm(props) {
  const { formData } = props;
  console.log(formData, "hola");

  return (
    <>
      <div className="form-space">
        <Form>
          <Form.Group controlId="nifControl">
            <Form.Control
              type="text"
              size="lg"
              placeholder="NIF"
              style={{
                color: "#4be0af",
                border: "none",
                boxShadow: "2px 3px 2px 2px #e0dede",
              }}
            />
            <br />
            <Form.Control
              style={{
                color: "#4be0af",
                border: "none",
                boxShadow: "2px 3px 2px 2px #e0dede",
              }}
              as="select"
              size="lg"
            >
              <option>Sector de actividad</option>
              {formData ? (
                formData
                  .map((elm) => (
                    <option key={elm.code}>{elm.description}</option>
                  ))
                  .reverse()
              ) : (
                <p>Cargando...</p>
              )}
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}
