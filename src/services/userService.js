import httpService from './httpService'

export const userService = {
  query,
  getById,
  remove,
  save,
  getLocations,
  getCuisines
}

// function query(filterBy = {}) {
//   let queryStr = '?';
//   for (const key in filterBy) {
//     queryStr += `${key}=${filterBy[key]}&`;
//   }
//   return httpService.get(`user${queryStr || ''}`);
// }

function query() {
  return httpService.get(`user`);
}

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
    id: makeId(),
    name: 'athens',
    imgUrl: require('../img/locs/athens.jpg')
  },
  {
    id: makeId(),
    name: 'berlin',
    imgUrl: require('../img/locs/berlin.jpg')
  },
  {
    id: makeId(),
    name: 'istanbul',
    imgUrl: require('../img/locs/istanbul.jpg')
  },
  {
    id: makeId(),
    name: 'madrid',
    imgUrl: require('../img/locs/madrid.jpg')
  },
  {
    id: makeId(),
    name: 'moscow',
    imgUrl: require('../img/locs/moscow.jpg')
  },
  {
    id: makeId(),
    name: 'paris',
    imgUrl: require('../img/locs/paris.jpg')
  },
  {
    id: makeId(),
    name: 'rome',
    imgUrl: require('../img/locs/rome.jpg')
  },
  {
    id: makeId(),
    name: 'tel aviv',
    imgUrl: require('../img/locs/telaviv.jpg')
  },
]

const cuisines = [{
    id: makeId(),
    name: 'BBQ',
    imgUrl: require('../img/cuis/bbq.jpeg')
  },
  {
    id: makeId(),
    name: 'italian',
    imgUrl: require('../img/cuis/italian.jpeg')
  },
  {
    id: makeId(),
    name: 'japanese',
    imgUrl: require('../img/cuis/japanese.jpeg')
  },
  {
    id: makeId(),
    name: 'vegan',
    imgUrl: require('../img/cuis/vegan.jpeg')
  },
  {
    id: makeId(),
    name: 'indian',
    imgUrl: require('../img/cuis/indian.jpeg')
  },
  {
    id: makeId(),
    name: 'chinese',
    imgUrl: require('../img/cuis/chinese.jpeg')
  },
  {
    id: makeId(),
    name: 'mediterranean',
    imgUrl: require('../img/cuis/mediterranean.jpeg')
  },
  {
    id: makeId(),
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