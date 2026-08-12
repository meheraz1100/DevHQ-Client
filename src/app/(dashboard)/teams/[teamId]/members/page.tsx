'use client';

import { useParams } from 'next/navigation';

import InviteMemberDialog from '@/src/components/team/invite-member-dialog';
import MemberCard from '@/src/components/team/member-card';

import { useTeamMembers } from '@/src/hooks/use-team-members';

export default function MembersPage() {
  const params = useParams();

  const teamId = params.teamId as string;

  const {
    data: members = [],
    isLoading,
  } = useTeamMembers(teamId);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Members
        </h1>

        <InviteMemberDialog
          teamId={teamId}
        />
      </div>

      {isLoading ? (
        <div>Loading...</div>
      ) : members.length === 0 ? (
        <div className="rounded-lg border py-12 text-center">
          No members found.
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {members.map((member: any) => (
            <MemberCard
              key={member.id}
              member={member}
            />
          ))}
        </div>
      )}
    </div>
  );
}