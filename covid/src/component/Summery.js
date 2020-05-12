import React, { Component } from 'react'

class Summery extends Component{
    render(){
        const {summeryData , currentDate} = this.props;
        // console.log(summeryData)
        // console.log(currentDate)
        

        return(
            <div className="row px3">
                
                <div className="card-group">
                    <div className="card-deck">
                        <div className="card bg-light">
                            <div className="card-body text-center">
                                <h3>New Confirmed</h3>
                                <h2 className="card-text text-info">{summeryData.NewConfirmed}</h2>
                                <p className="card-text"> {new Date(currentDate).toDateString() } </p>
                            </div>
                        </div>
                        <div className="card bg-light">
                            <div className="card-body text-center">
                                <h3>Total Confirmed</h3>
                                <h2 className="card-text text-warning">{summeryData.TotalConfirmed}</h2>
                                <p className="card-text"> {new Date(currentDate).toDateString() } </p>
                            </div>
                        </div>
                        <div className="card bg-light">
                            <div className="card-body text-center">
                                <h3>New Deaths</h3>
                                <h2 className="card-text text-danger">{summeryData.NewDeaths}</h2>
                                <p className="card-text"> {new Date(currentDate).toDateString() } </p>
                            </div>
                        </div>
                        <div className="card bg-light">
                            <div className="card-body text-center">
                                <h3>Total Deaths</h3>
                                <h2 className="card-text text-danger">{summeryData.TotalDeaths}</h2>
                                <p className="card-text"> {new Date(currentDate).toDateString() } </p>
                            </div>
                        </div>
                        <div className="card bg-light">
                            <div className="card-body text-center">
                                <h3>Total Recovered</h3>
                                <h2 className="card-text text-success">{summeryData.TotalRecovered}</h2>
                                <p className="card-text"> {new Date(currentDate).toDateString() } </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Summery