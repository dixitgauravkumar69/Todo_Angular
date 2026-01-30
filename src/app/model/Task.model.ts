export class Todo {

  id?: number;           // optional (DB / backend ke liye)
  title: string;        // Todo title
  description: string; // Todo description
  completed: boolean;  // Status (checkbox)
  priority: 'Low' | 'Medium' | 'High'; // Priority

  constructor(
    title: string,
    description: string,
    completed: boolean,
    priority: 'Low' | 'Medium' | 'High'
  ) {
    this.title = title;
    this.description = description;
    this.completed = completed;
    this.priority = priority;
  }
}
