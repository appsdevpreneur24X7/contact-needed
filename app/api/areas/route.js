import dbConnection from "@/lib/dbConnection";
import Area from "@/models/area.js";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, city } = await request.json();
  console.log('AREA : POST Getting Exec', name);
  await dbConnection();
  try {
    await Area.create({ name, city });
    return NextResponse.json({ message: "Area Created" }, { status: 201 });
  } catch (error) {
    NextResponse.json({ error: error.message }, { status: 400 })
  }
}

export async function GET() {
  await dbConnection();
  console.log('AREA : GET Getting Exec');
  try {
    const areas = await Area.find();
    return NextResponse.json({ areas });
  } catch (error) {
    NextResponse.json({ error: error.message }, { status: 400 })
  }
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  onsole.log('AREA : DELETE Getting Exec for Id : ', id);
  await dbConnection();
  try {
    await Area.findByIdAndDelete(id);
    return NextResponse.json({ message: "Area deleted" }, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: error.message }, { status: 400 })
  }
}
