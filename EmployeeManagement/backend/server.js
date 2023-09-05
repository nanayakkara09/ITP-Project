const app = require("./app");
const connectDatabase = require("./db/Database");

process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down server for handling uncaught exception`);
})

// Configuration
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({
        path: "backend/config/.env"
    });
}

//connect db
connectDatabase();

// Create server
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})

// Unhandled promise rejection
process.on("unhandledRejection", (err) => {
    console.log(`Shutting down the server for ${err.message}`);
    console.log(`Shutting down the server for unhandled promise rejection`);

    server.close(() => {
        process.exit(1);
    })
})


