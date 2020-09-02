import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

export const CustomRow = styled(Row)`
    display: flex;
    justify-items: center;
    align-items: space-between;
    @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Chart = styled(Col)`
    height: auto;
    padding: 0px;
`;