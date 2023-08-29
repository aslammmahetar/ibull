import { STRETERGY_CREATED } from "./sbAction";

const initialState = {
  stretergyCreated: false,
};

export const sbReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case STRETERGY_CREATED: {
      return {
        ...state,
        stretergyCreated: true,
      };
    }
    default:
      return state;
  }
};
