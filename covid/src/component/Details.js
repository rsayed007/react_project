import React, { Component } from 'react'
import axios from 'axios'

class Details extends Component{

    state = {
        global: [],
        countries: [],
        currentDate: '',
        loading: true

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

    render(){
        // console.log(this.state.global)
        // console.log(this.state.countries)
        console.log(this.state.currentDate)
        return(
            <div>
                Details
            </div>
        )
    }
}

export default Details