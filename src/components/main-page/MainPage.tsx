import { FC } from "react";
import { IProps } from "./mainPage.type";
import Table from "react-bootstrap/Table";
import { Col, Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";
import { Pagination } from "../pagination";

const MainPage: FC<IProps> = ({
  data,
  isLoading,
  activePage,
  onePageItemsCount,
  onSetActivePage,
}) => {
  const { results: peopleList, count } = data || {};

  const navigate = useNavigate();

  return (
    <Row className="flex-column main-page">
      <Col className="table">
        {!isLoading ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Birthday</th>
                <th>Gender</th>
                <th>Height</th>
                <th>Eye color</th>
                <th>Hair color</th>
                <th>Skin color</th>
                <th>Mass</th>
              </tr>
            </thead>
            <tbody>
              {peopleList.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="main-page-item"
                    onClick={() => navigate(`/people/${item.id}`)}
                    data-testId={"people-link"}
                  >
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.birth_year}</td>
                    <td>{item.gender}</td>
                    <td>{item.height}</td>
                    <td>{item.eye_color}</td>
                    <td>{item.hair_color}</td>
                    <td>{item.skin_color}</td>
                    <td>{item.mass}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : (
          <Row className="justify-content-center align-items-center">
            <Spinner animation="border" />
          </Row>
        )}
      </Col>
      {count ? (
        <Col>
          <Pagination
            count={count}
            activePage={activePage}
            onePageItemsCount={onePageItemsCount}
            onSetActivePage={onSetActivePage}
          />
        </Col>
      ) : null}
    </Row>
  );
};

export default MainPage;
