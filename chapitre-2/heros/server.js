
const express = require("express")
const cors = require("cors")

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

app.use(express.json())

app.use(cors())

app.use(debug)

const port = 8098;

const superHeros = [
    {
        name: "Iron Man",
        power: ["money"],
        color: "red",
        isAlive: true,
        age: 46,
        image: "https://blog.fr.playstation.com/tachyon/sites/10/2019/07/unnamed-file-18.jpg?resize=1088,500&crop_strategy=smart"
    },
    {
        name: "Thor",
        power: ["electricty", "worthy"],
        color: "blue",
        isAlive: true,
        age: 300,
        image: "https://www.bdfugue.com/media/catalog/product/cache/1/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9782809465761_1_75.jpg"
    },
    {
        name: "Daredevil",
        power: ["blind"],
        color: "red",
        isAlive: false,
        age: 30,
        image: "https://aws.vdkimg.com/film/2/5/1/1/251170_backdrop_scale_1280xauto.jpg"
    }
]

app.get('/heroes', (req, res) => {

    res.json(superHeros)
})

app.get('/heroes/:name', (req, res) => {

    const heroName = req.params.name

    let heroinfo = {}


    for (i = 0; i < superHeros.length; i++) {
        let hero = superHeros[i]

        if (superHeros[i].name.toLocaleLowerCase() === heroName) {
            heroinfo = hero
        }
    }

    res.json(heroinfo)

})

app.get('/heroes/:name/powers', (req, res) => {

    const heroName = req.params.name

    let hero = []

    for (i = 0; i < superHeros.length; i++) {

        let heroPowers = superHeros[i].power

        if (superHeros[i].name.toLocaleLowerCase() === heroName) {

            hero = heroPowers

        }
    }

    res.json(hero)

})

app.post('/heroes', transformName, (req, res) => {

    const newHero = req.body

    // const addNewHero = superHeros.push(newHero)

    const addNewHero = superHeros.filter(elem => elem.name.toLocaleLowerCase() == req.body.name)

    if(addNewHero.length == 0 ){
        return superHeros.push(newHero) 
    }else(res.json('hero deja present'))

    console.log('post heroes new hero: ', newHero);
    console.log('post addheroes: ', addNewHero);

    res.json("ok, heros ajoute")

})

app.post('/heroes/:name/powers', (req, res) => {

    const newPowers = req.body.power

    const powerHero = req.params.name

    const addPowers = superHeros.filter(elem => {
        if (elem.name.toLocaleLowerCase() == powerHero) {
            return elem.power.push(newPowers)
        }
    })

    console.log("post new powers: ", newPowers);
    console.log("post pouvoir hero: ", powerHero);
    console.log("post power added: ", addPowers);

    res.json("Pouvoir ajoute !")

})



app.listen(port, () => {
    console.log('Server started on port: ' + port);
});