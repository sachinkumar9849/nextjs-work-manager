

import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  addedDate: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: String,
    enum: ['pending', 'completed'],
    default: 'pending'
  },
  userId:{
    type:mongoose.ObjectId,
    required:true,
  }
});

const Task = mongoose.models.Task || mongoose.model('Task', TaskSchema);

export default Task;
