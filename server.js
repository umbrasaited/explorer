const express = require("express");
const bodyParser = require("body-parser");
const rpcMethods = require("./routes/api");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", rpcMethods);
//creates port that connects to http and sends requests back to server
const port = process.env.PORT || 3001;

server = app.listen(port, () => console.log(`Server running on port ${port}`));