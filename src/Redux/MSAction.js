// actions.js

// Define action types
export const ADD_SELECTED_CE_STRIKE = "ADD_SELECTED_CE_STRIKE";
export const REMOVE_SELECTED_CE_STRIKE = "REMOVE_SELECTED_CE_STRIKE";
export const ADD_SELECTED_PE_STRIKE = "ADD_SELECTED_PE_STRIKE";
export const REMOVE_SELECTED_PE_STRIKE = "REMOVE_SELECTED_PE_STRIKE";
export const MAKE_GROUP = "MAKE_GROUP";

// Action creators
export const addSelectedCEStrike = (CEstrikeObject) => ({
  type: ADD_SELECTED_CE_STRIKE,
  payload: CEstrikeObject,
});

export const removeSelectedCEStrike = (CEstrikeObject) => ({
  type: REMOVE_SELECTED_CE_STRIKE,
  payload: CEstrikeObject,
});

export const addSelectedPEStrike = (PEstrikeObject) => ({
  type: ADD_SELECTED_PE_STRIKE,
  payload: PEstrikeObject,
});

export const removeSelectedPEStrike = (PEstrikeObject) => ({
  type: REMOVE_SELECTED_PE_STRIKE,
  payload: PEstrikeObject,
});

export const makingGroup = (payload) => {
  return { type: MAKE_GROUP, payload };
};
