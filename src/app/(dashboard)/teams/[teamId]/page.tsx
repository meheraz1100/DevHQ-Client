'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import { Button } from '@/components/ui/button';

import { useTeam } from '@/src/hooks/use-team';
import TeamOverview from '@/src/components/team/team-overview';
import RecentProjects from '@/src/components/team/recent-projects';

export default function TeamDetailsPage() {
  const params = useParams();

  const teamId = params.teamId as string;

  const {
    data,
    isLoading,
} = useTeam(teamId);
console.log('team data', data);

  if (isLoading) {
  return <div>Loading...</div>;
}

const team = data?.data;

if (!team) {
  return <div>Team not found.</div>;
}

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          {team.name}
        </h1>

        <p className="mt-2 text-muted-foreground">
          {team.description}
        </p>
        <TeamOverview team={team} />
        <br />
        <RecentProjects team={team} />
      </div>

      <div className="flex gap-4">
        <Link
          href={`/teams/${team.id}/projects`}
          className="bg-primary text-primary-foreground mt-5 flex  items-center justify-center rounded-md px-4 py-2 hover:opacity-90"
        >
          Projects
        </Link>

        <Link
          href={`/teams/${team.id}/members`}
          className="bg-primary text-primary-foreground mt-5  items-center justify-center rounded-md px-4 py-2 hover:opacity-90"
        >
          Members
        </Link>
      </div>
    </div>
  );
}