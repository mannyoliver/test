import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import  ReduxThunk  from 'redux-thunk';
import firebase from 'firebase'

import Navigate from './src/Nav/Navigate';
import reducers from './src/reducers';


export default class App extends React.Component {
 
 
  // eslint-disable-next-line react/no-deprecated
  componentWillMount(){
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyAjTz-oz7eVX7NUhv-aSczKdzxaa6h-nDY",
      authDomain: "test-1090c.firebaseapp.com",
      databaseURL: "https://test-1090c.firebaseio.com",
      projectId: "test-1090c",
      storageBucket: "test-1090c.appspot.com",
      messagingSenderId: "1029226106619",
      appId: "1:1029226106619:web:ac4d000696ed75df"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

}
 
 
  render() {

    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>

           <Navigate/>
      </Provider>
    );
  }
}


