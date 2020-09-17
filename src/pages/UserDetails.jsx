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
    this.setState({ user }, ()=> console.log(user[0].imgUrl))
    
  }

  render() {

    const { user} = this.state;
    if (!user) return <div>Loading...</div>

    return (
      <div className="user-details">
        <h3>Details for {user[0].fullName}</h3>
        <div className="chef-pic-preview">
          <img src={user[0].imgUrl} alt="chef profile picture" style={{maxWidth:100}}/>
        <div>{'⭐'.repeat(user[0].chef.rating)}</div>
    <div>{user[0].chef.tags.join(',')}</div>
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


// ⭐
// _id: 'v140',
// fullName: 'Jaime Oliver',
// userName: 'chef1',
// password: 'secret',
// joinedAt: 32332,
// imgUrl: '',
// chef: {
//   imgUrl: '',
//   description: 'Big batata',
//   tags: ['sushi', 'asian', 'sea food'],
//   location: { lang: 26, lat: 27, name: 'world'},
//   price: 0,
//   rating: 5