function validatePassword(password) {
    if (password.length >= 8) {
        return true
    }
    return false
  }
  module.exports = validatePassword
