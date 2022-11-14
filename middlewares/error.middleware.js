const checkRoutes = (req, res, next) => {
  const { url, method } = req;
  return res.status(401).json({
    error: -2,
    description: `Route ${url} method ${method} not authorized`,
  });
  next();
};

module.exports = checkRoutes;
