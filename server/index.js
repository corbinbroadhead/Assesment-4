const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')
const { getUplifted } = require('./controller')
const { getHappy } = require('./controller')
const { getAnimal } = require('./controller')

app.get("/api/uplifting", getUplifted);
app.get("/api/fortune", getFortune);
app.get("/api/compliment", getCompliment);
app.get("/api/happy", getHappy);
app.get("/api/mate", getAnimal);

app.listen(4000, () => console.log("Server running on 4000"));
