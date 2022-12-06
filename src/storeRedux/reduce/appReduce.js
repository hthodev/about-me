import actionType from "../action/actionType";

const initState = {
  language: "vie",
};

const appReduce = (state = initState, actions) => {
  switch (actions.type) {
    case actionType.CHANGE_LANGUAGE:
  }
  return {
    ...state,
    language: actions.language,
  };
};
