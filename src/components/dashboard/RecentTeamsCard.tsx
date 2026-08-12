'use client';

import Link from 'next/link';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import { Team } from '@/src/types/team';

interface Props {
  teams: Team[];
}

export default function RecentTeamsCard({
  teams,
}: Props) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Teams</CardTitle>

        <Link href="/teams">
          <Button size="sm">
            View All
          </Button>
        </Link>
      </CardHeader>

      <CardContent>
        {teams.length === 0 ? (
          <div className="py-8 text-center text-muted-foreground">
            No teams found.
          </div>
        ) : (
          <div className="space-y-3">
            {teams.map((team) => (
              <Link
                key={team.id}
                href={`/teams/${team.id}`}
              >
                <div className="rounded-lg border p-4 transition hover:bg-muted/40">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">
                        {team.name}
                      </h3>

                      <p className="text-sm text-muted-foreground">
                        @{team.slug}
                      </p>
                    </div>

                    <Button
                      size="sm"
                      variant="outline"
                    >
                      Open
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}