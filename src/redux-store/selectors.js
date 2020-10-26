import { createSelector } from 'reselect'

export const getRoot = (state) => state;
export const getIsFullLoaded = createSelector(
    getRoot, (root) => root.isFullDataLoaded);

export const getRandomeStoriesList = createSelector(
    getRoot, (root) => root.randomeStories);

export const getStoryInfosMap = createSelector(
    getRoot, (root) => root.storyInfosMap);

export const getAuthorInfosMap = createSelector(
    getRoot, (root) => root.authorInfosMap);

export const getOutputStoriesList = createSelector(
    [getRandomeStoriesList, getStoryInfosMap, getAuthorInfosMap], 
    (ids, storyInfosMap, authorInfosMap) => ids.map(id => ({
        id,
        storyOptions: storyInfosMap[id],
        authorOptions: authorInfosMap[id],
    })));

export const getRenderDataList = createSelector(
    getOutputStoriesList, 
    (outputList) => {
        return outputList.map(story => ({
            id:  story?.id,
            storyTitle:  story?.storyOptions?.title,
            storyURL:  story?.storyOptions?.url,
            storyTimestamp:  story?.storyOptions?.time,
            storyScore:  story?.storyOptions?.score,
            authorId:  story?.authorOptions?.id,
            authorKarma:  story?.authorOptions?.karma,
        }))
    });
