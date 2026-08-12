import { Card, CardContent } from '@/components/ui/card';

interface Props {
  team: any;
}

export default function TeamOverview({
  team,
}: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <Card>
        <CardContent className="p-6">
          <p className="text-sm text-muted-foreground">
            Projects
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {team._count.projects}
          </h2>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <p className="text-sm text-muted-foreground">
            Members
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {team._count.members}
          </h2>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <p className="text-sm text-muted-foreground">
            Owner
          </p>

          <h2 className="mt-2 text-lg font-semibold">
            {team.owner.name}
          </h2>

          <p className="text-sm text-muted-foreground">
            @{team.owner.username}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <p className="text-sm text-muted-foreground">
            Created
          </p>

          <h2 className="mt-2 text-lg font-semibold">
            {new Date(
              team.createdAt,
            ).toLocaleDateString()}
          </h2>
        </CardContent>
      </Card>
    </div>
  );
}