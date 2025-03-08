import { NextResponse } from "next/server";

export async function GET() {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json()

    return NextResponse.json(data, { status: 200 })

}

export async function POST(request: Request) {
    const data = await request.json()
    const res = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    const resData = await res.json()
    return NextResponse.json(resData, { status: 200 })
}