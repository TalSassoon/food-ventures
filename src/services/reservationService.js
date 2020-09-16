export const reservationService = {
  save
}

const reservations = [
  {
    _id: 1234,
    by:{miniUser:''},
    from:{miniChef:''},
    status : 'pending/confirmed', 
    totalPrice: 54,
    at: 32323,
    location: { lang: 26, lat: 27, name: 'world' },
    guestsCount: 0,
    comments: 'Pitruzilia',
    createdAt: 4444,
    updatedAt: 4444
  }
]

function save(reservation) {
  reservations.push(reservation)
  console.log(reservations);
  return Promise.resolve(reservation)
}