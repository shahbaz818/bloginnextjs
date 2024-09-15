import { NextResponse } from "next/server";
import Blog from "../../../../lib/blogModel";
import connectDb from "../../../../lib/connectDb";
connectDb()
export async function DELETE(req, content) {
    console.log(content)
    let id = content.params.id;
    const blog = await Blog.deleteOne({ _id: id })
    return NextResponse.json({ blog, success: true, msg: "deleted" })
}