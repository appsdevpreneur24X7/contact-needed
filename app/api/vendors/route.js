import connectDb from "@/config/db";
import Vendor from "@/models/vendor.js";
import { NextResponse } from "next/server";

export async function POST(request) { 
  const { name, category , city, area } = await request.json();
  console.log('Vendor : POST Getting Exec', name, category , city, area );
  await connectDb();
  await Vendor.create({ name, category , city, area });
  return NextResponse.json({ message: "Vendor Created" }, { status: 201 });
}

export async function GET() {
  console.log('Vendor: GET Getting Exec');
  await connectDb();
  const vendors = await Vendor.find();
  return NextResponse.json({ vendors });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  console.log('Vendor: DELETE Getting Exec . id:==>',id);
  await connectDb();
  await Vendor.findByIdAndDelete(id);
  return NextResponse.json({ message: "Vendor deleted" }, { status: 200 });
}
