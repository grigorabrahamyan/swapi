import { IPeopleList } from "../../types/server.type";
import { IAlert } from "../../types/types";

export interface IProps {
  currentPeople: IPeopleList;
  onSetAlertData: (alertData: IAlert) => void;
}
