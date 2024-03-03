import dbConnection from "@/lib/dbConnection";
import User from "@/models/user.js";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { userName, password, email, role, contactNo } = await request.json();
  console.log('User : POST Getting Exec', userName, password, email, role, contactNo);
  await dbConnection();
  try {
    await User.create({ userName, password, email, role, contactNo })
    return NextResponse.json({ message: "User Created" }, { status: 201 })
  } catch (error) {
    NextResponse.json({ error: error.message }, { status: 400 })
  }
}

export async function GET() {
  console.log('User : GET Getting Exec');
  await dbConnection();
  try {
    const users = await User.find();
    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: error.message }, { status: 400 })
  }
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  console.log('User : DELETE Getting Exec . id:==> ', id);
  await dbConnection();
  try {
    await User.findByIdAndDelete(id);
    return NextResponse.json({ message: "User deleted" }, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: error.message }, { status: 400 })
  }
}
