import React, { Component } from 'react'
import axios from 'axios'

// component 
import Summery from './Summery'
import Countries from './Countries'

class Details extends Component{

    state = {
        global: [],
        countries: [],
        currentDate: '',
        loading: true,
        search: ""

    }
    componentDidMount(){
        axios.get("https://api.covid19api.com/summary")
            .then(res => {
                
                this.setState({
                    global: res.data.Global,
                    countries: res.data.Countries,
                    currentDate: res.data.Date,
                    loading: false
                })
            })
    }

    // onchange = e =>{
    //     this.setState({ search:e.target.value });
    // }
    
    
    render(){
        // console.log(this.state.search)
        // console.log(this.state.global)
        // console.log(this.state.countries)
        // console.log(this.state.currentDate)
        
        if (this.state.loading) {
            return(
                <h2>loading ... </h2>
            )
        }

        return(
            <div style={{paddingTop:"15px"}}>
                <h2>Today is {new Date(this.state.currentDate).toDateString()}</h2>
                <Summery summeryData={this.state.global} currentDate={this.state.currentDate} />

                {/* <input label="search country" onChange={this.onchange} /> */}

                <div style={{paddingTop: "20px"}}>
                    <table className="table table-bordered" >
                        <thead>
                            <tr>
                                <th>Country Name</th>
                                <th>New Confirmed</th>
                                <th>Total Confirmed</th>
                                <th>New Deaths</th>
                                <th>Total Deaths</th>
                                <th>New Recovered</th>
                                <th>Total Recovered</th>
                            </tr>
                        </thead>

                        
                        { 
                        
                        this.state.countries.map( countryData =>{
                            // console.log(countryData.Country);
                            return  <Countries search={this.state.search} countries={countryData} key={countryData.Country} />
                        })}
                    </table>
                </div>
            </div>
        )
    }
}

export default Details