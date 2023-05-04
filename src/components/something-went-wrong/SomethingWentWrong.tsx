import { Button, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SomethingWentWrong = () => {
  const navigate = useNavigate();
  return (
    <Row className="went-wrong">
      <h1>Something went wrong</h1>
      <Button variant="outline-success" size="lg" onClick={() => navigate("/")}>
        Back to home page
      </Button>
    </Row>
  );
};

export default SomethingWentWrong;
