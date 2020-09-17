import httpService from './httpService'

export const userService = {
  query,
  getById,
  remove,
  save
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