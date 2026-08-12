'use client';

import { BadgeCheck, Shield, User, Users } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import { Invitation } from '@/src/types/invitation';

import { useAcceptInvitation } from '@/src/hooks/use-accept-invitation';
import { useDeclineInvitation } from '@/src/hooks/use-decline-invitation';

interface Props {
  invitation: Invitation;
}

export default function InvitationCard({
  invitation,
}: Props) {
  const acceptMutation = useAcceptInvitation();
  const declineMutation = useDeclineInvitation();

  const roleIcon = () => {
    switch (invitation.role) {
      case 'OWNER':
        return <BadgeCheck className="h-4 w-4 text-yellow-500" />;

      case 'ADMIN':
        return <Shield className="h-4 w-4 text-blue-500" />;

      default:
        return <User className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <Card className="transition-all hover:shadow-lg">
      <CardContent className="space-y-5 p-6">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-semibold">
              {invitation.team.name}
            </h2>

            <p className="text-sm text-muted-foreground">
              @{invitation.team.slug}
            </p>
          </div>

          <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Invitation
          </div>
        </div>

        <div className="space-y-3 rounded-lg border bg-muted/30 p-4">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />

            <span className="text-sm">
              Invited by{' '}
              <strong>
                {invitation.invitedBy.name}
              </strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            {roleIcon()}

            <span className="text-sm">
              Role:
              <strong className="ml-1">
                {invitation.role}
              </strong>
            </span>
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            className="flex-1"
            disabled={
              acceptMutation.isPending ||
              declineMutation.isPending
            }
            onClick={() =>
              acceptMutation.mutate(
                invitation.token,
              )
            }
          >
            {acceptMutation.isPending
              ? 'Accepting...'
              : 'Accept'}
          </Button>

          <Button
            variant="destructive"
            className="flex-1"
            disabled={
              acceptMutation.isPending ||
              declineMutation.isPending
            }
            onClick={() =>
              declineMutation.mutate(
                invitation.id,
              )
            }
          >
            {declineMutation.isPending
              ? 'Declining...'
              : 'Decline'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}