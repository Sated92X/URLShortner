import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
class Home extends React.Component {

  render() {
    return (
      <div className="home">
        <Row className="justify-content-md-center align-middle home-row">
          <Col md={12} lg={6}>
              <Form className="home-form">
                <h2 className="h2 home-title"> Welcome to QuickLink !</h2>
                <Form.Group>
                  <Form.Control type="url" placeholder="Make a quick link !" />
                </Form.Group>
                <a href="#" class="stretched-link">Advance settings</a>
                <Button className="home-button" variant="primary">Quick link!</Button>
              </Form>
          </Col>
        </Row>

      </div>
    );
  }
}

export default Home;
