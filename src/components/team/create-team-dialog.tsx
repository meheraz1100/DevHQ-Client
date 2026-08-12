'use client';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
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

import { useCreateTeam } from '@/src/hooks/use-create-team';

import {
  CreateTeamSchema,
  createTeamSchema,
} from '@/src/validators/team.validators';

export default function CreateTeamDialog() {
  const [open, setOpen] = useState(false);

  const mutation = useCreateTeam();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateTeamSchema>({
    resolver: zodResolver(createTeamSchema),
  });

  const onSubmit = async (
    values: CreateTeamSchema,
  ) => {
    await mutation.mutateAsync(values);

    reset();

    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger render={<Button>Create Team</Button>}>
        
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Create Team
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <div>
            <Input
              placeholder="Team Name"
              {...register('name')}
            />
            <p className="mt-1 text-sm text-red-500">
              {errors.name?.message}
            </p>
          </div>

          <div>
            <Input
              placeholder="Slug"
              {...register('slug')}
            />
            <p className="mt-1 text-sm text-red-500">
              {errors.slug?.message}
            </p>
          </div>

          <div>
            <Input
              placeholder="Description"
              {...register('description')}
            />
          </div>

          <Button
            className="w-full"
            type="submit"
            disabled={mutation.isPending}
          >
            {mutation.isPending
              ? 'Creating...'
              : 'Create Team'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}