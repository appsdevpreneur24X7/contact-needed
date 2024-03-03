import dbConnection from "@/lib/dbConnection";
import Area from "@/models/area";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  console.log('AREA : PUT getting Executed  ');
  const { id } = params;
  const { name, city } = await request.json();
  console.log('name ', name, 'city ', city);
  await dbConnection();
  try {
    await Area.findByIdAndUpdate(id, { name, city });
    return NextResponse.json({ message: "Area updated" }, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: error.message }, { status: 400 })
  }
}

export async function GET(request, { params }) {
  console.log('AREA : GET getting Executed  ');
  const { id } = params;
  await dbConnection();
  try {
    const area = await Area.findOne({ _id: id });
    return NextResponse.json({ area }, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: error.message }, { status: 400 })
  }
}

