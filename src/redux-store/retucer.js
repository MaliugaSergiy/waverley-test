import * as TYPES from "./types"

const initialState = {
    allStoriesId: [],
    randomeStories: [],
    storyInfosMap: {},
    authorInfosMap: {},

    isFullDataLoaded: false,
}

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case TYPES.SET_ALL_STORIES:
          return {
              ...state,
              allStoriesId: payload.allStoriesId
          };
        case TYPES.SET_RANDOME_STORIES:
          return {
              ...state,
              randomeStories: payload.randomeStories
          };
        case TYPES.SET_STORY_INFOS:
          return {
              ...state,
              storyInfosMap: payload.storyInfosMap
          };
        case TYPES.SET_AUTHOR_INFOS:
          return {
              ...state,
              authorInfosMap: payload.authorInfosMap 
          };
        case TYPES.SET_IS_FULL_LOADED:
          return {
              ...state,
              isFullDataLoaded: true
          };
        default:
          return state;
      }
}

export default reducer;