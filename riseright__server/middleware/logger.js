const logger = (req, res, next) => {
  const now = new Date();
  const time = now.toISOString();
  console.log(`[${time}] ${req.method} ${req.originalUrl}`);
  next();
};

module.exports = logger;
