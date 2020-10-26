import React from 'react';
import { connect } from "react-redux";
import * as selectors from "../../redux-store/selectors";
import { createStructuredSelector } from 'reselect';
import useSortedData from "./useSortedData"
import HackerNews from "./HackerNews";

const mapStateToProps = createStructuredSelector({
    isFullLoaded: selectors.getIsFullLoaded,
    rendererDataList: selectors.getRenderDataList
  });

 const HackerNewsContainer = ({isFullLoaded, rendererDataList}) => {
    const {sortedList, ...rest} = useSortedData(rendererDataList);

    if(!isFullLoaded) {
        return null;
    }
        
    return <HackerNews list={sortedList} {...rest}/>
}

export default connect(mapStateToProps)(HackerNewsContainer);

