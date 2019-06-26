import React from 'react';
import fire from '../Config/Config';
import firebase from 'firebase';

// If you have logged in
class Home extends React.Component {
    logout(){
        fire.auth().signOut();

    }

    render(){
        return(
            <div>
                <h1>You have Logged in...</h1>
                <h4 style={{marginTop:'10%', marginLeft:'10%'}}>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</h4>

                <button onClick={this.logout}>Logout
</button>  
            </div>
        )
    }
}
export default Home;