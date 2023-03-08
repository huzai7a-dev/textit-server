const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(400);
  next(error);
};

const handleError = (req, res, next) => {
  req.statusCode = req.statusCode || 500;
  req.status = req.status || "error";
  res.status(req.statusCode).send(json({
    status: req.status,
    message: req.message,
  }));
  next()
};

export {notFound,handleError}