import dbConnection from "@/lib/dbConnection";
import Category from "@/models/category";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { name, description } = await request.json();
  console.log('Category : PUT Getting Executed . name , description ', name, description);
  await dbConnection();
  try {
    await Category.findByIdAndUpdate(id, { name, description });
    return NextResponse.json({ message: "Category updated" }, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: error.message }, { status: 400 })
  }
}

export async function GET(request, { params }) {
  const { id } = params;
  console.log('Category : GET Getting Executed . ');
  await dbConnection();
  try {
    const category = await Category.findOne({ _id: id });
    return NextResponse.json({ message: "Category updated" }, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: error.message }, { status: 400 })
  }
}

