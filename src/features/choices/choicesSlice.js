import { createSelector } from "reselect";
import { createSlice } from "@reduxjs/toolkit";
import { get, includes, isEqual } from "lodash";
import { fromJS } from "immutable";

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
    perks: [],
    perksShown: "Human",
    talents: [],
    talentsShown: "Knight",
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
    setPerksShown: (state, action) => {
      state.perksShown = action.payload;
    },
    updatePerks: (state, action) => {
      const perks = state.perks.map((perk) => perk.title);
      if (includes(perks, action.payload.title)) {
        state.perks = state.perks.filter((perk) => {
          return !isEqual(perk, action.payload);
        });
      } else {
        state.perks = [...state.perks, action.payload];
      }
    },
    setTalentsShown: (state, action) => {
      state.talentsShown = action.payload;
    },
    updateTalents: (state, action) => {
      const talents = state.talents.map((talent) => talent.title);
      if (includes(talents, action.payload.title)) {
        state.talents = state.talents.filter((talent) => {
          return !isEqual(talent, action.payload);
        });
      } else {
        state.talents = [...state.talents, action.payload];
      }
    }
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
  setPerksShown,
  updatePerks,
  setTalentsShown,
  updateTalents,
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
  return get(state, "choices.denizenType");
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

export const getPerksShown = (state) => {
  return state?.choices?.perksShown;
};

export const getPerks = (state) => {
  return state?.choices?.perks;
};

export const getPerksTitles = createSelector(getPerks, (perks) => {
  return perks.map((perk) => {
    return perk.title;
  });
});

export const getTalentsShown = state => {
  return state?.choices?.talentsShown;
}

export const getTalents = (state) => {
  return state?.choices?.talents;
};

export const getTalentsTitles = createSelector(getTalents, (talents) => {
  return talents.map((talent) => {
    return talent.title;
  });
});

export default choicesSlice.reducer;
