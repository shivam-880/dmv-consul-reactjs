import React from 'react';
import { StyledSearchBox, Input, Separator, Previous, Next, Cancel } from './StyledComponents';

const SearchBox = ({
    keyword,
    focusIndex,
    foundCount,
    updateKeyword,
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
        <StyledSearchBox onSubmit={e => e.preventDefault()}>
            <Input name='search'
                placeholder='Search'
                value={keyword}
                onChange={e => {
                    updateKeyword(e.target.value);
                    if (e.target.value === '')
                        resetDetails()
                }}
            />

            {renderFoundSearchMatches()}

            <Separator />

            <Previous disabled={!foundCount} onClick={selectPrevMatch}></Previous>
            <Next disabled={!foundCount} onClick={selectNextMatch}></Next>
            <Cancel
                disabled={keyword === ''}
                onClick={() => {
                    updateKeyword('');
                    resetDetails();
                }}
            ></Cancel>
        </StyledSearchBox>
    );
}

export default SearchBox;
