var express = require('express');
const cors = require("cors");
const path = require("path");
const sessionApi = require("./api/sessionApi");
const userApi = require("./api/userApi");
var app = express();
 
var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "../build")));
sessionApi(app);
userApi(app);
const PORT = process.env.PORT || 3003;


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
  
