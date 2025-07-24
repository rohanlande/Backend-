class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message); // sets the message on the base Error class
    this.statusCode = statusCode; // HTTP status code (e.g., 404, 500)
    this.data = null; // optional field to hold response data (null in case of error)
    this.message = message; // error message
    this.success = false; // for client response consistency
    this.errors = errors; // additional details (like validation errors)

    if (stack) {
      this.stack = stack; // use provided stack trace (optional)
    } else {
      Error.captureStackTrace(this, this.constructor); // generates stack trace
    }
  }
}

export { ApiError };

// 🧠 Why Use a Custom Error Class?
// Express and JavaScript have a default Error class, but it lacks:

// HTTP status codes

// Custom error data (like validation messages)

// A structured format for error responses

// So we extend it with ApiError to:

// ✅ Create meaningful, consistent error responses
// ✅ Include extra debugging info when needed
// ✅ Improve client-side debugging and logging
