const Sequelize = require('sequelize')
const User = require('./create.js').User
const sequelize = new Sequelize('db', null, null, {
  dialect: 'sqlite',
  strage: './db.sqlite3'
})

User.findAll().then((users) => {
  console.log('users', users)
})
