import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//import { postEvent } from '../action'

class EventsNew extends Component {

	render(){

	  return (
		  < React.Fragment >
		    <Link to='/'>cancel</Link>
		  < /React.Fragment >
	  );
	}

}

//const mapDispatchToProps = ({ postEvent })

export default connect (null, null)(EventsNew)
