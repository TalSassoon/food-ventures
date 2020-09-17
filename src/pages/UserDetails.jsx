import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { userService } from '../services/userService'

class _UserDetails extends Component {

  state = {
    user: null
  }

  async componentDidMount() {
    const { userId } = this.props.match.params
    const user = await userService.getById(userId)
    this.setState({ user })
  }

  render() {

    const { user } = this.state;
    if (!user) return <div>Loading...</div>

    return (
      <div className="user-details">
        <h3>Details for {user.fullName}</h3>
        <div className="chef-pic-preview">
          <img src={`${user.imgUrl}`} alt="" style={{ width: '150px' }} />
          <div>{'⭐'.repeat(user.chef.rating)}</div>
          <div>{user.chef.tags.join(',')}</div>
        </div>
        <Link to="/reservation">BOOK NOW</Link>
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.userReducer.users
  }
}

const mapDispatchToProps = {

}

export const UserDetails = connect(mapStateToProps, mapDispatchToProps)(_UserDetails)