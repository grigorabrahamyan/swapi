import { FC } from "react";
import { Alert, Row } from "react-bootstrap";
import { IProps } from "./CustomAlert.type";

const CustomAlert: FC<IProps> = ({ alert }) => {
  const { isOpen, variant, text } = alert || {};

  return (
    <Row className={`custom-alert ${isOpen ? "open" : ""}`}>
      <Alert key={variant} variant={variant}>
        {text}
      </Alert>
    </Row>
  );
};

export default CustomAlert;
