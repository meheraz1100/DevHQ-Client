export interface SupremeAdminStatistics {
  totalUsers: number;
  activeUsers: number;
  inactiveUsers: number;
  totalTeams: number;
  totalProjects: number;
  totalTasks: number;
}

export interface SupremeAdminUserTeam {
  role: 'OWNER' | 'ADMIN' | 'MEMBER';

  team: {
    id: string;
    name: string;
    slug: string;
  };
}

export interface SupremeAdminUser {
  id: string;
  name: string;
  username: string;
  email: string;
  avatar?: string | null;
  role: 'ADMIN' | 'USER';
  isActive: boolean;
  isVerified: boolean;
  createdAt: string;

  memberships: SupremeAdminUserTeam[];
}

export interface SupremeAdminTeam {
  id: string;
  name: string;
  slug: string;
  createdAt: string;

  owner: {
    id: string;
    name: string;
    username: string;
    email: string;
  };

  _count: {
    members: number;
    projects: number;
    invitations: number;
  };
}

export interface SupremeAdminDashboard {
  statistics: SupremeAdminStatistics;
  users: SupremeAdminUser[];
  teams: SupremeAdminTeam[];
}