import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { CustomRow, Chart } from './styles';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import StatisticText from '../../../components/StatisticText';
import 'react-circular-progressbar/dist/styles.css';

const ChartSection = () => {
    return (
        <Container>
            <CustomRow>
                <Chart sm={6} lg={12} md={12} xs={6} >
                    <CircularProgressbarWithChildren strokeWidth={2} value={75}
                        styles={buildStyles({
                            strokeLinecap: 'butt',
                            pathColor: `#0C99ED`,
                            textColor: '#f88',
                            trailColor: '#444',
                            backgroundColor: '#3e98c7',
                          })}
                    >
                        <StatisticText value={75} topText="accuracy" baselineText="%" />
                    </CircularProgressbarWithChildren>
                </Chart>
                <Col sm={6} lg={12} md={12} xs={6} className="flex">
                    <CustomRow>
                        <Col className="p-1" sm={12} lg={12} md={12} xs={12}>
                            <StatisticText value={100} topText="completed" baselineText="problems" />
                        </Col>
                        <Col sm={12} lg={12} md={12} xs={12}>
                            <StatisticText value={75} topText="correct" baselineText="problems" />
                        </Col>
                    </CustomRow>
                </Col>
            </CustomRow>
        </Container>
    )
}

export default ChartSection;