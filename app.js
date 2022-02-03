const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

const port = 3232;

const validateApiKeys = (req, res, next) =>{

    // ignore this implementation

    const { client_id, client_secret } = req.headers;
    next();
};

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(validateApiKeys);
app.use(routes);



app.listen(port, function () {
    console.log("api stared. Running on port:", port);
});