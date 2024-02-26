import connectDb from "@/config/db";
import City from "@/models/city";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { name } = await request.json();

  console.log('name ', name );
  console.log(' CITY : PUT ', name );
  await connectDb();
  await City.findByIdAndUpdate(id, { name });
  return NextResponse.json({ message: "City updated" }, { status: 200 });
} 

export async function GET(request, { params }) {
  const { id } = params;
  console.log(' CITY : GET . for id :==> ', id );
  await connectDb();
  const city = await City.findOne({ _id: id });
  return NextResponse.json({ city }, { status: 200 });
}

