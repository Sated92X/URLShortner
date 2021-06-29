import React from 'react';
import { Row, Col } from 'react-bootstrap';

class About extends React.Component {


  render() {

    return (
      <div className="about">
        <Row className="justify-content-md-center align-middle home-row">
          <Col md={12} lg={6}>
            <div className="about-container">
              <h2 className="h2 about-title"> What is QuickLink?</h2>
              <span>
              QuickLink is a project by two software engineering student to make our own 
              url shortner from scratch and learn new technology. We also decided to make something useful for 
              the community.
              </span>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default About;
