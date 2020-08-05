const ErrorCodes = {
  UNKNOWN: "UNKNOWN"
}

module.exports = {
  ErrorCodes,
  UNKNOWN: {
    code: ErrorCodes.UNKNOWN,
    message: "Unknown error",
    status: 500,
  }
}