import React from 'react'
import { Link } from 'react-router-dom'
import { LongTxt } from './LongText'

export function UserPreview({ user }) {
  return (
    <div className="user-preview card" style={{ border: '1px solid #b5b6ba' }}>
      <Link to={`/details/${user._id}`}>
        <div>
          <img className="user-preview-food" src={`${user.chef.imgs[0]}`} alt="" />
        </div>
        <div className="user-preview-details flex p10">
          <div>
            <img className="icon" src={`${user.imgUrl}`} alt="" />
          </div>
          <div style={{ marginLeft: '10px' }}>
            <h3 style={{ textTransform: 'capitalize' }}>Chef {user.fullName}</h3>
            <p>{user.chef.rating >= 4 ? 'Highly rated' : ''}</p>
          </div>
        </div>
        <LongTxt text={user.chef.description} />
        {/* {user.chef.description.map(ta)} */}
        <p className="p10" style={{ color: '#ffbf00' }}><i className="fas fa-star"></i> {user.chef.rating.toFixed(1)} <span style={{ color: '#b5b6ba' }}>({user.chef.ratingNum} ratings)</span></p>
        <div className="flex-between p10" style={{ borderTop: '1px solid #b5b6ba' }}>
          <i className="fas fa-heart flex-center" style={{ color: '#b5b6ba' }}></i>
          <p>Starting at ${user.chef.price}</p>
        </div>
      </Link>
    </div>
  )
}