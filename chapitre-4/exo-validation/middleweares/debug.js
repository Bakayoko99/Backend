
const debug = (req, res, next) => {
    console.log("i received a request!");

    next()
}

module.exports = debug