import React from 'react';
import { StyledSearchBox, Input, Separator, Previous, Next, Cancel } from './StyledComponents';
import MatchCount from './MatchCount';

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

            <MatchCount focusIndex={focusIndex} foundCount={foundCount}/>

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
