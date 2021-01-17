import React, { useState, useEffect } from 'react';
import list from '../nyse-listed_json.json'
import { useHistory, withRouter } from "react-router-dom";
import { Bar, Line } from 'react-chartjs-2';
const axios = require('axios');


function Specific(props) {

    const history = useHistory();
    let [volume, setVolume] = useState(0);
    let [newpriceArray, setPriceArray] = useState()
    let [newdateArray, setdateArray] = useState(() => { })
    let [bait, setbait] = useState("")
    let data = null;
    let priceArray = []
    let dateArray = []

    useEffect(() => {
        searchReq()
        stock()
        const interval = setInterval(() => {
            searchReq()
        }, 10000);
        return () => clearInterval(interval);
    }, [bait])

    async function searchReq() {
        await axios.get('/!' + localStorage.getItem("symb")).then
            (async (response) => {
                console.log(response.data)
                await props.pricing(response.data)
            }).catch(function (error) {
                console.log(error);
            })
    }


    async function stock() {
        // const b = interval
        var a = localStorage.getItem("symb")
        axios.get('/stock/history/' + a).then((response) => {
            data = response.data
            for (var i = 0; i < data.length; i++) {
                priceArray.push(data[i].close)
                dateArray.push((data[i].date))
            }
            setdateArray(dateArray);
            setPriceArray(priceArray);
        })
    }
    async function buy() {
        // if()
        axios.post('/addstock', {
            name: localStorage.getItem("symb"),
            user_id: localStorage.getItem("id"),
            volume: volume
        }).then((response) => {
            console.log(response)
        })
        history.push('/portfolio')
    }



    return (
        <div style={{ backgroundColor: 'white' }}>
            <div style={{
                borderStyle: 'solid',
                maxWidth: '800px',
                borderColor: ' rgb(144, 202, 249)',
                marginLeft: "20%", marginTop: "2%"
            }}>
                <Line

                    data={{
                        labels: newdateArray,
                        datasets: [
                            {
                                label: 'Stock Price',
                                data: newpriceArray,
                                backgroundColor: [
                                    'rgb(66, 165, 245)'
                                ],
                                borderColor: [
                                    'rgb(13, 71, 161)'
                                ],
                                borderWidth: 3
                            }
                        ]
                    }}
                    height={500}
                    width={600}
                    options={{
                        maintainAspectRatio: true
                    }} />
                <div style={{ marginLeft: "37%" }} class="row">
                    <div class="col s12 m6">
                        <div style={{ color: 'white', height: '200px', maxWidth: '200px' }} class="card blue">
                            <div class="card-content white-text">

                                {localStorage.getItem("symb")} ${props.stockworth}/share

        <form onSubmit={() => { buy() }}>
                                    $
        <input style={{ textAlign: 'center', width: "40%" }} type="text" value={volume} onChange={(event) => {
                                        setVolume(event.target.value)
                                    }} />
                                    <button style={{ marginLeft: "20%", backgroundColor: 'rgb(118, 255, 3)' }}>Buy</button>
                                </form>


                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default withRouter(Specific);