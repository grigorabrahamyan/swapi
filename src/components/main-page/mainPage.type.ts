import { IPeopleData } from "../../types/server.type";

export interface IProps {
  data: IPeopleData;
  isLoading: boolean;
  activePage: number;
  onePageItemsCount: number;
  onSetActivePage: (page: number) => void;
}
