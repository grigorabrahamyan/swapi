import { IPeopleData, IPeopleList } from "./server.type";
import { IAlert, IStoreErrors } from "./types";

export interface IState {
  isLoading: boolean;
  activePage: number;
  onePageItemsCount: number;
  data: IPeopleData;
  currentPeople: IPeopleList;
  alert: IAlert;
  errors: IStoreErrors;
}
