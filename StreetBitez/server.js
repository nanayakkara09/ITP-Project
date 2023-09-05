const express = require("express");
const db = require("./db")
const app = express();

app.use(express.json());

const pizzasRoute = require('./routes/pizzasRoute')
const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute')


app.use('/api/pizzas/' , pizzasRoute)
app.use('/api/users/' , userRoute  )

//http://localhost:8000/orderModel
app.use("/orderModel", ordersRoute)



app.get("/", (req, res) => {
  res.send("Server working" + port);
});







const port = process.env.PORT || 8000 

app.listen(port, () => `Server running on port`);