import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

connectDb();

export async function GET(request) {
  let users = [];
  try {
    users = await User.find().select("-password");
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to get users",
      success: false,
    });
  }
  return NextResponse.json(users);
}

// post request function
// data post
// create user
export async function POST(request) {
  try {
    // Fetch user data from request
    const { name, email, password, about, profileUrl } = await request.json();
    // Create user object with user model
    const user = new User({
      name,
      email,
      password,
      about,
      profileUrl,
    });
    // Save the object to the database
    const createdUser = await user.save();
    const response = NextResponse.json(user, {
      status: 201,
    });
    return response;
  } catch (error) {
    console.log("Error creating user:", error);
    return NextResponse.json({
      message: "Failed to create user !!",
      status: false,
    });
  }
}
