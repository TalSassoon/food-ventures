import React from 'react'

export function LocationCard({ location }) {

  return (
    <div className="location-card">
      <h3 style={{ textTransform: 'capitalize' }}>{location.name}</h3>
      <img className="loc-pic" src={`${location.imgUrl}`} alt="" />
    </div>
  )
}