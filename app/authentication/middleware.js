function authenticationMiddleware () {
  return function (req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
    req.session.error = 'Please sign in!'
    res.redirect('/signin')
  }
}

module.exports = authenticationMiddleware
