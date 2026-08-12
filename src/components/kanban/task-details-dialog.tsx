import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Task } from "@/src/types/task";
import EditTaskForm from "./edit-task-form";
import { useState } from "react";
import { Button } from "../ui/button";
import DeleteTaskDialog from "@/src/hooks/delete-task-dialog";

interface Props {
  task: Task;
  teamId: string;
  projectId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function TaskDetailsDialog({ task,
  teamId,
  projectId,
  open,
  onOpenChange, }: Props) {
  const [deleteOpen, setDeleteOpen] = useState(false);

  if (!task) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <Button variant="destructive" onClick={() => setDeleteOpen(true)}>
        Delete Task
      </Button>
      <DeleteTaskDialog
  open={deleteOpen}
  onOpenChange={setDeleteOpen}
  taskId={task.id}
/>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
        </DialogHeader>

        <EditTaskForm
  task={task}
  teamId={teamId}
  projectId={projectId}
  onClose={() => onOpenChange(false)}
/>
      </DialogContent>
    </Dialog>
  );
}
