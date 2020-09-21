import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Cuisines } from '../cmps/Cuisines'
import { Footer } from '../cmps/Footer'
import { Header } from '../cmps/Header'
import { Locations } from '../cmps/Locations'
// import { Link } from 'react-router-dom'
import { UserList } from '../cmps/UserList'
import { loadUsers } from '../store/actions/userActions'


class _FoodApp extends Component {

  componentDidMount() {
    this.props.loadUsers()
  
  }

  render() {
    const users = this.props.users.slice(0, 4)
    if (!users) return <div>Loading...</div>

    return (
      <div className="app main-container app-container">
        <Header />
        <UserList users={users} />
        <Locations />
        <Cuisines />
        <Footer />
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
  loadUsers
}

export const FoodApp = connect(mapStateToProps, mapDispatchToProps)(_FoodApp)