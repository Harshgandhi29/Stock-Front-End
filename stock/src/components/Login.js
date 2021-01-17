import React,{useState} from 'react';
import { useAlert } from 'react-alert'
import { useHistory} from "react-router-dom";
import { withRouter} from "react-router-dom";
const axios = require('axios');

function Login(){
  const [email,setEmail]=useState("")
  const[pass,setPass]=useState("")
  const history = useHistory();

  function loggedin (event){
    event.preventDefault()
    axios.post('/register/login',{
      "email":email,
      "password":pass
    }).then((response)=>{
      console.log('below')
      console.log(response.data[0][0].id)
      if(response.data[1]==false){
        alert(response.data[0])
      } 
      else{
      localStorage.setItem("id",response.data[0][0].id);
      console.log(localStorage.getItem('id'))
      history.push('/stock')}

    })
  }
    return(
        <div  style={{width:'100%',marginLeft:"25%",marginTop:"2%"}}  class="row">
        <div class="col s12 m6">
          <div class="card white">
            <div class="card-content black-text">


            <div  style={{width:'40%',margin:"0px auto"}}class="row">
           
            <form onSubmit ={loggedin} class="col s12">
            <h3 style={{textAlign:'center',color:'black'}}><u>Login</u></h3>
              <div class="row">
              <div class="input-field col s12">
              <i class="material-icons prefix">mail</i>
                <input onChange= {event=>setEmail(event.target.value)} id="email" type="email" class="validate"/>
                <label for="icon_prefix" style={{color:'black'}}>Email</label>
              </div>
            </div>

              <div class="row">
                <div class="input-field col s12">
                <i class="material-icons prefix">lock</i>
                  <input onChange= {event=>setPass(event.target.value)}  id="password" type="password" class="validate"/>
                  <label for="password" style={{color:'black'}}>Password</label>
                </div>
              </div>

              <div  style = {{textAlign:'center'}}class="row">
              <div class="input-field col s12">
              <button class="btn waves-effect waves-light black" type="submit" name="action">Login</button>
              </div>
            </div>

            </form>
           </div>


            </div>
          </div>
        </div>
      </div>

    )
}
export default withRouter(Login)