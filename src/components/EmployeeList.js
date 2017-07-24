import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { employeeFetch } from '../actions';

class EmployeeList extends Component {

	componentWillMount() {
		this.props.employeesFetch();
	}

	render(){
		return(
			<View>
				<Text>Employee List</Text>
				<Text>Employee List</Text>
				<Text>Employee List</Text>
				<Text>Employee List</Text>
				<Text>Employee List</Text>
			</View>
		);
	}
}

export default connect(null, { employeeFetch }) (EmployeeList);