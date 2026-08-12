'use client';

import { useParams } from 'next/navigation';

import CreateProjectDialog from '@/src/components/project/create-project-dialog';
import ProjectCard from '@/src/components/project/project-card';

import { useProjects } from '@/src/hooks/use-projects';
import Link from 'next/dist/client/link';

export default function ProjectsPage() {
  const params = useParams();

  const teamId = params.teamId as string;

  const {
    data,
    isLoading,
  } = useProjects(teamId);

  const projects = data?.data ?? [];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Projects
        </h1>

        <CreateProjectDialog
          teamId={teamId}
        />
      </div>

      {isLoading ? (
        <div>Loading...</div>
      ) : projects.length === 0 ? (
        <div className="rounded-lg border py-12 text-center">
          No projects found.
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project: any) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
          
        </div>
      )}
    </div>
  );
}