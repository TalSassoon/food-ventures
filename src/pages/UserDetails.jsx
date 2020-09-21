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
    const { userId } = this.props.match.params;
    const user = await userService.getById(userId);
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    if (!user) return <div>Loading...</div>;

    return (
      <div className="user-details" style={{ paddingTop: "70px" }}>
        <h3>Details for {user.fullName}</h3>
        <section className="chef-gal-details">
          <div className="chef-pic-preview">
            <img src={`${user.imgUrl}`} alt="" style={{ width: "150px" }} />
            <p style={{ color: "#ffbf00" }}>
              <i className="fas fa-star"></i> {user.chef.rating.toFixed(1)}{" "}
              <span style={{ color: "#b5b6ba" }}>
                ({user.chef.ratingNum} ratings)
              </span>
            </p>
            <div>{user.chef.tags.join(",")}</div>
            <div>addres : {user.chef.location.addres}</div>
          </div>
          <ChefGallery user={user} />
        </section>
        <section className="chef-details-order">
          <div className="details">
            <p>
              
             {user.chef.about}
            </p>
          </div>
          <OrderDate />
        </section>
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
