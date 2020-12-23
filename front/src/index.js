import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/index.scss';
import SideBar from './menu/sidebar';
import Menu from './menu/menu';
import Home from './home';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { createBrowserHistory } from "history"

ReactDOM.render((
    <Router>
        <Menu />
        <Container>
            <Row>
                <Col className="sidebar" md={0} lg={2}>
                    <SideBar />
                </Col>
                <Col className="content" md={12} lg={10} >
            		<Switch>
                	    <Route exact path="/" component = {Home} />
                	    <Route path="/home" component = {Home} />
                	    <Route path="/about">
            	           <div> allo</div> 
            	        </Route>
            	    </Switch>
                </Col>
            </Row>
        </Container>
   </Router>
), document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
