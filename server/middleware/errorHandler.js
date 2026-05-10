const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);
  
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';
  
  res.status(statusCode).json({
    success: false,
    message: process.env.NODE_ENV === 'production' ? 'An error occurred' : message,
    error: process.env.NODE_ENV === 'production' ? undefined : err.stack
  });
};

module.exports = errorHandler;
