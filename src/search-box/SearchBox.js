import React, { Component } from 'react';

import { prevIcon, nextIcon, cancelIcon } from '../icons';

const SearchBox = ({
    searchString,
    searchFocusIndex,
    searchFoundCount,
    updateSearchString,
    udpateSearchFocusIndex,
    fetchNodeDetails,
    fetchServiceDetails,
    resetDetails
}) => {

    const selectPrevMatch = () => {
        udpateSearchFocusIndex(
            searchFocusIndex !== null ? (searchFoundCount + searchFocusIndex - 1) % searchFoundCount : searchFoundCount - 1
        );
    }

    const selectNextMatch = () => {
        udpateSearchFocusIndex(
            searchFocusIndex !== null ? (searchFocusIndex + 1) % searchFoundCount : 0
        );
    }

    const renderFoundSearchMatches = () => {
        if (searchFoundCount > 0) {
            return (
                <span className='found-search-matches'>
                    &nbsp;
                    {searchFoundCount > 0 ? searchFocusIndex + 1 : 0}
                    &nbsp;/&nbsp;
                    {searchFoundCount || 0}
                    &nbsp;
                </span>
            );
        } else return <></>;
    }

    return (
        <form className="search-box" onSubmit={e => e.preventDefault()}>
            <input
                name='search'
                className='search-field'
                placeholder='Search'
                value={searchString}
                onChange={e => {
                    updateSearchString(e.target.value);
                    if (e.target.value === '')
                        resetDetails()
                }}
            />

            {renderFoundSearchMatches()}

            <div className="separator"></div>

            <i className={prevIcon} disabled={!searchFoundCount} onClick={selectPrevMatch}></i>
            <i className={nextIcon} disabled={!searchFoundCount} onClick={selectNextMatch}></i>
            <i
                className={cancelIcon}
                disabled={searchString === ''}
                onClick={() => {
                    updateSearchString('');
                    resetDetails();
                }}></i>
        </form>
    );
}

export default SearchBox;
