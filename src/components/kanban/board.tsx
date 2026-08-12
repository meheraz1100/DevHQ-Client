'use client';

import { useMoveTask } from '@/src/hooks/use-move-task';
import Column from './column';
import {
  DndContext,
  DragEndEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';

interface Props {
  columns: any[];
  teamId: string;
  projectId: string;
}



export default function Board({
  columns,
  teamId,
  projectId,
}: Props) {
  const sensors = useSensors(
useSensor(PointerSensor, {
  activationConstraint: {
    distance: 5,
  },
}),
);

const { mutate: moveTask } = useMoveTask();

function handleDragEnd(event: DragEndEvent) {
  const { active, over } = event;

  if (!over) return;

  moveTask({
    taskId: active.id as string,
    columnId: over.id as string,
    order: 0,
  });
}
  if (!columns.length) {
    return (
      <div className="rounded-xl border p-10 text-center text-gray-500">
        No columns yet.
      </div>
    );
  }

  return (
    <DndContext
  sensors={sensors}
  onDragEnd={handleDragEnd}
>
    <div className="flex gap-4 overflow-x-auto pb-4">
      {columns.map((column) => (
        <Column
          key={column.id}
          column={column}
          teamId={teamId}
          projectId={projectId}
        />
        
      ))}
      
    </div>
    </DndContext>
  );
}