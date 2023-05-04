import { Col, Container, Row } from "react-bootstrap";
import { MainPage } from "../main-page";
import { Routes, Route } from "react-router-dom";
import { People } from "../people";
import { CustomAlert } from "../custom-alert";
import { NoPage } from "../no-page";

function App() {
  return (
    <Container>
      <Row xs="auto" className="justify-content-center title-section">
        <Col>
          <h1 className="display-1 title">SWAPI</h1>
          <h3 className="description">Test task with The Star Wars API</h3>
        </Col>
      </Row>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/people">
          <Route path=":id" element={<People />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
      <CustomAlert />
    </Container>
  );
}

export default App;
