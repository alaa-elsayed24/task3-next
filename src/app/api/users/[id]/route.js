import { connectDB } from "@/lib/mongoose";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await connectDB();
  const user = await User.findById(params.id);
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  return NextResponse.json(user);
}

export async function PUT(req, { params }) {
  await connectDB();
  const body = await req.json();
  await User.findByIdAndUpdate(params.id, body);
  return NextResponse.json({ message: "User updated" });
}

export async function DELETE(req, { params }) {
  await connectDB();
  await User.findByIdAndDelete(params.id);
  return NextResponse.json({ message: "User deleted" });
}
