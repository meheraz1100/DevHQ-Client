export interface BoardUser {
  id: string;
  name: string;
  username: string;
  avatar?: string;
}

export interface BoardTask {
  id: string;
  title: string;
  description?: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  dueDate?: string | null;
  order: number;

  assignee?: BoardUser | null;

  reporter: BoardUser;
}

export interface BoardColumn {
  id: string;
  name: string;
  position: number;
  color?: string | null;

  tasks: BoardTask[];
}

export interface Board {
  id: string;
  name: string;

  columns: BoardColumn[];
}