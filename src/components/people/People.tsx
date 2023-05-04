import { FC, useState, ChangeEventHandler } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { EErrorMessages } from "../../types/config.type";
import { EGender } from "../../types/types";
import { IProps } from "./People.type";

const Pleople: FC<IProps> = ({ currentPeople, onSetAlertData }) => {
  const [inputs, setInputs] = useState(currentPeople);

  const handleChangeInputFields = (field: string, value: string) => {
    setInputs((state) => ({
      ...state,
      [field]: value,
    }));
  };

  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    handleChangeInputFields(e.target.name, e.target.value);
  };

  const handleChnageSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
    handleChangeInputFields(e.target.name, e.target.value);
  };

  const handleEditInputFields = () => {
    const isAllInputsFill = Object.values(inputs).every((field) => {
      return typeof field !== "string" || !!field.length;
    });

    let alertObj = {
      variant: "success",
      isOpen: true,
      text: EErrorMessages[0],
    };

    if (!isAllInputsFill) {
      alertObj = {
        variant: "danger",
        isOpen: true,
        text: EErrorMessages[1],
      };
    }

    onSetAlertData(alertObj);
  };

  const handleResetChanges = () => {
    setInputs(currentPeople);
  };

  return (
    <Row className="current-people" data-testId="current-people-page">
      <Col>
        <Row className="current-people-row">
          <Col>
            <InputGroup size="lg">
              <InputGroup.Text id="inputGroup-sizing-lg">Name</InputGroup.Text>
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                value={inputs.name}
                name="name"
                onChange={handleChangeInput}
                isInvalid={!inputs?.name?.length}
              />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup size="lg">
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                value={inputs.birth_year}
                name="birth_year"
                onChange={handleChangeInput}
                isInvalid={!inputs?.birth_year?.length}
              />
              <InputGroup.Text id="inputGroup-sizing-lg">
                Birthday
              </InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
        <Row className="current-people-row">
          <Col>
            <InputGroup size="lg">
              <InputGroup.Text id="inputGroup-sizing-lg">
                Gender
              </InputGroup.Text>
              <Form.Select
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                name="gender"
                value={inputs.gender}
                onChange={handleChnageSelect}
                isInvalid={!inputs?.gender?.length}
              >
                {Object.values(EGender).map((gender) => (
                  <option key={gender} value={gender}>
                    {gender}
                  </option>
                ))}
              </Form.Select>
            </InputGroup>
          </Col>
          <Col>
            <InputGroup size="lg">
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                value={inputs.height}
                name="height"
                onChange={handleChangeInput}
                isInvalid={!inputs?.height?.length}
              />
              <InputGroup.Text id="inputGroup-sizing-lg">
                Height
              </InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
        <Row className="current-people-row">
          <Col>
            <InputGroup size="lg">
              <InputGroup.Text id="inputGroup-sizing-lg">
                Eye color
              </InputGroup.Text>
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                value={inputs.eye_color}
                name="eye_color"
                onChange={handleChangeInput}
                isInvalid={!inputs?.eye_color?.length}
              />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup size="lg">
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                value={inputs.hair_color}
                name="hair_color"
                onChange={handleChangeInput}
                isInvalid={!inputs?.hair_color?.length}
              />
              <InputGroup.Text id="inputGroup-sizing-lg">
                Hair color
              </InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
        <Row className="current-people-row">
          <Col>
            <InputGroup size="lg">
              <InputGroup.Text id="inputGroup-sizing-lg">
                Skin color
              </InputGroup.Text>
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                value={inputs.skin_color}
                name="skin_color"
                onChange={handleChangeInput}
                isInvalid={!inputs?.skin_color?.length}
              />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup size="lg">
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                value={inputs.mass}
                name="mass"
                onChange={handleChangeInput}
                isInvalid={!inputs?.mass?.length}
              />
              <InputGroup.Text id="inputGroup-sizing-lg">Mass</InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
        <Row className="current-people-buttons">
          <Col>
            <Button
              variant="outline-success"
              size="lg"
              onClick={handleEditInputFields}
            >
              Edit
            </Button>
          </Col>
          <Col>
            <Button
              variant="outline-danger"
              size="lg"
              onClick={handleResetChanges}
            >
              Reset
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Pleople;
