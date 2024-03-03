import dbConnection from "@/lib/dbConnection";
import Vendor from "@/models/vendor.js";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, description, category, city, area } = await request.json();
  console.log('Vendor : POST Getting Exec', name, description, category, city, area);
  await dbConnection();
  try {
    await Vendor.create({ name, description, category, city, area });
    return NextResponse.json({ message: "Vendor Created" }, { status: 201 });
  } catch (error) {
    NextResponse.json({ error: error.message }, { status: 400 })
  }
}

export async function GET() {
  console.log('Vendor: GET Getting Exec');
  await dbConnection();
  try {
    const vendors = await Vendor.find();
    return NextResponse.json({ vendors });
  } catch (error) {
    NextResponse.json({ error: error.message }, { status: 400 })
  }
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  console.log('Vendor: DELETE Getting Exec . id:==>', id);
  await dbConnection();
  try {
    await Vendor.findByIdAndDelete(id);
    return NextResponse.json({ message: "Vendor deleted" }, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: error.message }, { status: 400 })
  }
}
