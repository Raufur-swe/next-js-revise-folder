import { NextResponse } from "next/server"
import { stringify } from "querystring"

// define a type
type User = {
    id: number
    name: string
}

//data
const user: User[] = [
    {
        id: 1,
        name: "rabin"
    },
    {
        id: 2,
        name: "hood"
    }

]

//export it

export async function GET() {
    return NextResponse.json(user)
}


export async function POST(req:Request){
const body = await req.json()

const newUser ={
    id : Date.now(),
    name: body.name
}
return NextResponse.json(newUser)
}