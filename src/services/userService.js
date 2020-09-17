// import httpService from './httpService'

export const userService = {
  query,
  getById
}

  const user = [
    {
      _id: 'v140',
      fullName: 'Jaime Oliver',
      userName: 'chef1',
      password: 'secret',
      joinedAt: 32332,
      imgUrl: require('../img/chef1.jpg'),
      chef: {
        imgUrl: '',
        description: 'Big batata',
        tags: ['sushi', 'asian', 'sea food'],
        location: { lang: 26, lat: 27, name: 'world'},
        price: 0,
        rating: 5
      }
    }
  ]

  function query() {
    return Promise.resolve(user);
  }

  function getById() {
    return Promise.resolve(user);
  }