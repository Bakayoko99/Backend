
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express()

const debug = (req, res, next) => {
    console.log("i received a request");
    next()
}

const transformName = (req, res, next) => {

    req.body.name = req.body.name.toLocaleLowerCase()

    console.log("name transformed to low case");
    next()
}

const heroesFound = async (req, res, next) => {

    const heroName = req.params.name

    console.log("heroName heroFound: ", heroName);

    const findHero = await Heroes.find({name:heroName})

    console.log("findHero heroFound: ", findHero);

    if (findHero[0] === undefined) {
        res.json("hero not founded")
    }

    next()
}

app.use(express.json())

app.use(cors())

app.use(debug)

const port = 8095;

mongoose.connect("mongodb://localhost:27017/superHeros", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("i'm connected to the database");
    }
})

const heroSchema = mongoose.Schema({
    name: String,
    power: Array,
    color: String,
    isAlive: Boolean,
    age: Number,
    image: String
})

const Heroes = mongoose.model("Heroes", heroSchema)

const insertHeroes = async () => {
    const insertDefaultHeroes = await Heroes.insertMany([
        {
            name: "iron man",
            power: ["money"],
            color: "red",
            isAlive: true,
            age: 46,
            image: "https://blog.fr.playstation.com/tachyon/sites/10/2019/07/unnamed-file-18.jpg?resize=1088,500&crop_strategy=smart"
        },
        {
            name: "thor",
            power: ["electricity", "worthy"],
            color: "blue",
            isAlive: true,
            age: 300,
            image: "https://www.bdfugue.com/media/catalog/product/cache/1/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9782809465761_1_75.jpg"
        },
        {
            name: "daredevil",
            power: ["blind"],
            color: "red",
            isAlive: false,
            age: 30,
            image: "https://aws.vdkimg.com/film/2/5/1/1/251170_backdrop_scale_1280xauto.jpg"
        }
    ])
}
// insertHeroes()

app.get('/heroes', async (req, res) => {

    const allHeroes = await Heroes.find({}).exec()

    res.json(allHeroes)
})

app.get('/heroes/:name', async (req, res) => {

    const heroName = req.params.name

    const findOneHero = await Heroes.findOne({ name: heroName })

    console.log("finOne hero get: ", findOneHero);


    if (findOneHero == null) {
        res.json("hero not found")
    } else {
        res.json(findOneHero)
    }

})

app.get('/heroes/:name/powers', async (req, res) => {

    const heroName = req.params.name

    const findOneHero = await Heroes.findOne({ name: heroName })

    if (findOneHero == null) {
        res.json("hero not found")
    } else {
        res.json(findOneHero.power)
    }

})

app.post('/heroes', async (req, res) => {

    const newHero = req.body

    const findHero = await Heroes.findOne(newHero)

    console.log("findHero post: ", findHero);

    if (findHero == null) {

        const insertHeroes = new Heroes(newHero)
        await insertHeroes.save()
        res.json("hero ajoute")

    } else {
        res.json("hero deja present")
    }

})

app.post('/heroes/:name/powers', async (req, res) => {

    const newPowers = req.body.power

    const powerHero = req.params.name

    const findPower = async () => {

        const keyPowerfinded = await Heroes.find({ name: powerHero }, "power -_id")

        return keyPowerfinded[0].power.find(elem => elem == newPowers)

    }

    const powerFinded = await findPower()

    if (powerFinded == undefined) {
        const findHero = await Heroes.findOneAndUpdate({ name: powerHero }, { $push: { power: newPowers } })
        res.json("Pouvoir ajoute !")
    } else {
        res.json("pouvoir existant")
    }

    console.log("findPower :", powerFinded);

    // console.log("post new powers: ", newPowers);
    // console.log("post pouvoir hero: ", powerHero);
    // console.log("post power added: ", addPowers);

})

app.delete('/heroes/:name', heroesFound, async (req, res) => {

    const heroName = req.params.name

    // const heroIndex = superHeros.findIndex(elem => elem.name.toLocaleLowerCase() === heroName)

    const findHero = Heroes.find({ name: heroName })
    await findHero.remove()


    console.log("findHero :", await findHero);

    res.json(`${heroName} deleted`)
})

app.delete('/heroes/:name/power/:power', heroesFound, (req, res) => {

    const heroName = req.params.name
    const deletePower = req.params.power

    console.log("delete deletePower :", deletePower);

    const heroFinded = superHeros.find(elem => elem.name.toLocaleLowerCase() === heroName)

    const powerIndex = heroFinded.power.findIndex(elem => elem == deletePower)

    for (i = 0; i < superHeros.length; i++) {
        superHeros[i] === heroFinded ? superHeros[i].power.splice(powerIndex, 1) : null
    }

    console.log("delete powerIndex :", powerIndex);

    console.log("delete heroFinded :", heroFinded.power);

    res.json(`the power ${deletePower} of ${heroName} has been deleted`)
})

app.put('/heroes/:name', (req, res) => {

    const heroName = req.params.name.toLocaleLowerCase()
    const updatedHeroInfo = req.body
    const heroIndex = superHeros.findIndex(elem => elem.name.toLocaleLowerCase() == heroName)

    console.log("heroIndex put: ", heroIndex);

    superHeros.splice(heroIndex, 1, updatedHeroInfo)

    // superHeros[heroIndex].name.replace(updatedHeroInfo.name) 
    // superHeros[heroIndex].power.splice(updatedHeroInfo.power) 
    // superHeros[heroIndex].color.replace(updatedHeroInfo.color) 
    // superHeros[heroIndex].isAlive = updatedHeroInfo.isAlive
    // superHeros[heroIndex].age.toString().replace(updatedHeroInfo.age)

    res.json("ok")




})



app.listen(port, () => {
    console.log('Server started on port: ' + port);
});