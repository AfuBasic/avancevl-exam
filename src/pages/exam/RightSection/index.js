import React from 'react'
import {Row, Col} from 'react-bootstrap';
import SelectDropDown from '../../../components/SelectDropDown';

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
           <Col>
                <SelectDropDown options={options}/>
           </Col>
       </Row>
    )
}

export default RightSection;