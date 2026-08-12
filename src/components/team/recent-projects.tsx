import Link from 'next/link';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface Props {
  team: any;
}

export default function RecentProjects({
  team,
}: Props) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>
          Recent Projects
        </CardTitle>

        <Link
          href={`/teams/${team.id}/projects`}
          className="bg-primary text-primary-foreground mt-5 flex  items-center justify-center rounded-md px-4 py-2 hover:opacity-90"
        >
          View All Projects
        </Link>
      </CardHeader>

      <CardContent>
        {team.projects.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No project created yet.
          </p>
        ) : (
          <div className="space-y-3">
            {team.projects.map((project: any) => (
              <div
                key={project.id}
                className="flex items-center justify-between rounded-md border p-3"
              >
                <div>
                  <h4 className="font-medium">
                    {project.name}
                  </h4>

                  <p className="text-sm text-muted-foreground">
                    {project.slug}
                  </p>
                </div>

                
                  <Link href={`/teams/${team.id}/projects/${project.id}`} className="bg-primary text-primary-foreground mt-5 flex items-center justify-center rounded-md px-4 py-2 hover:opacity-90">
                    Open
                  </Link>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}