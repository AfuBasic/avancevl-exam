import styled from 'styled-components';
import { Col } from 'react-bootstrap';

export const Chart = styled(Col)`
    background: #333;
    color: #fff;
    height: 100vh;
    @media (max-width: 550px) {
        height: auto;
    }
`;