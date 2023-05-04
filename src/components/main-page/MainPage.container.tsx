import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { setActivePage } from "../../store/reducers/mainSlice";
import { fetchPeopleData } from "../../store/reducers/services/main.service";
import selectors from "../../store/selectors/";
import { useAppDispatch } from "../../store/store";
import MainPage from "./MainPage";

const MainPageContainer = () => {
  const dispatch = useAppDispatch();
  const renderCount = useRef(0);
  const { isLoading, data, activePage, onePageItemsCount } = useSelector(
    selectors.mainSelector
  );

  const getPeopleDataWithPage = (page: number) => {
    dispatch(fetchPeopleData(page, renderCount.current));
    renderCount.current++;
  };

  const handleSetActivePage = (page: number) => {
    dispatch(setActivePage(page));
  };

  useEffect(() => {
    getPeopleDataWithPage(activePage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePage]);

  return (
    <MainPage
      data={data}
      isLoading={isLoading}
      activePage={activePage}
      onePageItemsCount={onePageItemsCount}
      onSetActivePage={handleSetActivePage}
    />
  );
};

export default MainPageContainer;
