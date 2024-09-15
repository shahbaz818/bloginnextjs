const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },

    date: {
        type: Date,
        default: Date.now()
    }
})

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema)
export default Blog