import React from 'react'
import {Row, Col} from 'react-bootstrap';
import SelectDropDown from '../../../components/SelectDropDown';
import ProblemSection from "./ProblemSection";

const RightSection = () => {

    const options = [
        {
            id: 1,
            name: "All Topics"
        },
        {
            id: 2,
            name: "Algebra"
        },
        {
            id: 3,
            name: "Geometry"
        },
        {
            id: 4,
            name: "Trigonometry"
        },
        {
            id: 5,
            name: "Arithmetic"
        }
    ]

    return (
       <Row>
           <Col lg={12} sm={12} xs={12} md={12} >
                &nbsp;
           </Col>
           <Col lg={12} sm={12} xs={12} md={12} >
            <Row>
                <ProblemSection />
            </Row>
           </Col>
       </Row>
    )
}

export default RightSection;