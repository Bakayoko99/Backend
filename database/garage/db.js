
const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/garage", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("i'm connected to the database");
    }
})

const carsSchema = mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    created: {type: Date, default: Date.now}
})

const Cars = mongoose.model("Cars", carsSchema)

const car1 = () => {

    const car = new Cars({
        brand: "Renault",
        model: "Espace",
        year: 1999
    })

    car.save()
}

const car2 = () => {

    const car = new Cars({
        brand: "Renault",
        model: "Scenic",
        year: 2004
    })

    car.save()
}

const car3 = () => {

    const car = new Cars({
        brand: "Peugeot",
        model: "308",
        year: 2017
    })

    car.save()
}

// car1()
// car2()
// car3()

const findCar = async () => {

    const findByIdCars = await Cars.findById("60be2c3cb85459268c4047a8")

    console.log("findCar by id :",findByIdCars);

}

// findCar()

const updateCar = async () => {

  const updateCarYear = await Cars.update({_id:"60be2c3cb85459268c4047a8"}, {year: 2000})

}

// updateCar()

const deleteCar = async () => {

    const deleteMany = await Cars.deleteMany({brand: "Renault"})
}

// deleteCar()

const insertCar = async () => {
   const insertMany = await Cars.insertMany([{
       brand: "Aston Martin",
       model:"DB9",
       year: 2010
   },{
       brand: "Range Rover",
       model:"Discovery Sport",
       year: 2017
   }])    
}

// insertCar()