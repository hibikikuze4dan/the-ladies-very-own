import { createSlice } from "@reduxjs/toolkit";
import { find, get } from "lodash";
import { createSelector } from "reselect";
import data from "../../data";
import {
  getPerksShown,
  getPrimaryDenizenType,
  getPrimaryEntourageRole,
  getSecondaryDenizenType,
  getSecondaryEntourageRole,
  getTalentsShown,
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

export const getPerksSections = createSelector(getSections, (sections) => {
  return {
    Human: find(sections, { title: "Human Perks" }),
    Vampire: find(sections, { title: "Vampire Perks" }),
    Lycanthrope: find(sections, { title: "Lycanthrope Perks" }),
    Stranger: find(sections, { title: "Stranger Perks" }),
  };
});

export const getCurrentPerkSection = createSelector(
  getPerksSections,
  getPerksShown,
  (perksSections, perksShown) => {
    return perksSections[perksShown];
  }
);

export const getTalentsSections = createSelector(getSections, (sections) => {
  return {
    Knight: find(sections, { title: "Knight Talents" }),
    Headservant: find(sections, { title: "Headservant Talents" }),
    Chamberlain: find(sections, { title: "Chamberlain Talents" }),
    "Hidden Blade": find(sections, { title: "Hidden Blade Talents" }),
  };
});

export const getCurrentTalentsSection = createSelector(
  getTalentsSections,
  getTalentsShown,
  (talentsSections, talentsShown) => {
    return talentsSections[talentsShown];
  }
);

export const getHobbiesSection = createSelector(getSections, (sections) => {
  return find(sections, { title: "Your Lady's Hobbies" });
});

export const getComplictionsSection = createSelector(
  getSections,
  (sections) => {
    return find(sections, { title: "Complications" });
  }
);

export default dataSlice.reducer;
