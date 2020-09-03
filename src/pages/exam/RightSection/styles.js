import styled from 'styled-components';
import {Col, Row} from 'react-bootstrap';

export const ProblemContainer = styled(Col)`
background: #333;
box-shadow: 0 0 5px #222;
padding: 20px 50px;
border-radius: 10px;
`;

export const TopSection = styled(Row)`
    border-bottom: 1px solid #888;
    padding: 0 0 10px 0;
    
    p {
        display: inline-block;
        margin: 0 10px 0 0;
        font-size: 13px;
        font-weight: 800;
        color: orange;
        &:after {
            content: ".";
            margin: 10px 0;
            font-size: 20px;
            position: relative;
            margin: 0;
            top: -2px;
            left: 5px;
            color: #fff;
        }
    }

    p:last-child {
        &:after {
            content: ""
        }
    }
`;

export const BodySection = styled(Row)`
    padding: 15px 0;
    font-size: 12px;
`

export const Tags = styled.div`
    padding: 10px 0;
`;

export const Tag = styled.label`
    background: linear-gradient(104.46deg, #182AFF 5.3%, #0C99ED 113.1%);
    padding: 5px 10px;
    margin: 0 5px;
    border-radius: 5px;
    font-weight: 500;
    cursor: pointer;
    opacity: ${({ disabled }) => disabled ? ".3" : ".8"};
    &:hover {
        opacity: ${({ disabled }) => disabled ? ".3" : "1"};
    }
`;

export const CodeInput = styled.div`
    input {
        -webikit-appearance: none !important;
        background: #222 !important;
        padding: 20px !important;
        width: 60px !important;
        height: 60px !important;
        color: #0C99ED !important;
        font-size: 30px !important;
        border: 1px solid #0C99ED !important;

          @media (max-width: 768px) {
            width: 40px !important;
            height: 40px !important;
            font-size: 20px !important;
            color: #0C99ED !important;  
        } 
    }

    input:hover {
        --webkit-appearance:none !important;
    }
`