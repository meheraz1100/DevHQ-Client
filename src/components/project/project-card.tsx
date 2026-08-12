import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Project } from "@/src/types/project";
import Link from "next/dist/client/link";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <Card className="transition hover:shadow-md">
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground text-sm">@{project.slug}</p>

        {project.description && (
          <p className="mt-3 text-sm">{project.description}</p>
        )}
        <Link
          href={`/teams/${project.teamId}/projects/${project.id}`}
          className="bg-primary text-primary-foreground mt-5 flex items-center justify-center rounded-md px-4 py-2 hover:opacity-90"
        >
          Open
        </Link>
      </CardContent>
    </Card>
  );
}
