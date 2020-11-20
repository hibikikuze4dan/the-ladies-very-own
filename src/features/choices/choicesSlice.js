import { createSelector } from "reselect";
import { createSlice } from "@reduxjs/toolkit";
import { get } from "lodash";

const choicesSlice = createSlice({
  name: "choices",
  initialState: {
    gender: "",
    entourageRole: {
      primary: "",
      secondary: "",
    },
    denizenType: {
      primary: "",
      secondary: "",
    },
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
    appearance: {
      title: "",
      description: "",
      perks: {
        classTalents: 0,
        specialTalents: 0,
        normalPerks: 0,
        alteredPerks: 0,
      },
    },
    nature: {
      title: "",
      description: "",
      perks: {
        classTalents: 0,
        specialTalents: 0,
        normalPerks: 0,
        alteredPerks: 0,
      },
    },
    origins: {
      title: "",
      description: "",
      perks: {
        classTalents: 0,
        specialTalents: 0,
        normalPerks: 0,
        alteredPerks: 0,
      },
    },
    relationship: "",
    reason: {
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
      hobbies: 1,
    },
  },
  reducers: {
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setEntourageRole: (state, action) => {
      state.entourageRole = {
        ...state.entourageRole,
        ...action.payload,
      };
    },
    setDenizen: (state, action) => {
      state.denizenType = {
        ...state.denizenType,
        ...action.payload,
      };
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setAppearance: (state, action) => {
      state.appearance = action.payload;
    },
    setNature: (state, action) => {
      state.nature = action.payload;
    },
    setOrigins: (state, action) => {
      state.origins = action.payload;
    },
    setRelationship: (state, action) => {
      state.relationship = action.payload;
    },
    setReason: (state, action) => {
      state.reason = action.payload;
    },
  },
});

export const {
  setGender,
  setEntourageRole,
  setDenizen,
  setAge,
  setAppearance,
  setNature,
  setOrigins,
  setRelationship,
  setReason,
} = choicesSlice.actions;

export const getGender = (state) => {
  return get(state, "choices.gender");
};

export const getEntourageRole = (state) => {
  return get(state, "choices.entourageRole");
};

export const getPrimaryEntourageRole = createSelector(
  getEntourageRole,
  (role) => {
    return get(role, "primary");
  }
);

export const getSecondaryEntourageRole = createSelector(
  getEntourageRole,
  (role) => {
    return get(role, "secondary");
  }
);

export const getDenizen = (state) => {
  return get(state, "choices.denizen");
};

export const getPrimaryDenizenType = createSelector(getDenizen, (denizen) => {
  return get(denizen, "primary");
});

export const getSecondaryDenizenType = createSelector(getDenizen, (denizen) => {
  return get(denizen, "secondary");
});

export const getAge = (state) => {
  return get(state, "choices.age");
};

export const getAgeTitle = createSelector(getAge, (ageData) => {
  return get(ageData, "title");
});

export const getAppearance = (state) => {
  return get(state, "choices.appearance");
};

export const getAppearanceTitle = createSelector(
  getAppearance,
  (appearanceData) => {
    return get(appearanceData, "title");
  }
);

export const getNature = (state) => {
  return get(state, "choices.nature");
};

export const getNatureTitle = createSelector(getNature, (natureData) => {
  return get(natureData, "title");
});

export const getOrigins = (state) => {
  return get(state, "choices.origins");
};

export const getOriginsTitle = createSelector(getOrigins, (originsData) => {
  return get(originsData, "title");
});

export const getRelationship = (state) => {
  return get(state, "choices.relationship");
};

export const getReason = (state) => {
  return get(state, "choices.reason");
};

export const getReasonTitle = createSelector(getReason, (reasonData) => {
  return get(reasonData, "title");
});

export default choicesSlice.reducer;
