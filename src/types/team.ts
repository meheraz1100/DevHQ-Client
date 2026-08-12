export interface Team {
  id: string;
  name: string;
  slug: string;
  description?: string;

  _count: {
    projects: number;
    members: number;
  };
  members: {
    role: 'OWNER' | 'ADMIN' | 'MEMBER';
}[];
}