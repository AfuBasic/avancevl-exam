import React from 'react'
import { Col, Button } from 'react-bootstrap';
import { ProblemContainer, TopSection, BodySection, Tags, Tag, CodeInput } from './styles';
import { icons } from '../../../assets';
import ReactCodeInput from 'react-code-input';

const ProblemSection = () => {
    return (
        <ProblemContainer>
            <TopSection>
                <Col className="p-0">
                    <p>Arithmetic</p>
                    <p>Real Problem</p>
                </Col>
                <Col className="text-right p-0 d-none d-lg-block d-md-block">
                    <Button className="btn-custom"><img width="10" src={icons.PIE_ICON} alt="pie icon" />Formula</Button>
                </Col>
                <Button className="d-block d-sm-none btn-custom mobile"><img width="20" src={icons.PIE_ICON} alt="pie icon" /></Button>

            </TopSection>
            <BodySection>
                <Col xs={12} sm={12} lg={6} md={6}>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                </p>
                <div>
                    Placeholder for image
                </div>
                <Tags>
                    <Tag>Tag A</Tag>
                    <Tag>Tag B</Tag>
                    <Tag disabled>Tag C</Tag>
                </Tags>
                </Col>
                <Col xs={12} sm={12} lg={6} md={6}>
                    <CodeInput>
                        <ReactCodeInput type='number' fields={4} />
                    </CodeInput>
                </Col>
            </BodySection>
        </ProblemContainer>
    );
}

export default ProblemSection;