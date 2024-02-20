import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import BootstrapNavbar from "react-bootstrap/Navbar"; // Rename the imported Navbar component
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useTranslation } from "react-i18next";

export default function CustomNavbar() {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  const handleChangeLanguage = (e) => {
    const newLanguage = e.target.value;
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);

  return (
    <BootstrapNavbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <BootstrapNavbar.Brand href="#">
          <b>React i18n</b>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="navbarScroll" />
        <BootstrapNavbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "200px" }}
            navbarScroll
          >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title={t("Services")} id="navbarScrollingDropdown">
              <NavDropdown.Item href="#">Services 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Services 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                {t("Other Services")}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <select
              name=""
              id=""
              className="border-1 rounded-2 p-1"
              style={{ background: "#1b2430", color: "#17cf97" }}
              onChange={handleChangeLanguage}
              value={currentLanguage}
            >
              <option value="en">{t("English")}</option>
              <option value="hn">{t("Hindi")}</option>
            </select>
          </Form>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}