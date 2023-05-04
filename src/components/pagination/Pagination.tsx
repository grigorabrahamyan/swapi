import { FC } from "react";
import Pagination from "react-bootstrap/Pagination";
import getPaginationArr from "../../helpers/getPaginationArr/getPaginationArr";
import { IProps } from "./Pagination.type";

const CustomPagination: FC<IProps> = ({
  count,
  onePageItemsCount,
  activePage,
  onSetActivePage,
}) => {
  return (
    <Pagination>
      <Pagination.Prev />
      {getPaginationArr(count, onePageItemsCount, 3, activePage).map(
        (page, index) => {
          if (page === "...") {
            return (
              <div key={index}>
                <Pagination.Ellipsis disabled />
              </div>
            );
          }
          return (
            <div key={index}>
              <Pagination.Item
                active={activePage === page}
                onClick={() => {
                  onSetActivePage(Number(page));
                }}
              >
                {page}
              </Pagination.Item>
            </div>
          );
        }
      )}
      <Pagination.Next />
    </Pagination>
  );
};

export default CustomPagination;
