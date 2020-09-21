import httpService from './httpService'

export const userService = {
  query,
  getById,
  remove,
  save,
  getLocations,
  getCuisines
}

function query(filterBy = {}) {
  let queryStr = '?';
  for (const key in filterBy) {
    queryStr += `${key}=${filterBy[key]}&`;
  }
  return httpService.get(`user${queryStr || ''}`);
}

// function query() {
//   return httpService.get(`user`);
// }

function getById(userId) {
  return httpService.get(`user/${userId}`)
}

function remove(userId) {
  return httpService.delete(`user/${userId}`)
}

async function save(user) {
  if (user._id) {
    return httpService.put(`user/${user._id}`, user)
  } else {
    return httpService.post(`user`, user);
  }
}

function getLocations() {
  return locations;
}

function getCuisines() {
  return cuisines;
}

const locations = [{
    _id: makeId(),
    name: 'athens',
    imgUrl: require('../img/locs/athens.jpg')
  },
  {
    _id: makeId(),
    name: 'berlin',
    imgUrl: require('../img/locs/berlin.jpg')
  },
  {
    _id: makeId(),
    name: 'istanbul',
    imgUrl: require('../img/locs/istanbul.jpg')
  },
  {
    _id: makeId(),
    name: 'madrid',
    imgUrl: require('../img/locs/madrid.jpg')
  },
  {
    _id: makeId(),
    name: 'moscow',
    imgUrl: require('../img/locs/moscow.jpg')
  },
  {
    _id: makeId(),
    name: 'paris',
    imgUrl: require('../img/locs/paris.jpg')
  },
  {
    _id: makeId(),
    name: 'rome',
    imgUrl: require('../img/locs/rome.jpg')
  },
  {
    _id: makeId(),
    name: 'tel aviv',
    imgUrl: require('../img/locs/telaviv.jpg')
  },
]

const cuisines = [{
    _id: makeId(),
    name: 'BBQ',
    imgUrl: require('../img/cuis/bbq.jpeg')
  },
  {
    _id: makeId(),
    name: 'italian',
    imgUrl: require('../img/cuis/italian.jpeg')
  },
  {
    _id: makeId(),
    name: 'japanese',
    imgUrl: require('../img/cuis/japanese.jpeg')
  },
  {
    _id: makeId(),
    name: 'vegan',
    imgUrl: require('../img/cuis/vegan.jpeg')
  },
  {
    _id: makeId(),
    name: 'indian',
    imgUrl: require('../img/cuis/indian.jpeg')
  },
  {
    _id: makeId(),
    name: 'chinese',
    imgUrl: require('../img/cuis/chinese.jpeg')
  },
  {
    _id: makeId(),
    name: 'mediterranean',
    imgUrl: require('../img/cuis/mediterranean.jpeg')
  },
  {
    _id: makeId(),
    name: 'russian',
    imgUrl: require('../img/cuis/russian.png')
  }
]

function makeId(length = 5) {
  var txt = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}