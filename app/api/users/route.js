import connectMongoDB from "@/libs/db";
import User from "@/models/user.js";
import { NextResponse } from "next/server";

export async function POST(request) { 
  const { userName, password , email, role, contactNo} = await request.json();
  console.log('POST Getting Exec', userName, password);
  await connectMongoDB();
  await User.create({ userName, password , email, role, contactNo });
  return NextResponse.json({ message: "User Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const users = await User.find();
  return NextResponse.json({ users });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await User.findByIdAndDelete(id);
  return NextResponse.json({ message: "User deleted" }, { status: 200 });
}
