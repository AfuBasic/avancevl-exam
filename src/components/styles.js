import styled from 'styled-components';

export const StatContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    margin: 20px 30px;

     @media (max-width: 768px) {
        margin: 0 0 0 20px;
    }

`;

export const TopText = styled.div`
    padding: 0;
    margin: 0;
    font-size: 12px;
    color: #e1e1e1;
`;

export const BottomText = styled.div`
    padding: 0px;
    margin: 0;
    color: #e1e1e1;
    h1 {
        font-size: 45px;
        position: relative;
        line-height: 35px;
        font-weight: bold;
        display: inline;
        color: #fff;
    }

    span {
        color: #888;
        font-size: 10px;
    }
`