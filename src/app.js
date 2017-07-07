import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View, Text } from 'react-native';
import reducers from './reducers';
import firebase from 'firebase';

class App extends Component{

	componentWillMount(){
		// Initialize Firebase
	  const config = {
	    apiKey: 'AIzaSyAKVZr3v2TePkF3kDZ0-Obr_ltzPHkBGDE',
	    authDomain: 'manager-154fc.firebaseapp.com',
	    databaseURL: 'https://manager-154fc.firebaseio.com',
	    projectId: 'manager-154fc',
	    storageBucket: 'manager-154fc.appspot.com',
	    messagingSenderId: '492235088441'
	  };
	  firebase.initializeApp(config);
	}

	render(){
		return(
			<Provider store={ createStore(reducers) }>
				<View>
					<Text>
						Hello!
					</Text>
				</View>
			</Provider>
		);
	}
}

export default App;