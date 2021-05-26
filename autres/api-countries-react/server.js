
const express = require("express")
const cors = require("cors")
const { countriesData } = require("./dataCountries")

const app = express()

app.use(cors())

const port = 8000

app.get("/country", (req, res) => {

    console.log("1 get fonctionne");

    res.json({
        countriesData
    })
})

app.get("/country/:pays", (req, res) => {

    console.log("2 get fonctionne");

    const pays = req.params.pays

    // console.log("pays:", pays);
    // console.log("country",country);
    let country = {}

    for (i = 0; i < countriesData.length; i++) {
        // console.log("nameCountry", countriesData[i]);
        let countryInfo = countriesData[i]

        if (pays === countriesData[i].name.toLowerCase()) {
            country = countryInfo
        }
        // else if( ){}
    }
    // console.log(countriesData[1].name.indexOf() == "aland");

    res.json({

        country

    })
})

app.listen(port, () => {
    console.log("server à l'ecoute");
})