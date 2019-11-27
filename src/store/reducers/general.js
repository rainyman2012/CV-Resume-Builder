import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  color: "white",
  language: "en",
  resumes: null,
  error: "",
  loading: false,
  activePage: "home"
};

const changeColor = (state, action) => {
  return updateObject(state, {
    color: action.color
  });
};

const resumeSuccess = (state, action) => {
  return updateObject(state, {
    resumes: action.resumes,
    loading: false
  });
};

const resumeStart = (state, action) => {
  return updateObject(state, {
    loading: true
  });
};

const resumeFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const generalLanguageSet = (state, action) => {
  return updateObject(state, {
    language: action.language
  });
};

const activePageChange = (state, action) => {
  return updateObject(state, {
    activePage: action.activePage
  });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GENERAL_COLOR_CHANGED:
      return changeColor(state, action);
    case actionTypes.GENERAL_LANGUAGE_SET:
      return generalLanguageSet(state, action);
    case actionTypes.POST_SUCCESS:
      return resumeSuccess(state, action);
    case actionTypes.POST_START:
      return resumeStart(state, action);
    case actionTypes.POST_FAIL:
      return resumeFail(state, action);
    case actionTypes.GENERAL_ACTIVE_PAGE_CHANGED:
      return activePageChange(state, action);
    default:
      return state;
  }
};

export default reducer;
