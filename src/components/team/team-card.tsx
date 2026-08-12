import Link from "next/link";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { cn } from "@/src/utils/cn";


interface Props {
  team: {
    id: string;
    name: string;
    slug: string;
    description?: string;
    members?: {
      role: 'OWNER' | 'ADMIN' | 'MEMBER';
    }[];

    _count: {
      projects: number;
      members: number;
    };
  };
}

export default function TeamCard({ team }: Props) {
  const role = team.members?.[0]?.role;
  return (
    <Card className="transition hover:shadow-md">
      

      <CardContent>
        <div className="flex items-center justify-between">
  <CardTitle>{team.name}</CardTitle>
    
  <span
    className={cn(
      'rounded-full px-3 py-1 text-xs font-semibold',

      role === 'OWNER' &&
        'bg-yellow-100 text-yellow-700',

      role === 'ADMIN' &&
        'bg-blue-100 text-blue-700',

      role === 'MEMBER' &&
        'bg-gray-100 text-gray-700',
    )}
  >
    Your role is 
    {' ' + role + ' '} in this team
  </span>
</div>
        <p className="text-muted-foreground text-sm">@{team.slug}</p>

        {team.description && <p className="mt-3 text-sm">{team.description}</p>}

        <div className="text-muted-foreground mt-4 flex items-center justify-between text-sm">
          <span>📁 {team._count.projects} Projects</span>

          <span>👥 {team._count.members} Members</span>
        </div>

        <Link
          href={`/teams/${team.id}`}
          className="bg-primary text-primary-foreground mt-5 flex w-full items-center justify-center rounded-md px-4 py-2 hover:opacity-90"
        >
          Open Team
        </Link>
      </CardContent>
    </Card>
  );
}
