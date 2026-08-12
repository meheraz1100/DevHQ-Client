"use client";

import { CalendarDays } from "lucide-react";
import Image from "next/image";

import { Task } from "@/src/types/task";
import { useSortable } from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import TaskDetailsDialog from "./task-details-dialog";


interface Props {
  task: Task;
  teamId: string;
  projectId: string;
}

const priorityColor = {
  LOW: "bg-gray-100 text-gray-700",
  MEDIUM: "bg-blue-100 text-blue-700",
  HIGH: "bg-orange-100 text-orange-700",
  URGENT: "bg-red-100 text-red-700",
};

export default function TaskCard({ task, teamId, projectId }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: task.id,
    });

  // const { data: members = [] } = useTeamMembers(teamId);

  // const updateTask = useUpdateTask(teamId, projectId);

  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const [open, setOpen] = useState(false);

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="cursor-grab space-y-3 rounded-xl border bg-white p-4 shadow-sm active:cursor-grabbing"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold">{task.title}</h3>

        <span
          className={`rounded-full px-2 py-1 text-xs font-medium ${priorityColor[task.priority]}`}
        >
          {task.priority}
        </span>
      </div>

      {task.description && (
        <p className="line-clamp-2 text-sm text-gray-500">{task.description}</p>
      )}
      

      <Card
        onClick={() => setOpen(true)}
        className="cursor-pointer items-center"
      >
        Edit Task
      </Card>
      <TaskDetailsDialog task={task} teamId={teamId}
  projectId={projectId} open={open} onOpenChange={setOpen} />

      <div className="flex items-center justify-between">
        {task.dueDate ? (
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <CalendarDays size={14} />
            {new Date(task.dueDate).toLocaleDateString()}
          </div>
        ) : (
          <span />
        )}

        {task.assignee && (
          <div className="flex items-center gap-2">
            <Image
              src={task.assignee.avatar || "/avatar.png"}
              alt={task.assignee.name}
              className="h-8 w-8 rounded-full object-cover"
            />

            <span className="text-xs">{task.assignee.name}</span>
          </div>
        )}
      </div>
    </div>
  );
}
