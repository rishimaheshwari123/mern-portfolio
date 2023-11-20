const express = require("express");
const cors = require("cors")
const dotenv = require("dotenv")

dotenv.config();

const app = express();


// middlewares 
app.use(express.json());
app.use(cors());

app.use('/api/v1/portfolio', require("./routes/portfolioRoute"));

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`server is running on port no ${port}`)
})