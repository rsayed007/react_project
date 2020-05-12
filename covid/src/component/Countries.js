import React, { Component } from 'react'

class Countries extends Component{

    render(){
        const {countries} = this.props;

        // console.log(countries.Country)
        return(
            <tbody>
                <tr>
                    <td>{countries.Country}</td>
                    <td>{countries.NewConfirmed}</td>
                    <td>{countries.TotalConfirmed}</td>
                    <td>{countries.NewDeaths}</td>
                    <td>{countries.TotalDeaths}</td>
                    <td>{countries.NewRecovered}</td>
                    <td>{countries.TotalRecovered}</td>
                </tr>
            </tbody>
        )
    }
}

export default Countries