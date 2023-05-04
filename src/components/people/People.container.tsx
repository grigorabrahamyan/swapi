import People from "./People";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { setCustomAlert } from "../../store/reducers/mainSlice";
import { useAppDispatch } from "../../store/store";
import { useSelector } from "react-redux";
import selectors from "../../store/selectors";
import { Row, Spinner } from "react-bootstrap";
import { IAlert } from "../../types/types";
import { SomethingWentWrong } from "../something-went-wrong";
import { fetchCurrentPeopleData } from "../../store/reducers/services/main.service";

const PeopleContainer = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { currentPeople, isLoading, errors } = useSelector(
    selectors.mainSelector
  );

  const { noData } = errors || {};

  const handleSetAlertData = (alertData: IAlert) => {
    dispatch(setCustomAlert(alertData));
  };

  useEffect(() => {
    dispatch(fetchCurrentPeopleData(Number(id)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (noData) {
    return <SomethingWentWrong />;
  }

  return !isLoading ? (
    <People currentPeople={currentPeople} onSetAlertData={handleSetAlertData} />
  ) : (
    <Row className="justify-content-center align-items-center">
      <Spinner animation="border" />
    </Row>
  );
};

export default PeopleContainer;
