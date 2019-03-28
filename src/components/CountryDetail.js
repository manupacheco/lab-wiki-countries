import React, { Component } from 'react'
import countries from '../data/countries.json'

export default class CountryDetail extends Component {

  state = {
    loading: true,
    country: {}
  }
  
  componentDidMount() {
    const idCountry = this.props.match.params.country
    const infoCountry = countries.find((country)=> country.cca3 === idCountry)
    this.setState({
      loading: false,
      country: infoCountry
    })
  }

  templateInfoCountry = () => {
    const { country } = this.state
    return (
      <div className="col-7">
        <h1>{country.flag} {country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: '30%'}}>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {this.getCountryBorders(country.borders)}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>)
  }

  getCountryBorders = (borders) => {
    if(borders.length === 0){
      return <span style={{color: 'grey', fontStyle: 'italic'}}>** Without borders **</span>
    } else {
      return borders.map((idCountry, i)=>{
        const infoCountry = countries.find((country)=> country.cca3 === idCountry)
        return <li key={i}><a href={`/${idCountry}`}>{infoCountry.name.common}</a></li>
      })
    }
  }

  render() {
    const { loading } = this.state
    return (
      <> { loading ? 'loading...' : this.templateInfoCountry()} </>
    )
  }
}
