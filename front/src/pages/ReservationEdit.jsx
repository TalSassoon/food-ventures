import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { TextField, TextareaAutosize } from '@material-ui/core'

import { reservationService } from '../services/reservationService'
import { saveReservation } from '../store/actions/reservationActions'
import {UserDetails} from './UserDetails'

class _ReservationEdit extends React.Component {

  state = {
    reservation: {
      by: { miniUser: '' },
      from: { miniChef: '' },
      status: 'pending',
      totalPrice: 0,
      at: '',
      location: { lang: 26, lat: 27, name: '' },
      guestsCount: 0,
      comments: '',
      createdAt: Date.now()
    }
  }

  //elInput = React.createRef()

  async componentDidMount() {
    const { reservationId } = this.props
    if (reservationId) {
      const reservation = await reservationService.getById(reservationId)
      this.setState({ reservation })
    }
    // this.elInput.current.focus()
  }

  onInputChange = (ev) => {
    const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
    this.setState({ reservation: { ...this.state.reservation, [ev.target.name]: value } })
  }

  onAddReservation = async (ev) => {
    ev.preventDefault();
    await this.props.saveReservation(this.state.reservation)
    this.props.history.push('/')
  }

  render() {
    console.log(this.props);
    console.log(this.props.user);
    return (
      
      <div className="reservation-edit modal-wrapper" onClick={this.props.onCloseModal}>

        <form className="reservation-form modal-content" onClick= {(ev) => ev.stopPropagation()} noValidate autoComplete="off">
          <h3>Enter your details</h3>
          <TextField name="guestsCount" id="outlined-number" label="Number of guests" type="number" InputLabelProps={{ shrink: true, }} variant="outlined" min={1} max={20} onChange={this.onInputChange} />
          <TextField id="outlined-basic" label="Number of guest" variant="outlined" />
          <TextField id="outlined-basic" type="date" label="Date" variant="outlined" />
          <TextField id="outlined-basic" label="Hour" variant="outlined" />
          <TextField id="outlined-basic" label="Number of guests" variant="outlined" />
          <TextField id="outlined-basic" label="Location" variant="outlined" />
          <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Your comments" />
          <button onClick={this.onAddReservation}>Save Reservation</button>

          <Link to="/chef"><button className={"back-btn"}>Back to list</button></Link>
          <button onClick={this.props.onCloseModal} className={"close-btn"}>X</button>
        </form>



        {/* <label htmlFor="name">Reservation name </label>
        <TextField ref={this.elInput} name="name" value={this.state.reservation.name}
          placeholder="Reservation name" type="text"
          onChange={this.onInputChange}
        />

        <label htmlFor="price">Price </label>
        <TextField name="price" value={this.state.reservation.price}
          type="number" min="0"
          onChange={this.onInputChange}
        /> */}


      </div>
    )
  }
}

const mapDispatchToProps = {
  saveReservation,
}

export const ReservationEdit = connect(null, mapDispatchToProps)(_ReservationEdit)