const jwt = require('jsonwebtoken')
const config = require('../config/secret')

function verifikasi() {
  return function(req, rest, next) {
    let roles = req.body.role
    // cek autorizzation header
    let tokenWithhBearer = req.headers.authorization
    if (tokenWithhBearer) {
      let token = tokenWithhBearer.split(' ')[1]
      // verifikasi
      jwt.verify(token, config.secret, function(err, decoded) {
        if (err) {
          return rest.status(401).send({auth: false, message: 'Token tidak terdaftar'})
        } else {
          if (roles == 2) {
            req.auth = decoded
            next()
          } else {
            return rest.status(401).send({auth: false, message: 'Gagal mengotorisasi role anda'})
          }
        }
      })
    } else {
      return rest.status(401).send({auth: false, message: 'Token tidak tersedia'})
    }
  }
}

module.exports = verifikasi



