'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from '@/components/ui/alert-dialog';

import { useDeleteTask } from '@/src/hooks/use-delete-task';

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  taskId: string;
}

export default function DeleteTaskDialog({
  open,
  onOpenChange,
  taskId,
}: Props) {
  const { mutate, isPending } = useDeleteTask();

  function handleDelete() {
    mutate(taskId, {
      onSuccess: () => {
        onOpenChange(false);
      },
    });
  }

  return (
    <AlertDialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Delete Task?
          </AlertDialogTitle>

          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={handleDelete}
            disabled={isPending}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}