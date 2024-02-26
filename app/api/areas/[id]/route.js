import connectDb from "@/config/db";
import Area from "@/models/area";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  console.log('AREA : PUT getting Executed  ');
  const { id } = params;
  const { name } = await request.json();
  console.log('name ', name );
  await connectDb();
  await Area.findByIdAndUpdate(id, { name });
  return NextResponse.json({ message: "Area updated" }, { status: 200 });
} 

export async function GET(request, { params }) {
  console.log('AREA : GET getting Executed  ');
  const { id } = params;
  await connectDb();
  const area = await Area.findOne({ _id: id });
  return NextResponse.json({ area }, { status: 200 });
}

