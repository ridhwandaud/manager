import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { View, Text } from 'react-native';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component{

	componentWillMount(){
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

		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return(
			<Provider store={store}>
				<View>
					<Header headerText='Manager' />
					<LoginForm />
				</View>
			</Provider>
		);
	}
}

export default App;