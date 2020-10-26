import React  from 'react';
import HackeStory from "../HackerStory/HackerStory";
import {sortedByOptions} from "../HackerNews/useSortedData"

import "./HackerNews.css"

const HackerNews = (props) => {
    const {list, sortedBy, setSortedBy} = props;
    const handleSortChange = ({target}) => {
        setSortedBy( target.value);
    }

    return (
        <div className="HackerNews">
            <div className="HackerNews-changeSorting">
                Change sorting: 
                <select value={sortedBy}  onChange={handleSortChange}>
                    {Object.keys(sortedByOptions).map((sortType, index)=>(
                        <option key={index} value={sortType}>{sortType}</option>
                    ))}
                </select>
            </div>
            <ul className="HackerNews-list">
                {list.map(story=>(
                    <li key={story.id} className="HackerNews-item">
                        <HackeStory story={story} sortedBy={sortedBy}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HackerNews;