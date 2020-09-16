import React from 'react'
import { UserPreview } from './UserPreview'

export function UserList({ users }) {
  return (
    <div className="user-list">
      {
        users.map(user => <UserPreview key={user._id} user={user} />)
      }
    </div>
  )
}