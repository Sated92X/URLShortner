import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
class Home extends React.Component {

  render() {
    return (
      <div className="home">
        <Row className="justify-content-md-center align-middle home-row">
          <Col sm={12} md={8} xl={6}>
              <Form className="home-form">
                <h2 className="h2 home-title"> Welcome to QuickLink !</h2>
                <Form.Group>
                  <Form.Control type="url" placeholder="Make a quick link !" />
                </Form.Group>
              </Form>
          </Col>
        </Row>

      </div>
    );
  }
}

export default Home;
