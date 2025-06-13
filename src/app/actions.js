'use server';

import { connectDB } from "@/lib/mongoose";
import { User } from "@/models/user";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { userSchema } from "@/lib/zodSchema";
export async function addUserAction(formData) {
  const name = formData.get("name");
  const email = formData.get("email");

  await connectDB();
  await User.create({ name, email });

  redirect('/')
}
