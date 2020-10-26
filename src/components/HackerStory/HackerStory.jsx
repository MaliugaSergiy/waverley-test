import React, {Fragment}  from 'react';

import {sortedByOptions} from "../HackerNews/useSortedData"

const getWraper = (condition) => {
    return condition ? "b" : Fragment;
}

const HackerStory = (props) => {
    const {story, sortedBy} = props;
    const ScoreWraper = getWraper(sortedBy === sortedByOptions.STORY_SCORE);
    const TimestampWraper = getWraper(sortedBy === sortedByOptions.STORY_TIME);
    const KarmaWraper = getWraper(sortedBy === sortedByOptions.AUTHOR_KARMA);

    return (
        <div className="HackeStory">
            <div className="HackeStory-title"><u>Title:</u> {story.storyTitle}</div>
            <a className="HackeStory-URL" href={story.storyURL} target="_blank" rel="noopener noreferrer">{story.storyURL}</a>
            <div className="HackeStory-timestamp"><u>Time:</u> <TimestampWraper>{story.storyTimestamp}</TimestampWraper></div>
            <div className="HackeStory-score"><u>Score:</u> <ScoreWraper>{story.storyScore}</ScoreWraper></div>
            <div className="HackeStory-authorId"><u>Author ID:</u> {story.authorId}</div>
            <div className="HackeStory-authorKarma"><u>Author karma:</u> <KarmaWraper>{story.authorKarma}</KarmaWraper></div>
        </div>
    )
}

export default HackerStory;