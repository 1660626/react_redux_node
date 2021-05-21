const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

const PRODUCTS = require('./server/router/products.route');

const PORT = process.env.PORT || 4000;

if(process.env.NODE_ENV !== 'test') {
  //use morgan to log at command line
  app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
}


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(morgan("dev"));

app.get("/", (request, respond) => {
  
  respond.status(200).json({
    message: "Welcome to Project Support",
  });
});

app.use('/api/products', PRODUCTS );


app.get('/err', function (req, res) {
  throw new Error('Error!');
});

app.use(function (req, res, next) {
  res.status(404).send({
    error_message: 'Endpoint not found!'
  })
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send({
    error_message: 'Something broke!'
  });
});



app.listen(PORT, function () {
  console.log(`Server is running on Port: http://localhost:${PORT}`);
});

module.exports = app;