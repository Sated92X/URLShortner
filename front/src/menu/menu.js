import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

class Menu extends React.Component {
  render() {
    return (
      	<Navbar className="menu">
        	<Navbar.Brand>
        		<Link to="/home">
          			<img src="logo.png" alt="Logo" />
          		</Link>
        	</Navbar.Brand>
        	<Nav>
	        	<Nav.Item className="menu-item">
	        		<Link className="nav-link" to="/home">Home</Link>
	        	</Nav.Item>
	        	<Nav.Item className="menu-item">
	        		<Link className="nav-link" to="/about">about</Link>
	        	</Nav.Item>
	        </Nav>
      	</Navbar>
    );
  }
}

const menu = withRouter(Menu);
export default menu;
