import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setCustomAlert } from "../../store/reducers/mainSlice";
import selectors from "../../store/selectors";
import { useAppDispatch } from "../../store/store";
import CustomAlert from "./CustomAlert";

const CustomAlertContainer = () => {
  const dispatch = useAppDispatch();

  const { alert } = useSelector(selectors.mainSelector);
  const { isOpen, variant } = alert || {};

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    if (isOpen) {
      timeoutId = setTimeout(() => {
        dispatch(
          setCustomAlert({
            variant,
            isOpen: false,
            text: "",
          })
        );
      }, 3000);
    }
    return () => clearTimeout(timeoutId);
  }, [dispatch, isOpen, variant]);

  return <CustomAlert alert={alert} />;
};

export default CustomAlertContainer;
