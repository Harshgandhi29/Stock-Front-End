import React,{useState,useEffect} from 'react';
import list from '../nyse-listed_json.json'
import { useHistory,withRouter } from "react-router-dom";
localStorage.setItem('loc',1)
console.log(localStorage.getItem("loc"))
const axios = require('axios');
console.log(localStorage.getItem('id'))
function Stock(props){
    let history = useHistory();
    const [search,setSearch]= useState("");
    const [clicked,setClicked]= useState("");


    function searchChange (event) {
        
       setSearch(event.target.value)
       
    }


    function clickedChange (event){
      setClicked(event.target.value)
    }
    


    return(
        <div  style={{width:'53%',marginLeft:"25%",marginTop:"2%"}} >
        <input style = {{width:'80%'}}type="text" placeholder="Search A Stock"  onChange={searchChange}/>
        <a onClick={async()=>{
            if(clicked===""){
                   alert('Choose a symbol')
            }
            else{
             localStorage.setItem('symb',clicked)
            history.push('/specific')
            }

        }} class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">search</i></a>
        {list.filter((val)=>{
            if(search===""){
                return ""
            }
            else if (val.Symbol.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                return val
            }
        }).slice(0,5)
            .map((val,key)=>{
            return <div><button onClick={(event)=>{
                clickedChange(event)
            }} style={{width:'80%',marginTop:"2%"}} value = {val.Symbol} >{val.Symbol}</button></div>
        {           console.log(clicked)}
        })}
        </div>
    )}

export default withRouter(Stock);