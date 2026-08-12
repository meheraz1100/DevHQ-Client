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

import { useCreateColumn } from '@/src/hooks/use-create-column';

interface Props {
  teamId: string;
  projectId: string;
}

export default function CreateColumnDialog({
  teamId,
  projectId,
}: Props) {
  const [open, setOpen] = useState(false);

  const mutation = useCreateColumn(
    teamId,
    projectId,
  );

  const {
    register,
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      color: '',
    },
  });

  const onSubmit = async (values: any) => {
    await mutation.mutateAsync(values);

    reset();

    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger render={<Button>
          + Add Column
        </Button>}>
        
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Create Column
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <Input
            placeholder="Column name"
            {...register('name')}
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
              : 'Create Column'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}