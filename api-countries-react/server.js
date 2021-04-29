
const express = require("express")
const cors = require("cors")
const {CountriesData} = require("./dataCountries")

const app = express()

app.use(cors())

const port = 8000

app.get("/country", (req, res) => {

    console.log("1 get fonctionne");

    res.json({
        CountriesData
    })
})

app.get("/country/:pays", (req, res) => {

    console.log("2 get fonctionne");

    const pays = req.params.pays

    // console.log("pays:", pays);
    console.log(CountriesData.name);

    // for(i = 0; i < CountriesData; i++){
    //     if( pays === CountriesData.name)
    // }

    res.json({


        
    })
})

app.listen(port, () => {
    console.log("server à l'ecoute");
})