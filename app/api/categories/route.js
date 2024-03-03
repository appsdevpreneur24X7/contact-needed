import dbConnection from "@/lib/dbConnection";
import Category from "@/models/category.js";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, description } = await request.json();
  console.log('Category : POST Getting Exec', name, description);
  await dbConnection();
  try {
    await Category.create({ name, description });
    return NextResponse.json({ message: "Category Created" }, { status: 201 });
  } catch (error) {
    NextResponse.json({ error: error.message }, { status: 400 })
  }
}

export async function GET() {
  console.log('Category : GET Getting Exec');
  await dbConnection();
  try {
    const categories = await Category.find();
    return NextResponse.json({ categories });
  } catch (error) {
    NextResponse.json({ error: error.message }, { status: 400 })
  }
}

export async function DELETE(request) {
  console.log('Category : DELETE Getting Exec');
  const id = request.nextUrl.searchParams.get("id");
  await dbConnection();
  try {
    await Category.findByIdAndDelete(id);
    return NextResponse.json({ message: "Category deleted" }, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: error.message }, { status: 400 })
  }
}
