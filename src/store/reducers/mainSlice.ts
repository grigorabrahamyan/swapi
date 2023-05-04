import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPeopleList, IPeopleData } from "../../types/server.type";
import { IState } from "../../types/store.type";
import { IAlert } from "../../types/types";

export const mainInitialState: IState = {
  isLoading: false,
  activePage: 1,
  onePageItemsCount: 0,
  alert: {
    variant: "success",
    isOpen: false,
    text: "",
  },
  data: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  currentPeople: {} as IPeopleList,
  errors: {
    noData: false,
  },
};

const todosSlice = createSlice({
  name: "main",
  initialState: mainInitialState,
  reducers: {
    setLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
    setData(state, { payload }: PayloadAction<IPeopleData>) {
      state.data = payload;
    },
    setOnePageItemsCount(state, { payload }: PayloadAction<number>) {
      state.onePageItemsCount = payload;
    },
    setActivePage(state, { payload }: PayloadAction<number>) {
      state.activePage = payload;
    },
    setCurrentPeople(state, { payload }) {
      state.currentPeople = payload;
    },
    setCustomAlert(state, { payload }: PayloadAction<IAlert>) {
      state.alert = payload;
    },
    setNoDataError(state, { payload }: PayloadAction<boolean>) {
      state.errors.noData = payload;
    },
  },
});

export const {
  setLoading,
  setData,
  setOnePageItemsCount,
  setActivePage,
  setCurrentPeople,
  setCustomAlert,
  setNoDataError,
} = todosSlice.actions;

export default todosSlice.reducer;
