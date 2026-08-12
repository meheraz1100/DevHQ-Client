export type TaskPriority =
  | 'LOW'
  | 'MEDIUM'
  | 'HIGH'
  | 'URGENT';

export interface Task {
  id: string;
  title: string;
  description?: string;

  priority: TaskPriority;

  dueDate?: string;

  assignee?: {
    id: string;
    name: string;
    avatar?: string;
  };

  reporter?: {
    id: string;
    name: string;
  };

  order: number;
}

export interface UpdateTaskPayload {
  title?: string;
  description?: string;
  priority?: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
  dueDate?: string;
  assigneeId?: string | null;
}