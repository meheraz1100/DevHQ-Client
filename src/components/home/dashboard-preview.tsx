import {
  BarChart3,
  CheckCircle2,
  Circle,
  FolderKanban,
  LayoutDashboard,
  MoreHorizontal,
  Plus,
  Users,
} from 'lucide-react';

const columns = [
  {
    title: 'To Do',
    count: 3,
    tasks: [
      {
        title: 'Design landing page',
        priority: 'HIGH',
      },
      {
        title: 'Create API documentation',
        priority: 'MEDIUM',
      },
    ],
  },
  {
    title: 'In Progress',
    count: 2,
    tasks: [
      {
        title: 'Build dashboard',
        priority: 'URGENT',
      },
      {
        title: 'Team invitation flow',
        priority: 'MEDIUM',
      },
    ],
  },
  {
    title: 'Done',
    count: 4,
    tasks: [
      {
        title: 'Authentication',
        priority: 'HIGH',
      },
      {
        title: 'Database setup',
        priority: 'LOW',
      },
    ],
  },
];

function Stat({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: typeof Users;
}) {
  return (
    <div className="rounded-lg border bg-background p-3">
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          {label}
        </span>

        <Icon className="h-4 w-4 text-muted-foreground" />
      </div>

      <p className="mt-2 text-xl font-semibold">
        {value}
      </p>
    </div>
  );
}

export default function DashboardPreview() {
  return (
    <div className="relative mx-auto mt-16 max-w-6xl">
      {/* Glow */}
      <div className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-primary/10 blur-3xl" />

      {/* Browser */}
      <div className="relative overflow-hidden rounded-xl border bg-background shadow-2xl">

        {/* Browser header */}
        <div className="flex h-11 items-center border-b bg-muted/30 px-4">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
          </div>

          <div className="mx-auto hidden rounded-md border bg-background px-20 py-1 text-[10px] text-muted-foreground sm:block">
            app.devhq.com/dashboard
          </div>
        </div>

        <div className="flex min-h-130">

          {/* Sidebar */}
          <aside className="hidden w-52 shrink-0 border-r bg-muted/20 p-4 sm:block">
            <div className="mb-7 flex items-center gap-2 px-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-foreground text-xs font-bold text-background">
                D
              </div>

              <span className="font-semibold">
                DevHQ
              </span>
            </div>

            <nav className="space-y-1">
              <div className="flex items-center gap-3 rounded-md bg-muted px-3 py-2 text-sm font-medium">
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </div>

              <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground">
                <FolderKanban className="h-4 w-4" />
                Projects
              </div>

              <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4" />
                Tasks
              </div>

              <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                Team
              </div>
            </nav>

            <div className="mt-8 border-t pt-5">
              <p className="px-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Workspace
              </p>

              <div className="mt-3 rounded-md px-3 py-2 text-sm">
                DevHQ Project
              </div>

              <div className="mt-1 rounded-md px-3 py-2 text-sm text-muted-foreground">
                Website Redesign
              </div>
            </div>
          </aside>

          {/* Main */}
          <div className="min-w-0 flex-1">

            {/* Topbar */}
            <div className="flex h-14 items-center justify-between border-b px-4 sm:px-6">
              <div>
                <p className="text-xs text-muted-foreground">
                  Workspace
                </p>

                <p className="text-sm font-semibold">
                  DevHQ Project
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button className="hidden h-8 items-center gap-2 rounded-md border px-3 text-xs sm:flex">
                  <Plus className="h-3.5 w-3.5" />
                  Add task
                </button>

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-xs font-semibold">
                  M
                </div>
              </div>
            </div>

            {/* Dashboard */}
            <div className="p-4 sm:p-6">

              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-lg font-semibold">
                    Project overview
                  </h3>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Track progress of your team
                  </p>
                </div>

                <BarChart3 className="hidden h-5 w-5 text-muted-foreground sm:block" />
              </div>

              {/* Stats */}
              <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
                <Stat
                  label="Projects"
                  value="12"
                  icon={FolderKanban}
                />

                <Stat
                  label="Tasks"
                  value="48"
                  icon={CheckCircle2}
                />

                <Stat
                  label="Completed"
                  value="31"
                  icon={CheckCircle2}
                />

                <Stat
                  label="Members"
                  value="8"
                  icon={Users}
                />
              </div>

              {/* Kanban */}
              <div className="mt-6">
                <div className="mb-3 flex items-center justify-between">
                  <h4 className="text-sm font-semibold">
                    Current sprint
                  </h4>

                  <button className="text-muted-foreground">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>

                <div className="grid gap-3 lg:grid-cols-3">
                  {columns.map((column) => (
                    <div
                      key={column.title}
                      className="rounded-lg border bg-muted/20 p-3"
                    >
                      <div className="mb-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Circle className="h-3 w-3 fill-current text-muted-foreground" />

                          <span className="text-xs font-semibold">
                            {column.title}
                          </span>

                          <span className="text-[10px] text-muted-foreground">
                            {column.count}
                          </span>
                        </div>

                        <Plus className="h-3.5 w-3.5 text-muted-foreground" />
                      </div>

                      <div className="space-y-2">
                        {column.tasks.map((task) => (
                          <div
                            key={task.title}
                            className="rounded-md border bg-background p-3 shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <p className="text-xs font-medium leading-5">
                                {task.title}
                              </p>

                              <MoreHorizontal className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                            </div>

                            <div className="mt-3 flex items-center justify-between">
                              <span className="rounded-full border px-2 py-0.5 text-[9px] font-medium">
                                {task.priority}
                              </span>

                              <div className="h-5 w-5 rounded-full bg-muted text-center text-[9px] leading-5">
                                M
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}