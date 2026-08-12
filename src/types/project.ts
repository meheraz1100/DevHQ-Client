export interface Project {
  id: string;
  name: string;
  slug: string;
  teamId: string;
  description?: string;
  color?: string;
  createdAt: string;
}

export interface ProjectColumn {
  id: string;
  name: string;
  position: number;
  color?: string;
  _count: {
    tasks: number;
  };
}

export interface Project {
  id: string;
  name: string;
  slug: string;
  description?: string;
  color?: string;

  teamId: string;

  createdAt: string;

  _count: {
    tasks: number;
  };

  team: {
    id: string;
    name: string;
    slug: string;
  };

  columns: ProjectColumn[];
}