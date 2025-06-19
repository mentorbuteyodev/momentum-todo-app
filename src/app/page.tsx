'use client'; 

import { useState } from "react";
import { TaskInput } from "@/components/TaskInput";
import { TaskItem } from "@/components/TaskItem";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion"; 

// Define the shape of a single task object
export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export default function Home() {
  // State to hold all tasks
  const [tasks, setTasks] = useState<Task[]>([]); 

  // CREATE
  const handleAddTask = (taskText: string) => {
    const newTask: Task = {
      // Modern way to generate a unique ID
      id: crypto.randomUUID(), 
      text: taskText,
      completed: false,
    };
    // Add new task to the top
    setTasks((prevTasks) => [newTask, ...prevTasks]); 
  };

  // UPDATE
  const handleToggleCompletion = (taskId: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // DELETE
  const handleDeleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-12 md:p-24 bg-gradient-to-br from-gray-900 via-primary-slate to-gray-900">
      <Card className="w-full max-w-lg bg-slate-900/60 border-slate-700/50 backdrop-blur-sm shadow-2xl">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400">
            Momentum
          </CardTitle>
        </CardHeader>
        <CardContent>
          <TaskInput onTaskCreate={handleAddTask} />
          <div className="mt-8 space-y-4">
            <AnimatePresence>
              {tasks.map((task) => (
                <motion.div
                  key={task.id}
                  layout
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <TaskItem
                    task={task}
                    onToggleCompletion={handleToggleCompletion}
                    onDeleteTask={handleDeleteTask}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}