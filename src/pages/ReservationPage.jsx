import React, { Component } from "react";
import { loadReservations } from "../store/actions/reservationActions";
import { connect } from "react-redux";
class _ReservationPage extends Component {
  componentDidMount() {
    this.props.loadReservations();
  }
   formatDate=({at})=> {
    let options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    };
    return new Intl.DateTimeFormat('en', options).format(at);
  }
 
  render() {
    const { reservations } = this.props;
    if (!reservations) return <div>Loading...</div>;

    return (
      <div className="user-list card-grid" style={{ padding: "70px 0 50px 0" }}>
        <h4>Your Reservations</h4>
        {reservations.map((reservation) => (
          <p className="reservation-card" key={reservation._id}>
            Total Price: {reservation.totalPrice}
             <br />
            Number of guests: {reservation.guestsCount}
            <br />
            Address: {reservation.location.name}
            <br />
            Date: {this.formatDate(reservation)}
            <br />
          </p>
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    reservations: state.reservationReducer.reservations,
  };
};

const mapDispatchToProps = {
  loadReservations,
};

export const ReservationPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(_ReservationPage);
