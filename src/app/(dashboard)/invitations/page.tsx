'use client';

import InvitationCard from '@/src/components/team/invitation-card';

import { useMyInvitations } from '@/src/hooks/use-my-invitations';

export default function InvitationsPage() {
  const { data, isLoading } =
    useMyInvitations();

  const invitations =
    data?.data ?? [];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Pending Invitations
      </h1>

      {invitations.length === 0 ? (
        <div className="rounded-xl border py-12 text-center">
          No pending invitations.
        </div>
      ) : (
        <div className="grid gap-5 lg:grid-cols-2">
          {invitations.map(
            (invitation: any) => (
              <InvitationCard
                key={invitation.id}
                invitation={invitation}
              />
            ),
          )}
        </div>
      )}
    </div>
  );
}