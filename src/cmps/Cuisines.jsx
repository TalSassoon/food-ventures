import React, { Component } from 'react'
import { userService } from '../services/userService'
import { CuisineCard } from './CuisineCard'

export class Cuisines extends Component {

  state = {
    cuisines: null
  }

  componentDidMount() {
    this.setState({ cuisines: userService.getCuisines() })
  }


  render() {

    const { cuisines } = this.state
    if (!cuisines) return <div>Loading...</div>

    return (
      <div className="cuisines card-grid" style={{padding: '50px 0'}}>
        {
          cuisines.map(cuisine => <CuisineCard key={cuisine.id} cuisine={cuisine} />)
        }
      </div>
    )
  }
}
