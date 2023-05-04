export interface IProps {
  count: number;
  activePage: number;
  onePageItemsCount: number;
  onSetActivePage: (page: number) => void;
}
