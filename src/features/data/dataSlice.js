import { createSlice } from "@reduxjs/toolkit";
import { find, get } from "lodash";
import { createSelector } from "reselect";
import data from "../../data";

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

export const getEntourageSection = createSelector(getSections, (sections) => {
  return find(sections, { title: "Entourage Role" });
});

export const getDenizenSection = createSelector(getSections, (sections) => {
  return find(sections, { title: "Denizen Type" });
});

export const getAgeSection = createSelector(getSections, (sections) => {
  return find(sections, { title: "Your Lady's Age" });
});

export const getAppearanceSection = createSelector(getSections, (sections) => {
  return find(sections, { title: "Your Lady's Appearance" });
});

export const getNatureSection = createSelector(getSections, (sections) => {
  return find(sections, { title: "Your Lady's Nature" });
});

export default dataSlice.reducer;
