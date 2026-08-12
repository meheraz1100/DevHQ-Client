'use client';

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

import { useAcceptInvitation } from '@/src/hooks/use-accept-invitation';

export default function InvitationPage() {
  const params = useParams();

  const router = useRouter();

  const token = params.token as string;

  const mutation = useAcceptInvitation();

  const handleAccept = async () => {
    await mutation.mutateAsync(token);

    router.push('/teams');
  };

  return (
    <div className="mx-auto mt-32 max-w-md rounded-lg border p-8">
      <h1 className="text-2xl font-bold">
        Team Invitation
      </h1>

      <p className="mt-3 text-muted-foreground">
        You have been invited to join a team.
      </p>

      <Button
        onClick={handleAccept}
        className="mt-6 w-full"
        disabled={mutation.isPending}
      >
        {mutation.isPending
          ? 'Joining...'
          : 'Accept Invitation'}
      </Button>
    </div>
  );
}