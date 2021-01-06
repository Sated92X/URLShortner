import React from 'react';
import { Form, Row, Col, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sent: false,
      advanced: false,
      url: "",
      desiredUrl: "",
      errorMsg: "",
      errors: {},
    }
  }

  handleValueChange = ( {target: { value } }) => {
    this.setState({ url: value });
  }

  handleDesiredUrlValueChange = ( {target: { value } }) => {
    this.setState({ desiredUrl: value });
  }

  removeError = () => {
    this.setState({ errorMsg: "" })
  }

  toggleAdvance = () => {
    this.setState({ advanced: !this.state.advanced});
  }

  handleClick = () =>{
    const { url, desiredUrl, advanced, sent } = this.state;
    let data = {};
    let errors = {};
    if ( !sent ) {
      if (url.length > 0 && advanced && desiredUrl.length > 0) {
        data = {
          desiredUrl,
          url,
        }
      } else if (url.length > 0 && !advanced){
        data = {
          url,
        };
      }

      if ( advanced && desiredUrl.length == 0){
        errors.desiredUrl = true;
      }

      if (url.length == 0){
        errors.url = true;
      }

      if ( Object.keys(data).length > 0) {
        this.setState({ sent: true, errors: {} });
        axios.post( process.env.API_URL+'/ajouterliens', data).then( (response) => {
          console.log('bravo');
          this.setState({ sent: false });
        }).catch( (error) => {
          if (error.response) {
            this.setState({ sent: false, errorMsg: 'Server errror'})
          } else {
            this.setState({ sent: false, errorMsg: 'Error connecting with the server'})
          }
         
        });
      } else {
        this.setState({ errors });
      }
    }
  }

  render() {
    const { errors, errorMsg, advanced, url, desiredUrl } = this.state;

    return (
      <div className="home">
        <Row className="justify-content-md-center align-middle home-row">
          <Col md={12} lg={6}>
              <Form className="home-form">
                <h2 className="h2 home-title"> Welcome to QuickLink !</h2>
                <Form.Group>
                  <Form.Control className="home-input" type="url" placeholder="Make a quick link !" onChange={this.handleValueChange} value={url}  isInvalid={errors.url}/>
                  {advanced && 
                     <Form.Control className="home-input" type="url" placeholder="Desired url name" onChange={this.handleDesiredUrlValueChange} value={desiredUrl} isInvalid={errors.desiredUrl}/>
                  }
                </Form.Group>
                { errorMsg.length > 0 &&
                  <Alert key={1} variant={'danger'} onClose={() => this.removeError()} dismissible>
                    {errorMsg}
                  </Alert>
                }
                <button type="button" className="btn btn-link" onClick={this.toggleAdvance}>{ advanced ? 'Basic settings' :'Advance settings' }</button>
                <Button className="home-button" variant="primary" onClick={this.handleClick}>Quick link!</Button>
              </Form>
          </Col>
        </Row>

      </div>
    );
  }
}

export default Home;
