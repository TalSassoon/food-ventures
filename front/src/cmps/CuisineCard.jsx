import React from 'react'

export function CuisineCard({ cuisine }) {

  return (
    <div className="cuisine-card">
      <h3 style={{ textTransform: 'capitalize' }}>{cuisine.name}</h3>
      <img className="cuis-pic" src={`${cuisine.imgUrl}`} alt="" />
    </div>
  )
}