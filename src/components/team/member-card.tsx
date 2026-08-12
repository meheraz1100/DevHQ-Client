import {
  Crown,
  Shield,
  User,
  Trash2,
} from 'lucide-react';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import {
  Card,
  CardContent,
} from '@/components/ui/card';

interface Props {
  member: any;
}

export default function MemberCard({
  member,
}: Props) {
  const initials =
    member.user.name
      ?.split(' ')
      .map((n: string) => n[0])
      .join('')
      .toUpperCase() ?? 'U';

  const roleIcon =
    member.role === 'OWNER' ? (
      <Crown className="h-4 w-4" />
    ) : member.role === 'ADMIN' ? (
      <Shield className="h-4 w-4" />
    ) : (
      <User className="h-4 w-4" />
    );

  return (
    <Card className="transition hover:shadow-md">
      <CardContent className="space-y-5 p-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarFallback>
              {initials}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <h3 className="font-semibold">
              {member.user.name}
            </h3>

            <p className="text-sm text-muted-foreground">
              {member.user.email}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Badge className="flex items-center gap-1">
            {roleIcon}
            {member.role}
          </Badge>

          <span className="text-xs text-muted-foreground">
            Joined{' '}
            {new Date(
              member.createdAt,
            ).toLocaleDateString()}
          </span>
        </div>

        {member.role !== 'OWNER' && (
          <Button
            variant="destructive"
            size="sm"
            className="w-full"
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Remove Member
          </Button>
        )}
      </CardContent>
    </Card>
  );
}