import React from 'react'
import { Row, Col} from 'react-bootstrap';
import { Chart } from './styles';

import ChartSection from './ChartSection';

const Exam = () => {
    return (
            <Row className="m-0">
                <Chart lg={3} md={4} sm={12} xs={12}>
                   <ChartSection />
                </Chart>
                <Col>
                    DEF
                </Col>
            </Row>
    )
}


export default Exam;