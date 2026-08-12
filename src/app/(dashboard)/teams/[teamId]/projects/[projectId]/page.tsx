"use client";

import { useParams } from "next/navigation";

import { useProject } from "@/src/hooks/use-project";
import { useBoard } from "@/src/hooks/use-board";
import Board from "@/src/components/kanban/board";
import CreateColumnDialog from "@/src/components/kanban/create-column-dialog";

export default function ProjectPage() {
  const params = useParams();

  const teamId = params.teamId as string;

  const projectId = params.projectId as string;
  const { data: board } = useBoard(teamId, projectId);

  const { data, isLoading } = useProject(teamId, projectId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{data.name}</h1>

        <p className="text-muted-foreground">@{data.slug}</p>

        {data.description && <p className="mt-4">{data.description}</p>}
      </div>

      {/* Board will be here */}
      <div className="mb-6 flex justify-end">
        <CreateColumnDialog teamId={teamId} projectId={projectId} />
      </div>
      <Board columns={board?.data?.columns ?? []} teamId={teamId} projectId={projectId} />
    </div>
  );
}
