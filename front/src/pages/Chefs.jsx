import React, { Component } from 'react'
import { connect } from 'react-redux'

import { UserList } from '../cmps/UserList'
import { Filter } from '../cmps/Filter'
import { loadUsers } from '../store/actions/userActions'


class _Chefs extends Component {

  state = {
    filterBy: {}
  }

  componentDidMount() {
    this.props.loadUsers()
    window.scrollTo(0,0)
  }

  onSetFilter = (filterBy) => {
    this.setState(prevState => ({ filterBy: { ...prevState.filterBy, ...filterBy } }), () =>  this.props.loadUsers(this.state.filterBy))
  }

  render() {

    const { users } = this.props
    if (!users) return <div>Loading...</div>

    return (
      <div className="main-container">
        <Filter onSetFilter={this.onSetFilter} />
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