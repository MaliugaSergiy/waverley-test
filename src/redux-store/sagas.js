import Actions from "./actions";
import { call, put, all } from 'redux-saga/effects';
import { shuffle, listToMap } from "../utils"

import hackerNewsAPI from "../api-service/index.js";

function getRangomeListElements(list, amount) {
  const mixedList = shuffle(list);
  return mixedList.slice(0, amount);
}

const getAuthors = (list) => list.map(story => story.by);
const getUsersMapByStoryId = (storyIds, userList) => storyIds.reduce((map, id, index) => {
  map[id] = userList[index]
  return map;
}, {})

export function* prepareHackerNews() {
    const allStoryIds = yield call(hackerNewsAPI.allStoriesId);
    const randomeStoryIds = getRangomeListElements(allStoryIds, 10);
    const stories = yield fetchStoriesByIds(randomeStoryIds);
    const storyMapById = listToMap(stories, "id")
    const userIds = getAuthors(stories);
    const users = yield fetchUsersByIds(userIds);
    const usersMapByStoryId = getUsersMapByStoryId(randomeStoryIds, users)

    yield put(Actions.setAllStories(allStoryIds));
    yield put(Actions.setRandomeStories(randomeStoryIds));
    yield put(Actions.setStoryInfosMap(storyMapById));
    yield put(Actions.setAuthorInfosMap(usersMapByStoryId));
    yield put(Actions.setIsFullLoaded());
  }


  function* fetchStoriesByIds(list) {
    return yield fetchResourceByIds(list, hackerNewsAPI.item)
  }
  function* fetchUsersByIds(list) {
    return yield fetchResourceByIds(list, hackerNewsAPI.user)
  }

  function* fetchResourceByIds(idList, method){
    return yield all(idList.map(id => call(method, id)));
  }