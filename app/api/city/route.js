import dbConnection from "@/lib/dbConnection";
import City from "@/models/city.js";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name } = await request.json();
  console.log('City : POST Getting Exec', name);
  await dbConnection();
  try {
    await City.create({ name });
    return NextResponse.json({ message: "City Created" }, { status: 201 });
  } catch (error) {
    NextResponse.json({ error: error.message }, { status: 400 })
  }
}

export async function GET() {
  console.log('City : GET Getting Exec');
  await dbConnection();
  try {
    const cities = await City.find();
    return NextResponse.json({ cities });
  } catch (error) {
    NextResponse.json({ error: error.message }, { status: 400 })
  }
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  console.log('City : DELETE Getting Exec . id :==>>', id);
  await dbConnection();
  try {
    await City.findByIdAndDelete(id);
    return NextResponse.json({ message: "City deleted" }, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: error.message }, { status: 400 })
  }
}
