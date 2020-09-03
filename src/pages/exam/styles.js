import styled from 'styled-components';
import { Col } from 'react-bootstrap';

export const Chart = styled(Col)`
    background: #222;
    color: #fff;
    height: 100vh;
    @media (max-width: 550px) {
        height: auto;
    }
`;

export const Right = styled(Col)`
    color: #fff;
    background: #333;
    height: 100vh;
    padding: 30px 50px;
    @media (max-width: 550px) {
        min-height: 50vh;
    }
`;