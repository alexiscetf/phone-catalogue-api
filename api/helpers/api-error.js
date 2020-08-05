const errors = require('../constants/errors')
    
module.exports = class APIError extends Error {
  constructor(errDefinition = errors.UNKNOWN, config) {
    const err = errDefinition || erros.UNKNOWN
    super((config && config.customMessage) || err.message)
    this.status = err.status
    this.code = err.code
    if (config && config.stack) {
      this.stack = config.stack
    }
    this.timestamp = new Date().toISOString()
  }
}
