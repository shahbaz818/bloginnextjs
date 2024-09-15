import Blog from '../../../lib/blogModel';
import connectDb from '../../../lib/connectDb';
import { NextResponse } from 'next/server';
const multer = require("multer")



connectDb()


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./public/uploads")
    },

    filename: function(req, file, cb) {
        console.log(file)
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage })
console.log(upload)


export async function GET(req) {
    try {
        const blogId = req.nextUrl.searchParams.get("id");

        if (blogId) {
            const blog = await Blog.findById(blogId);

            if (!blog) {
                return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
            }

            return NextResponse.json(blog);
        } else {
            const blogs = await Blog.find({});
            return NextResponse.json(blogs);
        }
    } catch (error) {
        console.error('Error fetching blog data:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(req) {
    (upload.single('file'));
    try {
        const body = await req.json()
        const newBlog = new Blog(body)
        await newBlog.save()
        return new NextResponse(JSON.stringify({ message: 'Blog created successfully' }), { status: 201 })

    } catch (err) {
        console.log(err)

    }

}