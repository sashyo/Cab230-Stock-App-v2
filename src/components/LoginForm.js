import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../styles/LoginForm.css";
import jwt from "jsonwebtoken";

function LoginForm() {
    //set states
    const [email,setEmail] =useState("");
    const[password, setPassword] =useState("");
    const url = `http://131.181.190.87:3000/user/login`;
    const [message, setMsg] = useState("");
    

    //update login input states
    
    /*
    function updateLogin(e) {
    let inputEmail = e.target.email.value;
    let inputPwd = e.target.password.value;

    setEmail(inputEmail);
    setPassword(inputPwd);
    login();
        
        
    }*/

    const data={
      email: email,
      password: password
    }

    
    

    function login(){
        fetch(url,{
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body:JSON.stringify(data)
                
               
            })
            .then((res)=> res.json())
            .then((res)=>{
              if(res.token === undefined){
                alert("error");
              }else{
              localStorage.setItem("token", res.token)
            }})
            
            /*
        .then(function(res) {
            //display response in console
            console.log("Login Fetch Response:");
            console.log(res);
  
            //set state to response message
            setMsg(res.message);
          })
          
  
          // if there was an error
          .catch(function(error) {
            // display error message in console
            console.log("Login Fetch Error:");
            console.log(error);
  
            // set state to response message
            setMsg(error.message);
          });*/
      }
      function Message(props) {
        return (
          <div>
            <p>{props.message}</p>
          </div>
        );
      }


  
  
  
  
  
    return (
      

      

    <div className="contentWrapper">
      <div className='page_title'>
        <h1>
          Log In
        </h1>
      </div>
      <div className='loginInput'>
          <form onSubmit={(event) =>{
              event.preventDefault();
              login();
              
              
          }}
          
          >
          <label htmlFor="email">Email </label>
          <br></br>
          <input id='email' name="email" type="email" value = {email} onChange={(event) =>{
            setEmail(event.target.value)

          }}/>
          <br></br>
          <label htmlFor="password">Password </label>
          <br></br>
          <input id='password' name="password" type="password"value = {password} onChange={(event) =>{
            setPassword(event.target.value)

          }}/>
          <br></br>

          <br></br>

          <Button type="submit">Log in</Button>

          </form>
          <Message message= {message}/>
     
      </div>

     
    </div>
  );
  }

export default LoginForm;
