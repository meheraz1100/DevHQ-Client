'use client';

import { Users, Building2, FolderKanban, ListTodo } from 'lucide-react';

import { useSupremeAdminDashboard } from '@/src/hooks/use-supreme-admin-dashboard';

export default function SupremeAdminPage() {
  const {
    data,
    isLoading,
    isError,
  } = useSupremeAdminDashboard();

  if (isLoading) {
    return (
      <main className="p-6">
        <p className="text-sm text-muted-foreground">
          Loading Supreme Admin dashboard...
        </p>
      </main>
    );
  }

  if (isError || !data) {
    return (
      <main className="p-6">
        <div className="rounded-xl border p-6">
          <p className="text-3xl text-red-500">
            Sorry, You are not authorized to access the Supreme Admin dashboard.
          </p>
        </div>
      </main>
    );
  }

  const { statistics } = data;

  const stats = [
    {
      title: 'Total Users',
      value: statistics.totalUsers,
      icon: Users,
    },
    {
      title: 'Active Users',
      value: statistics.activeUsers,
      icon: Users,
    },
    {
      title: 'Total Teams',
      value: statistics.totalTeams,
      icon: Building2,
    },
    {
      title: 'Total Projects',
      value: statistics.totalProjects,
      icon: FolderKanban,
    },
    {
      title: 'Total Tasks',
      value: statistics.totalTasks,
      icon: ListTodo,
    },
    {
      title: 'Inactive Users',
      value: statistics.inactiveUsers,
      icon: Users,
    },
  ];

  return (
    <main className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Supreme Admin
        </h1>

        <p className="text-sm text-muted-foreground">
          Monitor users, teams, projects and tasks across
          the entire platform.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-xl border bg-background p-5"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  {stat.title}
                </p>

                <Icon className="h-5 w-5 text-muted-foreground" />
              </div>

              <p className="mt-3 text-2xl font-bold">
                {stat.value}
              </p>
            </div>
          );
        })}
      </div>

      {/* Overview */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border p-6">
          <h2 className="font-semibold">
            Platform Overview
          </h2>

          <div className="mt-5 space-y-4">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">
                Active Users
              </span>

              <span className="font-medium">
                {statistics.activeUsers}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">
                Inactive Users
              </span>

              <span className="font-medium">
                {statistics.inactiveUsers}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">
                Teams
              </span>

              <span className="font-medium">
                {statistics.totalTeams}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">
                Projects
              </span>

              <span className="font-medium">
                {statistics.totalProjects}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">
                Tasks
              </span>

              <span className="font-medium">
                {statistics.totalTasks}
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border p-6">
          <h2 className="font-semibold">
            Recent Users
          </h2>

          <div className="mt-4 space-y-3">
            {data.users.slice(0, 5).map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between"
              >
                <div>
                  <p className="text-sm font-medium">
                    {user.name}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    @{user.username}
                  </p>
                </div>

                <span
                  className={`rounded-full px-2.5 py-1 text-xs ${
                    user.isActive
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {user.isActive
                    ? 'Active'
                    : 'Inactive'}
                </span>
              </div>
            ))}

            {!data.users.length && (
              <p className="text-sm text-muted-foreground">
                No users found.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Recent Teams */}
      <div className="rounded-xl border p-6">
        <h2 className="font-semibold">
          Teams Overview
        </h2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.teams.slice(0, 6).map((team) => (
            <div
              key={team.id}
              className="rounded-lg border p-4"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium">
                    {team.name}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    {team.slug}
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-lg font-semibold">
                    {team._count.members}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    Members
                  </p>
                </div>

                <div>
                  <p className="text-lg font-semibold">
                    {team._count.projects}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    Projects
                  </p>
                </div>

                <div>
                  <p className="text-lg font-semibold">
                    {team._count.invitations}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    Invites
                  </p>
                </div>
              </div>

              <div className="mt-4 border-t pt-3">
                <p className="text-xs text-muted-foreground">
                  Owner
                </p>

                <p className="text-sm font-medium">
                  {team.owner.name}
                </p>
              </div>
            </div>
          ))}

          {!data.teams.length && (
            <p className="text-sm text-muted-foreground">
              No teams found.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}