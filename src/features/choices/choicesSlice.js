import { createSelector } from "reselect";
import { createSlice } from "@reduxjs/toolkit";
import { get } from "lodash";

const choicesSlice = createSlice({
  name: "choices",
  initialState: {
    gender: "",
    entourageRole: "",
    denizenType: "",
    age: {
      title: "",
      description: "",
      perks: {
        classTalents: 0,
        specialTalents: 0,
        normalPerks: 0,
        alteredPerks: 0,
      },
    },
    defaultPerks: {
      classTalents: 1,
      specialTalents: 0,
      normalPerks: 1,
      alteredPerks: 0,
    },
  },
  reducers: {
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setEntourageRole: (state, action) => {
      state.entourageRole = action.payload;
    },
    setDenizen: (state, action) => {
      state.denizenType = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
  },
});

export const {
  setGender,
  setEntourageRole,
  setDenizen,
  setAge,
} = choicesSlice.actions;

export const getGender = (state) => {
  return get(state, "choices.gender");
};

export const getEntourageRole = (state) => {
  return get(state, "choices.entourageRole");
};

export const getDenizen = (state) => {
  return get(state, "choices.denizen");
};

export const getAge = (state) => {
  return get(state, "choices.age");
};

export const getAgeTitle = createSelector(getAge, (ageData) => {
  return get(ageData, "title");
});

export default choicesSlice.reducer;
