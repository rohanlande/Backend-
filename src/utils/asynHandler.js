const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

// ⚙️ Step-by-step:
// You pass an async route/controller function (requestHandler) to asyncHandler.

// It returns a new function (with the standard req, res, next signature) that Express can use.

// This new function calls the original requestHandler, but wraps it in:

// Promise.resolve().catch()
// which automatically catches any error thrown (or any rejected promise) and passes it to next(err).

// next(err) triggers your centralized Express error handler, which can log, format, and respond with the right status code.
