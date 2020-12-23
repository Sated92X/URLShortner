import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';


class SideBar extends React.Component {
  render() {
    return (
        <div className="sidebar-content">
        	<Row className="sidebar-row">
        		<Col>
            		<Link to="/home" className="side-bar-link h2">Home</Link>
            	</Col>
            </Row>
            <Row className="sidebar-row">
            	<Col>
            		<Link to="/about" className="side-bar-link h2">About</Link>
            	</Col>
            </Row>
        </div>
    );
  }
}

const sidebar = withRouter(SideBar);
export default sidebar;
