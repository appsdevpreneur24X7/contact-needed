import dbConnection from "@/lib/dbConnection";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { userName, password , email, role, contactNo  } = await request.json();
  console.log('User : PUT Getting Exec . id:==> ',id);
  console.log('userName, password , email, role, contactNo ', userName, password , email, role, contactNo );
  await dbConnection();
  try {
    await User.findByIdAndUpdate({ userName, password , email, role, contactNo })
    return NextResponse.json({ message: "User updated" }, { status: 200 });
  } catch (error) {
      NextResponse.json({ error: error.message }, { status: 400 })
  }
} 

export async function GET(request, { params }) {
  const { id } = params;
  console.log('User : GET Getting Exec . id:==> ',id);
  await dbConnection();
  try {
    const user = await User.findOne({ _id: id });
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
      NextResponse.json({ error: error.message }, { status: 400 })
  }
}

