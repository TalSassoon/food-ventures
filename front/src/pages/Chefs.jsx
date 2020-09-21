import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import { UserList } from '../cmps/UserList'
import { loadUsers } from '../store/actions/userActions'


class _Chefs extends Component {

  componentDidMount() {
    this.props.loadUsers()
  }

  render() {

    const { users } = this.props
    if (!users) return <div>Loading...</div>

    return (
      <div className="main-container">
        <UserList users={users} />
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

export const Chefs = connect(mapStateToProps, mapDispatchToProps)(_Chefs)