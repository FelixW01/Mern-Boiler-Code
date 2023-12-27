// import modules
const express = require("express");

const { json, urlencoded } = express;
const mongoose = require("mongoose");
require("dotenv").config();
// const db = require('./config/connection');

// app
const app = express();

// db
mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("DB CONNECTED"))
	.catch((err) => console.log("DB CONNECTION ERROR", err));

// middleware
app.use(json());
app.use(urlencoded({ extended: false }));

// routes
const testRoutes = require("./routes/test");

app.use("/", testRoutes);

// port
const port = process.env.PORT || 3001;

// listener
// db.once('open', () => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}!`);
    });
//   });
