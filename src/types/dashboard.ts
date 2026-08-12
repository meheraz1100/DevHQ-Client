import { Team } from './team';
import { Project } from './project';

export interface DashboardStatistics {
  totalTeams: number;
  totalProjects: number;
  totalTasks: number;
  completedTasks: number;
  pendingTasks: number;
  overdueTasks: number;
}

export interface DashboardData {
  statistics: DashboardStatistics;

  recentTeams: Team[];

  recentProjects: Project[];
}