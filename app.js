// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const path = require("path");

// // Initialize Express app
// const app = express();
// const port = 3000;

// // mongoose connection url

// const url = "mongodb+srv://shubhamthakur2004:shubhamthakur2004@cluster0.imfg7m0.mongodb.net/resultmanagement?retryWrites=true&w=majority";

// // Connect to MongoDB

//   async function connectToDatabase() {
//     try {
//       await mongoose.connect(url, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//       });
//       console.log("Connected to MongoDB Cluster");
//     } catch (err) {
//       console.error("Error connecting to MongoDB:", err);
//     }
//   }
  

// // Middleware
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));

// // Set view engine and views directory
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// // Routes
// const homeRoute = require("./routes/homeRoute");
// const teacherRoute = require("./routes/teacherRoute");
// const studentRoute = require("./routes/studentRoute");
// const pageRoute = require("./routes/pageRoute");

// app.use("/", homeRoute);
// app.use("/teacher", teacherRoute);
// app.use("/student", studentRoute);
// app.use("/page", pageRoute);

// // Start the server
// async function startServer() {
//   await connectToDatabase();
//   app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
//   });
// }

// startServer();


const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

// Initialize Express app
const app = express();
const port = 3000;

// mongoose connection url
const url = "mongodb+srv://shubhamthakur2004:shubhamthakur2004@cluster0.imfg7m0.mongodb.net/resultmanagement?retryWrites=true&w=majority";

// Connect to MongoDB
async function connectToDatabase() {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB Cluster");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Set view engine and views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
const homeRoute = require("./routes/homeRoute");
const teacherRoute = require("./routes/teacherRoute");
const studentRoute = require("./routes/studentRoute");
const pageRoute = require("./routes/pageRoute");

app.use("/", homeRoute);
app.use("/teacher", teacherRoute);
app.use("/student", studentRoute);
app.use("/page", pageRoute);

// Start the server
async function startServer() {
  await connectToDatabase();
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

startServer();
