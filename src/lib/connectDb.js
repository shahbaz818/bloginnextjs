const mongoose = require("mongoose")

async function connectDb() {
    try {
        await mongoose.connect("mongodb+srv://shahbaz:12345@cluster0.fwy8svz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {})
        console.log("mongodb connected")

    } catch (err) {
        console.log(err.message);
    }

}

module.exports = connectDb