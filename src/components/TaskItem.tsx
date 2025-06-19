// src/components/TaskItem.tsx
'use client';

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "./ui/button";
import { Task } from "@/app/page"; // We will create this type definition next

// Define the props for this component
interface TaskItemProps {
  task: Task;
  onToggleCompletion: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
}

export function TaskItem({ task, onToggleCompletion, onDeleteTask }: TaskItemProps) {
  return (
    <div className="flex items-center p-4 bg-slate-800/50 border border-slate-700/50 rounded-lg transition-all duration-300 hover:bg-slate-800">
      <Checkbox
        id={`task-${task.id}`}
        checked={task.completed}
        onCheckedChange={() => onToggleCompletion(task.id)}
        className="mr-4 data-[state=checked]:bg-accent-blue"
      />
      <label
        htmlFor={`task-${task.id}`}
        className={`flex-1 text-lg cursor-pointer ${task.completed ? 'line-through text-gray-500' : 'text-gray-200'}`}
      >
        {task.text}
      </label>
      <Button variant="ghost" size="icon" onClick={() => onDeleteTask(task.id)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-500 hover:text-red-500 transition-colors"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </Button>
    </div>
  );
}