const app = require("./app");
const connectDatabase = require("./db/Database"); // Import your connectDatabase function

// Handling uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server for handling uncaught exception`);
  process.exit(1); // Exit the process on uncaught exceptions
});

// config
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({
    path: __dirname + "/config/.env", // Use __dirname to specify the correct path
  });
}

// Connect to the database
connectDatabase();

// Create server
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

// Unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Shutting down the server for ${err.message}`);
  console.log(`Shutting down the server for unhandled promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});
