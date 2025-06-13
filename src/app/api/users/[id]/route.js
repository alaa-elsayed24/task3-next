import { connectDB } from "@/lib/mongoose";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await connectDB();

    const user = await User.findById(params.id);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    await connectDB();

    const body = await req.json();
    await User.findByIdAndUpdate(params.id, body);

    return NextResponse.json({ message: "User updated" });
  } catch (error) {
    console.error("PUT error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectDB();

    await User.findByIdAndDelete(params.id);
    return NextResponse.json({ message: "User deleted" });
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
