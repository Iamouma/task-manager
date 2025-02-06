import { Injectable } from '@nestjs/common';
import { Task } from './task.model'; // Assuming Task is a proper model with correct types
import { v4 as uuid } from 'uuid'; // Generate unique IDs

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  // Get all tasks
  getAllTasks(): Task[] {
    return this.tasks;
  }

  // Create a new task
  createTask(title: string, description: string): Task {
    const newTask: Task = {
      id: uuid(), // `uuid()` returns a string
      title,
      description,
      completed: false,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  // Get a single task by ID
  getTaskById(id: string): Task | undefined {
    return this.tasks.find((task) => task.id === id);
  }

  // Delete a task by ID
  deleteTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
