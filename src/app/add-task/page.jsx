"use client";

import { addTask } from "@/services/taskService";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

// export const metadata = {
//   title: "Add Task: Work Manager",
// };

// Define your component
const AddTask = () => {
  // Use useState hook within your component
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    userId: "65d0d1b5e6bb38a40ce07c00",
  });
  console.log(task);
  // Return your JSX

  const handleAddTask = async (event) => {
    event.preventDefault();
    console.log(task);

    // validate task data
    try {
      const result = await addTask(task);
      console.log(result);
      toast.success("Your task is added !!", {
        position: "top-center",
      });
      setTask({
        title:"",
        content:"",
        status:"none",
      })
    } catch (error) {
      console.log(error);
      toast.error("Task not a");
    }
  };
  return (
    <>
      <div className="max-w-md mx-auto bg-black rounded p-8 shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-black">To-Do List</h2>
        <form id="todoForm" onSubmit={handleAddTask}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-bold mb-2"
            >
              Title
            </label>
            <input
              value={task.title}
              onChange={(event) =>
                setTask({ ...task, title: event.target.value })
              }
              type="text"
              id="title"
              name="title"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:border-blue-500 text-black"
              placeholder="Enter title"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-gray-700 font-bold mb-2"
            >
              Content
            </label>
            <textarea
              id="content"
              name="content"
              rows={3}
              className="w-full border rounded px-4 py-2 focus:outline-none focus:border-blue-500 text-black"
              placeholder="Enter content"
              onChange={(event) =>
                setTask({ ...task, content: event.target.value })
              }
              value={task.content}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="status"
              className="block text-gray-700 font-bold mb-2"
            >
              Status
            </label>
            <select
              id="status"
              name="status"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:border-blue-500 text-black"
              onChange={(event) =>
                setTask({ ...task, status: event.target.value })
              }
              value={task.status}
            >
              <option value="none" disabled>Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Add Todo
            </button>
            <button
              type="button"
              id="clearBtn"
              className="bg-gray-500 text-white py-2 px-6 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Clear
            </button>
          </div>
          {JSON.stringify(task)}
        </form>
      </div>
    </>
  );
};

// Export your component
export default AddTask;
