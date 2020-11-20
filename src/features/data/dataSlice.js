import { createSlice } from "@reduxjs/toolkit";
import { find, get } from "lodash";
import { createSelector } from "reselect";
import data from "../../data";
import {
  getPrimaryDenizenType,
  getPrimaryEntourageRole,
  getSecondaryDenizenType,
  getSecondaryEntourageRole,
} from "../choices/choicesSlice";

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

export const getEntourageChoices = createSelector(
  getEntourageSection,
  (section) => {
    return get(section, "choices");
  }
);

export const getFilteredEntourageChoices = createSelector(
  [getEntourageChoices, getPrimaryEntourageRole, getSecondaryEntourageRole],
  (choices, primary, secondary) => {
    return choices.filter((choice) => {
      return choice.title !== primary && choice.title !== secondary;
    });
  }
);

export const getDenizenSection = createSelector(getSections, (sections) => {
  return find(sections, { title: "Denizen Type" });
});

export const getDenizenChoices = createSelector(
  getDenizenSection,
  (section) => {
    return get(section, "choices");
  }
);

export const getFilteredDenizenChoices = createSelector(
  [getDenizenChoices, getPrimaryDenizenType, getSecondaryDenizenType],
  (choices, primary, secondary) => {
    return choices.filter((choice) => {
      return choice.title !== primary && choice.title !== secondary;
    });
  }
);

export const getAgeSection = createSelector(getSections, (sections) => {
  return find(sections, { title: "Your Lady's Age" });
});

export const getAppearanceSection = createSelector(getSections, (sections) => {
  return find(sections, { title: "Your Lady's Appearance" });
});

export const getNatureSection = createSelector(getSections, (sections) => {
  return find(sections, { title: "Your Lady's Nature" });
});

export const getOriginSection = createSelector(getSections, (sections) => {
  return find(sections, { title: "Your Lady's Origins" });
});

export const getRelationshipSection = createSelector(
  getSections,
  (sections) => {
    return find(sections, { title: "Your Relationship With Your Lady" });
  }
);

export const getReasonSection = createSelector(getSections, (sections) => {
  return find(sections, { title: "What makes you special" });
});

export default dataSlice.reducer;
