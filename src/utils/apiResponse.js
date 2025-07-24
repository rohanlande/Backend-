class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }
}

export { ApiResponse };

/*
🧠 Why Use a Custom Response Wrapper?
Using a custom class like ApiResponse ensures every success response from your backend:

Has a predictable structure

Includes a success flag for easier client parsing

Carries optional custom messages (e.g., "User created", "Data fetched")
*/
