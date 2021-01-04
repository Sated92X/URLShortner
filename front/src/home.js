import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sent: false,
      url: "",
    }
  }

  handleValueChange = ( {target: { value } }) => {
    this.setState({ url: value });
  }

  handleClick = () =>{
    if ( !this.state.sent ) {
      this.setState({ sent: true });
      axios.post( process.env.API_URL+'/sendLink', {
        url: this.state.url,
      }).then( (response) => {
        console.log('bravo');
      }).catch( (error) => {
        console.log('error');
      }).then( () => {
        this.setState({ sent: false });
      });

    }
  }

  render() {
    return (
      <div className="home">
        <Row className="justify-content-md-center align-middle home-row">
          <Col md={12} lg={6}>
              <Form className="home-form">
                <h2 className="h2 home-title"> Welcome to QuickLink !</h2>
                <Form.Group>
                  <Form.Control type="url" placeholder="Make a quick link !" onChange={this.handleValueChange} value={this.state.url} />
                </Form.Group>
                <a href="#">Advance settings</a>
                <Button className="home-button" variant="primary" onClick={this.handleClick}>Quick link!</Button>
              </Form>
          </Col>
        </Row>

      </div>
    );
  }
}

export default Home;
