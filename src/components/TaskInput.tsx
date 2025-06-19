'use client';
import { useState } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";

// Define the shape of the props our component will accept
interface TaskInputProps {
  onTaskCreate: (taskText: string) => void;
}


export function TaskInput({ onTaskCreate } : TaskInputProps) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the page refresh on form submission
    if (inputValue.trim()) { // Only add if the input is not empty
      onTaskCreate(inputValue.trim());
      setInputValue(''); // Clear the input field after adding
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-lg items-center space-x-2">
      <Input
        type="text"
        placeholder="What needs to be done?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="bg-primary-slate border-gray-600 focus:ring-accent-blue text-lg"
      />
      <Button type="submit" className="bg-accent-blue hover:bg-blue-700 text-lg">
        Add
      </Button>
    </form>
  );
}