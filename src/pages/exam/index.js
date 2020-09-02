import React from 'react'
import { Row, Col} from 'react-bootstrap';
import { Chart, Right } from './styles';

import ChartSection from './ChartSection';
import RightSection from './RightSection';

const Exam = () => {
    return (
            <Row className="m-0">
                <Chart lg={3} md={4} sm={12} xs={12}>
                   <ChartSection />
                </Chart>
                <Right>
                    <RightSection />
                </Right>
            </Row>
    )
}


export default Exam;