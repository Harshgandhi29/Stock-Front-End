import React,{useState} from 'react';
import { useAlert } from 'react-alert'
import { useHistory} from "react-router-dom";
import { withRouter} from "react-router-dom";
const axios = require('axios');



function Register(){
  const history = useHistory();
  const [email,setEmail]=useState("")
const [firstname,setFirst]=useState("")
const [lastname,setLast]=useState("")
const [password,setPassword]=useState("")
const [balance,setBalance]=useState(0)
  function registered (event){
    event.preventDefault()
axios.post('/register',{
"email":email,
"password":password,
"firstname":firstname,
"lastname":lastname,
'balance':balance
}).then((response)=>{
  history.push('/login')
})
.catch((err)=>{
  alert('Error Occured')
}

)
  }
  
    return(
  <div  style={{width:'100%',marginLeft:"25%",marginTop:"2%"}}  class="row">
  <div class="col s12 m6">
    <div  class="card white">
      <div class="card-content">
      <div  class="row">
      <h3 style={{textAlign:'center',color:'black'}}><u>Register</u></h3>
      <form onSubmit = {registered} class="col s12">
        <div class="row">
          <div class="input-field col s6">

                  <i class="material-icons prefix">account_circle</i>
                  <input id="first_name"   onChange={event=>setFirst(event.target.value)} type="text" class="validate"/>
                  <label for="icon_prefix" style={{color:'black'}}>First Name</label>

          </div>

          <div class="input-field col s6">

          <i class="material-icons prefix">account_circle</i>
          <input id="last_name"  onChange={event=>setLast(event.target.value)} type="text" class="validate"/>
          <label for="icon_prefix" style={{color:'black'}}>Last Name</label>

          </div>
        </div>
        <div class="row">
        <div class="input-field col s12">
        <i class="material-icons prefix">mail</i>
          <input onChange={event=>setEmail(event.target.value)} id="email" type="email" class="validate"/>
          <label for="icon_prefix" style={{color:'black'}}>Email</label>
        </div>
      </div>

        <div class="row">
          <div class="input-field col s12">
          <i class="material-icons prefix">lock</i>
            <input id="password"  onChange={event=>setPassword(event.target.value)} type="password" class="validate"/>
            <label for="password" style={{color:'black'}}>Password</label>
          </div>
        </div>

        <div class="row">
        <div class="input-field col s12">
        <i class="material-icons prefix">attach_money</i>
          <input onChange={event=>setBalance(event.target.value)} type="text" class="validate"/>
          <label for="icon_prefix" style={{color:'black'}}>Balance</label>
        </div>
      </div>

        <div style = {{textAlign:'center'}}class="row">
          <div class="input-field col s12">
          <button class="btn waves-effect waves-light black" type="submit" name="action">Register</button>
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

    export default withRouter(Register)