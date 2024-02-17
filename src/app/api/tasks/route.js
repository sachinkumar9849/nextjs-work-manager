//create all the tasks

import Task from "@/models/task";
import { NextResponse } from "next/server";

//get all tasks
export async function GET(request) {
  try {
    const tasks = await Task.find(); // Assuming Task.find() retrieves all tasks from the database
    return NextResponse.json(tasks, {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Failed to fetch tasks!!",
      success: false,
    });
  } 
}

// create task
export async function POST(request) {
  const { title, content, userId } = await request.json();

  try {
    const task = new Task({
      title,
      content,
      userId,
    });
    const createdTask = await task.save();
    return NextResponse.json(createdTask, {
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to create task!!",
      success: false,
    });
  }
}
