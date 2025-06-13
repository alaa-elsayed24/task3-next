import { connectDB } from "@/lib/mongoose";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const users = await User.find();
  return NextResponse.json(users);
}
export async function POST(req) {
  await connectDB();
  const body = await req.json();
  const newUser = await User.create(body);
  return NextResponse.json(newUser);
}
