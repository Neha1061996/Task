import React from 'react';
import Login from '../Login/Login';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import fire from '../Config/Config';
import './Register.css';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
}));

export default function FilledTextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: 'Neha ',
    name1: 'nea@',
    number:1234567890,
    lastname:'Kumari',
    date: '23-06-2015',
    email:' ',
   
   

  });
  

  const handleChange = name1 => event => {
    setValues({ ...values, [name1]: event.target.value });
  };
  const handleChangename = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const handleChangenumber = number => event => {
    setValues({ ...values, [number]: event.target.value });
  };
  const handleChangelastname = lastname => event => {
    setValues({ ...values, [lastname]: event.target.value });
  };
  const handleChangedate= date => event => {
    setValues({ ...values, [date]: event.target.value });
  };
  const handleChangeemail= email => event => {
    setValues({ ...values, [email]: event.target.value });
  };
  const handleChangepassword= password => event => {
    setValues({ ...values, [password]: event.target.value });
  };



  const handlesignUp=()=>{
      const email = document.querySelector("#email").value;
      const fname = document.querySelector("#fname").value;
      const lnmae = document.querySelector("#lname").value;
      const phone = document.querySelector("#phone").value;
      const username = document.querySelector("#username").value;
fire.auth().createUserWithEmailAndPassword(email, 'heyJD1012345#').then((u)=>{
    console.log("Successfully Logged in");
})
.catch((err)=>{
    console.log("Error: " + err.toString());
})
  }

  return (
      <div>
          <Login/>
          <div className='register'>
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
      required
      style={{marginLeft:'45%'}}
        id="username"
        label="UserName"
        className={classes.textField}
        value={values.name1}
        onChange={handleChange('name1')}
        margin="normal"
        variant="filled"
      />
      
      <TextField
      required
      style={{marginLeft:'45%'}}
        id="fname"
        label="FirstName"
        className={classes.textField}
        value={values.name}
        onChange={handleChangename('name')}
        margin="normal"
        variant="filled"
      />
      
      <TextField
      style={{marginLeft:'45%'}}
      label="Phone-Number"
      className={classes.textField}
      type="tel" id="phone"
       name="phone"
       value={values.number}
       onChange={handleChangenumber('number')}
      pattern="[0-9]{10}"
      margin="normal"
        variant="filled"
      />
      <TextField
      required
      style={{marginLeft:'45%'}}
        id="lname"
        label="LastName"
        className={classes.textField}
        value={values.lastname}
        onChange={handleChangelastname('lastname')}
        margin="normal"
        variant="filled"
      />
     
      <TextField
      style={{marginLeft:'45%'}}
      type='date'
      id="dob"
        label="DOB"
        className={classes.textField}
        margin="normal"
        variant="filled"
        value={values.date}
        onChange={handleChangedate('date')}
        margin="normal"
        variant="filled"
  
      />
      
      <TextField
      required
      style={{marginLeft:'45%'}}
        id="email"
        label="Email"
        className={classes.textField}
        type="email"
        name="email"
        value={values.email}
        onChange={handleChangeemail('email')}
        autoComplete="email"
        margin="normal"
        variant="filled"
      />
      
    </form>
    </div>
    {/* <button onClick={handlelogin}>Login</button> */}
    <button onClick={handlesignUp} style={{backgroundColor:'#00FFFF'}} className='sign'>Sign Up</button>
    <div style={{backgroundColor:'#FFFFCC',width:'100%',height:'3%', color:'#FFFFCC'}}>........</div>
    </div>
  );
}
