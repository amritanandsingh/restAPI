const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require('body-parser');


app.use(express.urlencoded());
app.use(bodyParser.json());
app.use("/", require("./routes/index"));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("server is up and running");
});
