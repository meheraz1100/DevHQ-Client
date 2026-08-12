import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { ArrowLeft } from 'lucide-react';

import { Project } from '@/src/types/project';

interface Props {
  project: Project;
}

export default function ProjectHeader({
  project,
}: Props) {
  return (
    <div className="space-y-4">
      <Link href={`/teams/${project.teamId}`}>
        <Button
          variant="outline"
          size="sm"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      </Link>

      <div>
        <h1 className="text-3xl font-bold">
          {project.name}
        </h1>

        <p className="mt-2 text-muted-foreground">
          {project.description ||
            'No description provided.'}
        </p>
      </div>
    </div>
  );
}