"use client";

import RecentProjectsCard from "@/src/components/dashboard/RecentProjectsCard";
import RecentTeamsCard from "@/src/components/dashboard/RecentTeamsCard";
import StatCard from "@/src/components/dashboard/stat-card";

import { useDashboard } from "@/src/hooks/use-dashboard";


export default function DashboardPage() {
  const { data, isLoading } = useDashboard();

const dashboard = data?.data;

const stats = dashboard?.statistics;

const recentTeams = dashboard?.recentTeams ?? [];

const recentProjects = dashboard?.recentProjects ?? [];

  if (isLoading) {
    return <div className="py-10 text-center">Loading Dashboard...</div>;
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <p className="text-muted-foreground">Welcome back 👋</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        <StatCard title="Teams" value={stats?.totalTeams ?? 0} />

        <StatCard title="Projects" value={stats?.totalProjects ?? 0} />

        <StatCard title="Tasks" value={stats?.totalTasks ?? 0} />

        <StatCard title="Completed" value={stats?.completedTasks ?? 0} />

        <StatCard title="Pending" value={stats?.pendingTasks ?? 0} />

        <StatCard title="Overdue" value={stats?.overdueTasks ?? 0} />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">

  <RecentTeamsCard
    teams={recentTeams}
  />

  <RecentProjectsCard
    projects={recentProjects}
  />

</div>
    </div>
  );
}
