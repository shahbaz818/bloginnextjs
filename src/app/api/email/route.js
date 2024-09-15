import connectDb from "../../../lib/connectDb"
import Email from "../../../lib/emailModels"
import { NextResponse } from "next/server"
connectDb


export async function GET(req) {
    try {
        const emailId = req.nextUrl.searchParams.get("id");

        if (emailId) {
            const email = await Email.findById(emailId);

            if (!email) {
                return NextResponse.json({ error: 'Email not found' }, { status: 404 });
            }

            return NextResponse.json(email);
        } else {
            const emails = await Email.find({});
            return NextResponse.json(emails);
        }
    } catch (error) {
        console.error('Error fetching email data:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}


//post api
export async function POST(req) {
    try {
        const body = await req.json()
        const newEmail = new Email(body)
        await newEmail.save()
        return new NextResponse(JSON.stringify({ message: 'Email Subscribe successfully' }), { status: 201 })

    } catch (err) {
        console.log(err)

    }

}