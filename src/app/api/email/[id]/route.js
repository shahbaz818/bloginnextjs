import { NextResponse } from "next/server";
import Email from "../../../../lib/emailModels";
import connectDb from "../../../../lib/connectDb";
connectDb()
export async function DELETE(req, content) {
    console.log(content)
    let id = content.params.id;
    const email = await Email.deleteOne({ _id: id })
    return NextResponse.json({ email, success: true, msg: "deleted" })
}