'use client';

import CreateTaskDialog from './create-task-dialog';
import TaskCard from './task-card';

import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import { useDroppable } from '@dnd-kit/core';

import { Task } from '@/src/types/task';

interface Column {
  id: string;
  name: string;
  tasks: Task[];
}

interface Props {
  column: Column;
  teamId: string;
  projectId: string;
}

export default function Column({
  column,
  teamId,
  projectId,
}: Props) {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  return (
    <div
      ref={setNodeRef}
      className="w-50 shrink-0 rounded-xl bg-muted p-4"
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-semibold">
          {column.name}
        </h3>

        <span className="text-sm text-muted-foreground">
          {column.tasks.length}
        </span>
      </div>

      <div className="space-y-3">
        <SortableContext
  items={column.tasks.map((task) => task.id)}
  strategy={verticalListSortingStrategy}
>
  {column.tasks.map((task) => (
    <TaskCard
      key={task.id}
      task={task}
      teamId={teamId}
      projectId={projectId}
    />
  ))}
</SortableContext>
      </div>

      <div className="mt-4">
        <CreateTaskDialog
          teamId={teamId}
          projectId={projectId}
          columnId={column.id}
        />
      </div>
    </div>
  );
}