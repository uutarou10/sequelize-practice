const Sequelize = require('sequelize')
const sequelize = new Sequelize('db', null, null, {
  dialect: 'sqlite',
  strage: './db.sqlite3'
})

sequelize
  .authenticate()
    .then(() => {
      console.log('success!')
    })
    .catch((err) => {
      console.log('connection error!', err)
    })

const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
})

User.sync({force: true}).then(() => {
  return User.create({
    firstName: 'Kota',
    lastName: 'Nonaka'
  })
})

module.exports = {User}
