import * as express from 'express';

export const catchAsyncErrors = (fn) => {
  return function (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    return fn(req, res, next).catch(next);
  };
};

export const notFoundHandler = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  return next(error);
};

export const developmentErrors = (err, req, res) => {
  err.stack = err.stack || '';
  const errorDetails = {
    message: err.message,
    status: err.status,
    stackHighlighted: err.stack.replace(
      /[a-z_-\d]+.js:\d+:\d+/gi,
      '<mark>$&</mark>'
    ),
  };
  res.status(err.status || 500);
  res.format({
    // Based on the `Accept` http header
    'text/html': () => {
      res.render('error', errorDetails);
    }, // Form Submit, Reload the page
    'application/json': () => res.json(errorDetails), // Ajax call, send JSON back
  });
};

export const errorHandler = (
  err: Error,
  _: express.Request,
  res: express.Response
  // _: NextFunction
) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode || 500);
  res.render('error', {
    message: err.message,
    error: {},
  });
};
