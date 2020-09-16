import React from 'react'
import { Link } from 'react-router-dom'

export function UserPreview({ user }) {
  return (
    <div className="user-preview">
      <Link to={`/details/${user._id}`} ><h3 style={{textTransform: 'capitalize'}}>Name {user.fullName}</h3></Link>
    </div>
  )
}