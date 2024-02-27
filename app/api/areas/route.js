import connectDb from "@/config/db";
import Area from "@/models/area.js";
import { NextResponse } from "next/server";

export async function POST(request) { 
  const { name ,city } = await request.json();
  console.log('AREA : POST Getting Exec', name );
  await connectDb();
  await Area.create({ name , city });
  return NextResponse.json({ message: "Area Created" }, { status: 201 });
}

export async function GET() {
  await connectDb();
  console.log('AREA : GET Getting Exec' );
  const areas = await Area.find();
  return NextResponse.json({ areas });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  onsole.log('AREA : DELETE Getting Exec for Id : ',id );
  await connectDb();
  await Area.findByIdAndDelete(id);
  return NextResponse.json({ message: "Area deleted" }, { status: 200 });
}
