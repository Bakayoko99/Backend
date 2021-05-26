const express = require("express")
const cors = require("cors")
const { catalogData } = require("./catalogData.json")

const app = express()

app.use(cors())

const 