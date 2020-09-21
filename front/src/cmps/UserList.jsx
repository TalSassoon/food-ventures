import React from 'react'
import { UserPreview } from './UserPreview'

export function UserList({ users }) {
  return (
    <div className="user-list card-grid" style={{padding: '20px 0 50px 0'}}>
      {
        users.map(user => <UserPreview key={user._id} user={user} />)
      }
    </div>
  )
}