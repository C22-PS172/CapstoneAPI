const {
  menyimpanJamur, menampilkanJamur} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/',
    handler: menyimpanJamur,
  },
  {
    method: '',
    path: '/',
    handler: menampilkanJamur,
  },
];

module.exports = {
  routes,
};
