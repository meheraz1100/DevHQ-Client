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

import { useInviteMember } from '@/src/hooks/use-invite-member';

interface Props {
  teamId: string;
}

interface FormData {
  username: string;
  role: 'ADMIN' | 'MEMBER';
}

export default function InviteMemberDialog({
  teamId,
}: Props) {
  const [open, setOpen] = useState(false);

  const mutation = useInviteMember(teamId);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      role: 'MEMBER',
    },
  });

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
      <DialogTrigger
        render={
          <Button>
            Invite Member
          </Button>
        }
      />

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Invite Member
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <div className="space-y-2">
            <Input
              placeholder="Username"
              {...register('username', {
                required: 'Username is required',
                pattern: {
                  value: /^[a-zA-Z0-9._]+$/,
                  message:
                    'Only letters, numbers, "." and "_" are allowed.',
                },
              })}
            />

            <p className="text-xs text-muted-foreground">
              Enter the username of user (not email).
            </p>

            {errors.username && (
              <p className="text-sm text-red-500">
                {errors.username.message}
              </p>
            )}
          </div>

          <select
            {...register('role')}
            className="w-full rounded-md border px-3 py-2"
          >
            <option value="MEMBER">
              Member
            </option>

            <option value="ADMIN">
              Admin
            </option>
          </select>

          <Button
            type="submit"
            className="w-full"
            disabled={mutation.isPending}
          >
            {mutation.isPending
              ? 'Sending...'
              : 'Send Invitation'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}