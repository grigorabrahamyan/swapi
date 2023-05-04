import {
  IPeopleDataServer,
  IPeopleList,
  IPeopleListServer,
  // TAxiosType,
} from "../../../types/server.type";
// import axios from "axios";
import { AppThunk } from "../../store";
import {
  setCurrentPeople,
  setData,
  setLoading,
  setNoDataError,
  setOnePageItemsCount,
} from "../mainSlice";

export const getDataFromServer = async <T>(url: string): Promise<T> => {
  // const { data }: TAxiosType<T> = await axios(url);
  const response: any = await fetch(url);
  const test = await response.json();
  console.log(test, "test");
  return test;
};

export const fetchPeopleData = (
  page: number,
  renderCount: number
): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const { results, count, ...rest } =
        (await getDataFromServer<IPeopleDataServer>(
          `https://swapi.dev/api/people/?page=${page}`
        )) || {};

      if (!renderCount) {
        if (count > results.length) {
          dispatch(setOnePageItemsCount(results.length));
        }
      }

      const peopleListData: IPeopleList[] = results.map((people) => {
        const { url } = people || {};
        const urlArray = url.split("/");
        return {
          ...people,
          id: Number(urlArray[urlArray.length - 2]),
        };
      });

      dispatch(setData({ results: peopleListData, count, ...rest }));
    } catch (error) {
      dispatch(setNoDataError(true));
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const fetchCurrentPeopleData = (id: number): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    dispatch(setNoDataError(false));
    try {
      const data =
        (await getDataFromServer<IPeopleListServer>(
          `https://swapi.dev/api/people/${id}`
        )) || {};

      if (data.detail === "Not found") {
        throw new Error("Data not found");
      }

      dispatch(
        setCurrentPeople({
          ...data,
          id,
        })
      );
    } catch (error) {
      dispatch(setNoDataError(true));
    } finally {
      dispatch(setLoading(false));
    }
  };
};
