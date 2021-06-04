
// students

db.students.insert({
    name: "Véronique",
    city: "Paris"
    })

db.students.insert({
    name: "Steeven",
    city: "Lyon"
    })
    
db.students.insert({
        name: "Marc",
        city: "Marseille"
        })
        
db.students.insert({
            name: "Nour",
            city: "Lyon"
            })
            
db.students.insert({
            name: "Romain",
            city: "Paris"
            })
                
db.students.insert({
            name: "Sophie",
            city: "Paris"
            })
            
db.students.find()

// favorites

db.favorites.insert({class: "Maths", sport: "Cricket", student_id: ObjectId("60ba21a86b08ea1df350d16a")})
db.favorites.insert({class: "Music", sport: "Hip-hop", student_id: ObjectId("60ba21a96b08ea1df350d16e")})
db.favorites.insert({class: "Arts", sport: "Boxing", student_id: ObjectId("60ba1fc36b08ea1df350d169")})
db.favorites.insert({class: "Literature", sport: "Tennis", student_id: ObjectId("60ba21a86b08ea1df350d16b")})
db.favorites.insert({class: "Computer science", sport: "Tennis", student_id: ObjectId("60ba21a96b08ea1df350d16d")})
db.favorites.insert({class: "Arts", sport: "Baseball", student_id: ObjectId("60ba21a96b08ea1df350d16c")})

db.favorites.find()

// students languages

db.student_languages.insert({student_id: ObjectId("60ba1fc36b08ea1df350d169"), languages_id : ObjectId("60ba24916b08ea1df350d16f")})

// rapport lvl 1

//1
db.students.find(ObjectId("60ba21a86b08ea1df350d16b"))

//2
db.students.find(ObjectId("60ba21a96b08ea1df350d16e"))

//3

