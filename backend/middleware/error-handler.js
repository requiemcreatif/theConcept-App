const errorHandler = (err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "Something strange just happened!!" });
};

export default errorHandler;
