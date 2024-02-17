import { User } from "@/models/user";
import { NextResponse } from "next/server";

// get single user
export async function GET(request, { params }) {
  const { userId } = params;
  try {
    const user = await User.findById(userId).select("-password");
    return NextResponse.json(user);
  } catch (error) {
    // Handle the error here
    console.error("Error occurred while fetching user:", error);
    return NextResponse.error({
      message: "Error in get single user !!",
      success: false,
    });
  }
}

// update user
export async function PUT(request, { params }) {
  const { userId } = params;
  const { name, password, about, profileUrl } = await request.json();
  try {
    const user = await User.findById(userId);
    user.name = name;
    user.password = password;
    user.about = about;
    user.profileUrl = profileUrl;
    const updatedUser = await user.save();
    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json({
      message: "failed to update user !!",
      success: false,
    });
  }
}

// delete user
export async function DELETE(request, { params }) {
  const { userId } = params;

  try {
    await User.deleteOne({
      _id: userId,
    });
    return NextResponse.json({
      message: "user deleted !!",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error in deleting user !!",
      success: false,
    });
  }
}
