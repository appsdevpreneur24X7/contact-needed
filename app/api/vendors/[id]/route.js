import dbConnection from "@/lib/dbConnection";
import Vendor from "@/models/vendor";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { name, description, category, city, area } = await request.json();
  console.log('Vendor : PUT : name, category , city, area ', name, description, category, city, area);
  const vendorFound = await Vendor.findById(id);

  await dbConnection();
  try {
    await Vendor.findByIdAndUpdate(id, { name, description, category, city, area });
    return NextResponse.json({ message: "Vender updated" }, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: error.message }, { status: 400 })
  }
}

export async function GET(request, { params }) {
  const { id } = params;
  console.log('Vendor : PUT : id:==> ', id);
  await dbConnection();
  try {
    const vender = await Vendor.findOne({ _id: id });
    return NextResponse.json({ vender }, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: error.message }, { status: 400 })
  }
}

