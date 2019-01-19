import React from 'react';

import { prevIcon, nextIcon, cancelIcon } from '../common/icons';

const SearchBox = ({
    keyword,
    focusIndex,
    foundCount,
    updateSearchString,
    udpateFocusIndex,
    fetchNodeDetails,
    fetchServiceDetails,
    resetDetails
}) => {
    const selectPrevMatch = () => {
        udpateFocusIndex(
            focusIndex !== null ? (foundCount + focusIndex - 1) % foundCount : foundCount - 1
        );
    }

    const selectNextMatch = () => {
        udpateFocusIndex(
            focusIndex !== null ? (focusIndex + 1) % foundCount : 0
        );
    }

    const renderFoundSearchMatches = () => {
        if (foundCount > 0) {
            return (
                <span className='found-search-matches'>
                    &nbsp;
                    {foundCount > 0 ? focusIndex + 1 : 0}
                    &nbsp;/&nbsp;
                    {foundCount || 0}
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
                value={keyword}
                onChange={e => {
                    updateSearchString(e.target.value);
                    if (e.target.value === '')
                        resetDetails()
                }}
            />

            {renderFoundSearchMatches()}

            <div className="separator"></div>

            <i className={prevIcon} disabled={!foundCount} onClick={selectPrevMatch}></i>
            <i className={nextIcon} disabled={!foundCount} onClick={selectNextMatch}></i>
            <i
                className={cancelIcon}
                disabled={keyword === ''}
                onClick={() => {
                    updateSearchString('');
                    resetDetails();
                }}></i>
        </form>
    );
}

export default SearchBox;
