import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ChefGallery } from "../cmps/ChefGallery";
import { userService } from "../services/userService";
import { OrderDate } from "../cmps/Calender";
class _UserDetails extends Component {
  state = {
    user: null,
  };

  async componentDidMount() {
<<<<<<< HEAD
    const { userId } = this.props.match.params
    const user = await userService.getById(userId)
    this.setState({ user })
    
=======
    const { userId } = this.props.match.params;
    const user = await userService.getById(userId);
    this.setState({ user });
>>>>>>> e2da51c89b9961c26552d9b8b224e1f6533af901
  }

  render() {
    const { user } = this.state;
    if (!user) return <div>Loading...</div>;

    return (
      <div className="user-details">
        <h3>Details for {user.fullName}</h3>
        <div className="chef-gal-details">
          <div className="chef-pic-preview">
            <img src={`${user.imgUrl}`} alt="" style={{ width: "150px" }} />
            <div>{"⭐".repeat(user.chef.rating)}</div>
            <div>{user.chef.tags.join(",")}</div>
            <div>addres : {user.chef.location.addres}</div>
          </div>
          <ChefGallery user={user} />
        </div>
        <OrderDate />
        <Link to="/reservation">BOOK NOW</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.userReducer.users,
  };
};

const mapDispatchToProps = {};

export const UserDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(_UserDetails);

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
