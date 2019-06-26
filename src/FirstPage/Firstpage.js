// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import Register from '../Register/Register';

// Configure Firebase.
const config = {
  apiKey: 'AIzaSyCMgNcP8jZkFgYyddUKA4PYureoBsHLjSE',
  authDomain: 'login-aa9ec.firebaseapp.com',
  // ...
};
// firebase.initializeApp(config);


class Firstpage extends React.Component {
constructor(){
    super();
    this.calling= this.calling.bind(this);
}


  // The component's Local state.
  state = {
    isSignedIn: false, // Local signed-in state.
     loggg: false
  };

  calling(){
      this.setState({
          loggg:true
      })
  }
  


  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
      
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    if (!this.state.isSignedIn) {
      return (
        <div style={{backgroundColor:'#808080', width:'70%', height:'80vh', marginLeft:'15%'}}>
         <div style={{ backgroundColor:'#00FFFF'}}> <h1 style={{marginLeft:'40%' }}>LogIn</h1></div>
          <h3 style={{marginLeft:'35%'}}>Please sign-in:</h3>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
          <h3 style={{marginLeft:'40%'}}>Or</h3>
          
         <span> 
          <button style={{marginLeft:'10%'}} onClick={this.calling}>Sign Up</button></span>
          {this.state.loggg? <Register/>: null }
        </div>
      );
    }
    return (
      <div style={{backgroundColor:'#808080', width:'50%', height:'50vh', marginLeft:'15%'}}>
        <div style={{backgroundColor:'#00FFFF'}}><h1 style={{marginLeft:'45%'}}>LogIn</h1></div>
        <h4 style={{marginTop:'10%', marginLeft:'10%'}}>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</h4>
        <a onClick={() => firebase.auth().signOut()}><button style={{marginLeft:'15%'}}>Sign-out</button></a>
      </div>
    );
  }
}
export default Firstpage;