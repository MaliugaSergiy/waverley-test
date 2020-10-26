import * as TYPES from "./types"

function createAction(type, payload = null, meta = null) {
    if (!type) {
      throw new Error('type is required');
    }
    return { type, payload, meta };
  }

  export default {
    setAllStories(allStoriesId = []) {
        return createAction(TYPES.SET_ALL_STORIES, {
            allStoriesId
        });
      },
    setRandomeStories(randomeStories = []) {
        return createAction(TYPES.SET_RANDOME_STORIES, {
            randomeStories
        });
      },
    setStoryInfosMap(storyInfosMap = {}) {
        return createAction(TYPES.SET_STORY_INFOS, {
            storyInfosMap
        });
      },
    setAuthorInfosMap(authorInfosMap = {}) {
        return createAction(TYPES.SET_AUTHOR_INFOS, {
            authorInfosMap
        });
      },
    setIsFullLoaded() {
        return createAction(TYPES.SET_IS_FULL_LOADED);
      },
  }