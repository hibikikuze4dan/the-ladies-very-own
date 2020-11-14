import { createSlice } from "@reduxjs/toolkit";
import { find, get } from "lodash";
import { createSelector } from "reselect";
import data from "../../data";

console.log(data);

const dataSlice = createSlice({
  name: "data",
  initialState: data,
});

export const getSections = (state) => {
  return get(state, "data.sections");
};

export const getGenderSection = createSelector(getSections, (sections) => {
  return find(sections, { title: "Gender" });
});

export default dataSlice.reducer;
