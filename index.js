const jwt = require('jsonwebtoken')
const User = require('mongoose').model('User')
const config = require('../../config')

/**
 *  The Auth Checker middleware function.
 */
module.exports = (socket, next) => {
  if (socket.handshake.query && socket.handshake.query.token) {
    jwt.verify(socket.handshake.query.token, config.jwtSecret, (err, decoded) => {
      if (err) {
        return next(new Error('Authentication error'))
      }
      const userId = decoded.sub
      socket.decoded = decoded
    // check if a user exists
      return User.findById(userId, (userErr, user) => {
        if (userErr || !user) {
          return next(new Error('Authentication error '))
        }
        socket.user = user
        return next()
      })
    })
  }
  next(new Error('Authentication error'))



}
