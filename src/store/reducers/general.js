import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  color: "white",
  language: "fa",
  posts: "",
  error: "",
  loading: false,
  activePage: "1"
};

const changeColor = (state, action) => {
  return updateObject(state, {
    color: action.color
  });
};

const postSuccess = (state, action) => {
  return updateObject(state, {
    posts: action.posts,
    loading: false
  });
};

const postStart = (state, action) => {
  return updateObject(state, {
    loading: true
  });
};

const postFail = (state, action) => {
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
      return postSuccess(state, action);
    case actionTypes.POST_START:
      return postStart(state, action);
    case actionTypes.POST_FAIL:
      return postFail(state, action);
    case actionTypes.GENERAL_ACTIVE_PAGE_CHANGED:
      return activePageChange(state, action);
    default:
      return state;
  }
};

export default reducer;
