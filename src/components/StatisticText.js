import React from 'react'
import { StatContainer, TopText, BottomText } from './styles';

const StatisticText = ({ value, topText, baselineText }) => {
    return (
        <StatContainer>
            <TopText>{topText}</TopText>
            <BottomText>
                <h1>{value}</h1>
                <span>{baselineText}</span>
            </BottomText>
        </StatContainer>
    )
}

export default StatisticText;