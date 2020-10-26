import {useMemo, useState} from 'react';

export const sortedByOptions = {
    STORY_SCORE: "STORY_SCORE",
    STORY_TIME: "STORY_TIME",
    AUTHOR_KARMA: "AUTHOR_KARMA"
};

const sorters = {
    STORY_SCORE: ( a, b ) =>  a?.storyScore - b?.storyScore,
    STORY_TIME: ( a, b ) => a?.storyTimestamp - b?.storyTimestamp,
    AUTHOR_KARMA: ( a, b ) => a?.authorKarma - b?.authorKarma,
}

const useSortedData = (list = []) => {
    const [sortedBy, setSortedBy] = useState(sortedByOptions.STORY_SCORE);

    const sortList = (list, type) => {
        return sorters[type] ? list.sort(sorters[type]) : list
      }

    const sortedList = useMemo(() => sortList([...list], sortedBy), [sortedBy, list]);

    return {sortedList, sortedBy, setSortedBy};
}

export default useSortedData;