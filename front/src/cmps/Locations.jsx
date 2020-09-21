import React, { Component } from 'react'
import { userService } from '../services/userService'
import { LocationCard } from './LocationCard'

export class Locations extends Component {

  state = {
    locations: null
  }

  componentDidMount() {
    this.setState({ locations: userService.getLocations() })
  }


  render() {

    const { locations } = this.state
    if (!locations) return <div>Loading...</div>

    return (
      <div className="locations card-grid" style={{ padding: '50px 0' }}>
        {
          locations.map(location => <LocationCard key={location.id} location={location} />)
        }
      </div>
    )
  }
}
