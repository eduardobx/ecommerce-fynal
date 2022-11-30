import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./isLoading.slice";
import getConfig from "../../utils/getConfing";

export const purchasesSlices = createSlice({
  name: "purchasses",
  initialState: [],
  reducers: {
    setPurchasse: (state, action) => {
      return action.payload;
    },
  },
});
export const getPurchassesThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(`https://e-commerce-api.academlo.tech/api/v1/purchases`, getConfig())
    .then((res) => dispatch(setPurchasse(res.data.data.purchases)))
    .finally(() => dispatch(setIsLoading(false)));
};
export const { setPurchasse } = purchasesSlices.actions;

export default purchasesSlices.reducer;
