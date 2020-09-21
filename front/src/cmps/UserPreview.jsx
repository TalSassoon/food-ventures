import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { LongTxt } from './LongText'

export class UserPreview extends Component {

  state = {
    isFavorite: false
  }

  addToFav = () => {
    this.setState({ isFavorite: !this.state.isFavorite })
  }

  render() {

    const { user } = this.props

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
              <p>{user.chef.rating >= 4.5 ? 'Highly rated' : ''}</p>
            </div>
          </div>
          <LongTxt text={user.chef.description} />
          <div className="user-preview-tags-container">
            {user.chef.tags.map((tag, idx) => <p className="user-preview-tag" key={idx}>{tag}</p>)}
          </div>
          <p className="user-preview-location">Location - {user.chef.location.name}</p>
          <p className="p10" style={{ color: '#ffbf00' }}><i className="fas fa-star"></i> {user.chef.rating.toFixed(1)} <span style={{ color: '#b5b6ba' }}>({user.chef.ratingNum} ratings)</span></p>
        </Link>
        <div className="flex-between p10" style={{ borderTop: '1px solid #b5b6ba' }}>
          <i className={"fav-heart fas fa-heart flex-center" + (this.state.isFavorite ? ' favorite' : '')} onClick={this.addToFav}></i>
          <p>Starting at ${user.chef.price}</p>
        </div>
      </div>
    )
  }
}