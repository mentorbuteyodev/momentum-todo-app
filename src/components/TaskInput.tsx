// src/components/TaskInput.tsx
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function TaskInput() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="text"
        placeholder="Add a new task..."
        className="bg-primary-slate border-gray-600 focus:ring-accent-blue"
      />
      <Button type="submit" className="bg-accent-blue hover:bg-blue-700">
        Add Task
      </Button>
    </div>
  );
}