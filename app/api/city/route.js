import connectDb from "@/config/db";
import City from "@/models/city.js";
import { NextResponse } from "next/server";

export async function POST(request) { 
  const { name } = await request.json();
  console.log('City : POST Getting Exec', name );
  await connectDb();
  await City.create({ name });
  return NextResponse.json({ message: "City Created" }, { status: 201 });
}

export async function GET() {
  console.log('City : GET Getting Exec' );
  await connectDb();
  const cities = await City.find();
  return NextResponse.json({ cities });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  console.log('City : DELETE Getting Exec . id :==>>' , id );
  await connectDb();
  await City.findByIdAndDelete(id);
  return NextResponse.json({ message: "City deleted" }, { status: 200 });
}
