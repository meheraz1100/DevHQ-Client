'use client';

import Link from 'next/link';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import { Project } from '@/src/types/project';

interface Props {
  projects: Project[];
}

export default function RecentProjectsCard({
  projects,
}: Props) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Projects</CardTitle>

        
      </CardHeader>

      <CardContent>
        {projects.length === 0 ? (
          <div className="py-8 text-center text-muted-foreground">
            No projects found.
          </div>
        ) : (
          <div className="space-y-3">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/teams/${project.teamId}/projects`}
              >
                <div className="rounded-lg border p-4 transition hover:bg-muted/40">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">
                        {project.name}
                      </h3>

                      <p className="text-sm text-muted-foreground">
                        @{project.slug}
                      </p>
                    </div>

                    <Button
                      size="sm"
                      variant="outline"
                    >
                      Open
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}