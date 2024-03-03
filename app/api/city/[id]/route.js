import dbConnection from "@/lib/dbConnection";
import City from "@/models/city";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { name } = await request.json();

  console.log('name ', name);
  console.log(' CITY : PUT ', name);
  await dbConnection();
  try {
    await City.findByIdAndUpdate(id, { name });
    return NextResponse.json({ message: "City updated" }, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: error.message }, { status: 400 })
  }
}

export async function GET(request, { params }) {
  const { id } = params;
  console.log(' CITY : GET . for id :==> ', id);
  await dbConnection();
  try {
    const city = await City.findOne({ _id: id });
    return NextResponse.json({ city }, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: error.message }, { status: 400 })
  }
}

