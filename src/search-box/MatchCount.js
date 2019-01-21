import React from 'react';
import { StyledMatchCount } from './StyledComponents';

const MatchCount = ({ focusIndex, foundCount }) => {
    if (foundCount > 0) {
        return (
            <StyledMatchCount>
                &nbsp;
                {foundCount > 0 ? focusIndex + 1 : 0}
                &nbsp;/&nbsp;
                {foundCount || 0}
                &nbsp;
            </StyledMatchCount>
        );
    } else return <></>;
}

export default MatchCount;
