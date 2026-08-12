'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { useCreateProject } from '@/src/hooks/use-create-project';

interface Props {
  teamId: string;
}

interface FormData {
  name: string;
  slug: string;
  description?: string;
  color?: string;
}

export default function CreateProjectDialog({
  teamId,
}: Props) {
  const [open, setOpen] = useState(false);

  const mutation = useCreateProject(teamId);

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<FormData>();

  const onSubmit = async (values: FormData) => {
    await mutation.mutateAsync(values);

    reset();
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger render={<Button>Create Project</Button>}>
        
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Create Project
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <Input
            placeholder="Project Name"
            {...register('name')}
          />

          <Input
            placeholder="Slug"
            {...register('slug')}
          />

          <Input
            placeholder="Description"
            {...register('description')}
          />

          <Input
            placeholder="Color (optional)"
            {...register('color')}
          />

          <Button
            type="submit"
            className="w-full"
            disabled={mutation.isPending}
          >
            {mutation.isPending
              ? 'Creating...'
              : 'Create Project'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}