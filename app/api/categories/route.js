import connectDb from "@/config/db";
import Category from "@/models/category.js";
import { NextResponse } from "next/server";

export async function POST(request) { 
  const { name, description } = await request.json();
  console.log('Category : POST Getting Exec', name, description );
  await connectDb();
  await Category.create({ name, description });
  return NextResponse.json({ message: "Category Created" }, { status: 201 });
}

export async function GET() {
  console.log('Category : GET Getting Exec' );
  await connectDb();
  const categories = await Category.find();
  return NextResponse.json({ categories });
}

export async function DELETE(request) {
    console.log('Category : DELETE Getting Exec' );
  const id = request.nextUrl.searchParams.get("id");
  await connectDb();
  await Category.findByIdAndDelete(id);
  return NextResponse.json({ message: "Category deleted" }, { status: 200 });
}
