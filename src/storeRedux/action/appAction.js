import actionType from "./actionType";

export const appAction = (language) => ({
  type: actionType.CHANGE_LANGUAGE,
  language: language,
});
