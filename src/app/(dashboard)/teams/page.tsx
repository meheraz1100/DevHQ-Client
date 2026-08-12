'use client';

import CreateTeamDialog from '@/src/components/team/create-team-dialog';
import TeamCard from '@/src/components/team/team-card';

import { useTeams } from '@/src/hooks/use-teams';

export default function TeamsPage() {
  const { data, isLoading } = useTeams();

  const teams = data?.data ?? [];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Teams
        </h1>

        <CreateTeamDialog />
      </div>

      {isLoading ? (
        <div>Loading...</div>
      ) : teams.length === 0 ? (
        <div className="rounded-lg border py-12 text-center">
          No teams found.
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {teams.map((team) => (
            <TeamCard
              key={team.id}
              team={team}
            />
          ))}
        </div>
      )}
    </div>
  );
}