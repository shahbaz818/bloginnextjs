const mongoose = require("mongoose")

const emailSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const Email = mongoose.models.Email || mongoose.model("Email", emailSchema)
export default Email