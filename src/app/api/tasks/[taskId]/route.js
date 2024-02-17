// api tasks {taskId}

import { getResponseMessage } from "@/helper/responseMessage";
import Task from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { taskId } = params;

  try {
    const task = await Task.findById(taskId);
    return NextResponse.json(task);
  } catch (error) {
    return getResponseMessage("Error in getting task !!", 404, false);
  }
}
// update task
export async function PUT(request, { params }) {
  const { taskId } = params;

  try {
    const { title, content, status } = await request.json();
    let task = await Task.findById(taskId);
    (task.title = title), (task.content = content), (task.status = status);
    const updatedTask = await task.save();
    return NextResponse.json(updatedTask);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Error in getting task !!", 404, false);
  }
}

// delete task 
export async function DELETE(request, { params }) {
  const { taskId } = params;

  try {
    const deletedTask = await Task.findByIdAndDelete(taskId);
    if (!deletedTask) {
      return getResponseMessage("Task not found", 404, false);
    }
    return NextResponse.json(deletedTask);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Error in deleting task !!", 500, false);
  }
}
