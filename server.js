//IMPORTS
const express = require("express")
const bodyParser = require("body-parser");
const router = require("./routes/routes")
const planets = require("./planetFN")
const json = require("./data.json");
//GLOBAL FILE
const app = express();

//parse application/json
app.use(bodyParser.json())

//ROUTES
app.use("/planets.happoldt.com/api" , router);

// //STATIC FILES 
// app.use(express.static('public'))

//ERROR HANDLER
app.use((req, res, next) => {
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

//SERVER
app.listen(3000, function () {
  console.log('planet app listening on port 3000!')
})

// app.listen(process.env.PORT, process.env.IP, function() {
//   console.log(`listening on ${process.env.PORT}`)
// });