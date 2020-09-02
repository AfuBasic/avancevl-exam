import React from 'react';
import { Container, Col } from 'react-bootstrap';
import { CustomRow, Chart } from './styles';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import StatisticText from '../../../components/StatisticText';

const ChartSection = () => {
    return (
        <Container>
            <CustomRow>
                <Chart sm={6} lg={12} md={12} xs={6} >
                    <CircularProgressbarWithChildren strokeWidth={2} value={75}>
                        <StatisticText value={75} topText="ACCURACY" baselineText="%" />
                    </CircularProgressbarWithChildren>
                </Chart>
                <Col sm={6} lg={12} md={12} xs={6} >A</Col>
            </CustomRow>
        </Container>
    )
}

export default ChartSection;