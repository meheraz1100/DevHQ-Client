'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { useCreateTask } from '@/src/hooks/use-create-task';

interface Props {
  teamId: string;
  projectId: string;
  columnId: string;
}

interface FormData {
  title: string;
  description?: string;
}

export default function CreateTaskDialog({
  teamId,
  projectId,
  columnId,
}: Props) {
  const [open, setOpen] =
    useState(false);

  const mutation =
    useCreateTask(
      teamId,
      projectId,
    );

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<FormData>();

  const onSubmit = async (
    values: FormData,
  ) => {
    await mutation.mutateAsync({
      ...values,
      columnId,
    });

    reset();

    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger render={<Button
          variant="outline"
          className="w-full"
        >
          + Add Task
        </Button>}>
        
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Create Task
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(
            onSubmit,
          )}
          className="space-y-4"
        >
          <Input
            placeholder="Task title"
            {...register('title')}
          />

          <Input
            placeholder="Description"
            {...register(
              'description',
            )}
          />

          <Button
            className="w-full"
            type="submit"
            disabled={
              mutation.isPending
            }
          >
            {mutation.isPending
              ? 'Creating...'
              : 'Create Task'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}