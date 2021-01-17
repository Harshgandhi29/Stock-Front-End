import React,{useState,useEffect} from 'react';
import { useAlert } from 'react-alert'
import { useHistory} from "react-router-dom";
import { withRouter} from "react-router-dom";
const axios = require('axios');

function Portfolio(){   
    let listedItems = [] ;
    let [balance,setbalance] = useState("balance")
    let [buyhistory,setbuy] = useState([])
    let [sellhistory,setsell] = useState([])
    useEffect(() => {
        (async ()=>{
            await getBalance()
            await getBuyHistory()
        })()
    
    }, [])

    function getBalance(){
        axios.put('/getbalance',{
            id:localStorage.getItem('id')
        }).then((response)=>{
           setbalance(response.data[0].balance)
        })
    }
    
    function getBuyHistory(){
        axios.put('/buyhistory',{
            id:localStorage.getItem('id')
        }).then((response)=>{
            // console.log(response.data)
         response.data.map((data,index)=>
        <div> {listedItems.push(data)} {console.log(listedItems[index])} </div>
         )
         {console.log(listedItems)}
         setbuy(listedItems)
        })
    }
    function getSellHistory(){
        axios.put('/sellhistory',{
            id:localStorage.getItem('id')
        }).then((response)=>{
            setsell(response.data)
          //onsole.log(getSellHistory)
        })
    }
      return(   
          <div>
          {console.log('below')}
          {console.log(listedItems)}
          ${balance}
        ${
            buyhistory.map((data,index)=>
           
            <div class="collection">
            { console.log(data)}
            <a href="#!" class="collection-item">{data.name}</a>
            <a href="#!" class="collection-item active">{data.price}</a>
          </div>
            )  
        }
          </div>
      )
}
export default withRouter(Portfolio)