export const LTP_VIEW_ACTION_TYPE = "LTP_VIEW";
export const ALL_COLUMN_VIEW_ACTION_TYPE = "All_VIEW";
export const GREEK_VIEW_ACTION_VIEW = "GREEK_VIEW";
export const TOGGLE_COLUMN = "TOGGLE_COLUMN";

export const ltpView = () => {
  return { type: LTP_VIEW_ACTION_TYPE, payload: false };
};

export const allColumnView = () => {
  return { type: ALL_COLUMN_VIEW_ACTION_TYPE };
};

export const greekView = () => {
  return { type: GREEK_VIEW_ACTION_VIEW };
};

export const toggleColumn = (columnName) => {
  return { type: TOGGLE_COLUMN, payload: columnName };
};
