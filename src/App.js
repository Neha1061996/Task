import React from 'react';
import './App.css';
import firebase from 'firebase';
import FilledTextFields from './Register/Register';
import Firstpage from './FirstPage/Firstpage';
import Home from  './Register/Home';
import fire from './Config/Config'

// firebase.initializeApp(config);
class  App extends React.Component {
  constructor(props){
    super(props);
    this.authListener = this.authListener.bind(this);
}state = {
 
  user: null,
};
componentDidMount(){
  this.authListener();
}

authListener(){
  fire.auth().onAuthStateChanged((user) => {
    if(user){
      this.setState({user});
    } else {
      this.setState({user:null});
    }
  })

}
  
  render(){
    return (
      <div>
        {this.state.user? (<Home/>): (<Firstpage/>)}
        
        
      </div>
    );
  }
 
}

export default App;
