import React, { useState, useEffect } from "react";
import imageBusiness from "../../img/home-banner.jpg";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeForm from "../Form/HomeForm";
import BusinessInfo from "./BusinessInfo";
import Footer from "../Footer/Footer";

export default function Home() {
  const [formData, setFormData] = useState("");
  console.log(formData);

  useEffect(() => {
    getData();
  }, []);

  const url = "https://demos.inbonis.com/api-coach-es-informa/activities";

  const getData = async () => {
    const axios = require("axios");
    const qs = require("qs");
    let data = qs.stringify({});
    let config = {
      method: "get",
      url: `${url}`,
      headers: {},
      data: data,
    };

    await axios(config)
      .then(async (response) => {
        await setFormData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="divider-navbar-home"></div>
      <Container>
        <header>
          <img alt="Home Banner" src={imageBusiness} className="home-banner" />
        </header>
        <div>
          <h3 className="hero-title">Evalúa y mejora tu negocio</h3>
          <HomeForm formData={formData} />
          <div className="center">
            <Link to="#" class="custom_btn custom_btn--border">
              Continuar →
            </Link>
          </div>
          <BusinessInfo />
        </div>
        <Footer />
      </Container>
    </>
  );
}
