'use client';

import Image from 'next/image';
import { AdminMember } from '@/src/types/admin-member';

interface Props {
  members: AdminMember[];
}

export default function AdminMembersTable({
  members,
}: Props) {
  if (!members.length) {
    return (
      <div className="rounded-xl border p-8 text-center">
        <p className="text-sm text-muted-foreground">
          No team members found.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border bg-background">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b bg-muted/50">
            <tr>
              <th className="px-6 py-4 text-left font-medium">
                Member
              </th>

              <th className="px-6 py-4 text-left font-medium">
                Username
              </th>

              <th className="px-6 py-4 text-left font-medium">
                Team
              </th>

              <th className="px-6 py-4 text-left font-medium">
                Role
              </th>

              <th className="px-6 py-4 text-left font-medium">
                Status
              </th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {members.map((member) => (
              <tr
                key={member.id}
                className="transition hover:bg-muted/30"
              >
                {/* Member */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    {member.user.avatar ? (
                      <Image
                        src={member.user.avatar}
                        alt={member.user.name}
                        width={36}
                        height={36}
                        className="h-9 w-9 rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted font-semibold">
                        {member.user.name
                          .charAt(0)
                          .toUpperCase()}
                      </div>
                    )}

                    <div>
                      <p className="font-medium">
                        {member.user.name}
                      </p>

                      <p className="text-xs text-muted-foreground">
                        {member.user.email}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Username */}
                <td className="px-6 py-4">
                  @{member.user.username}
                </td>

                {/* Team */}
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium">
                      {member.team.name}
                    </p>

                    <p className="text-xs text-muted-foreground">
                      {member.team.slug}
                    </p>
                  </div>
                </td>

                {/* Role */}
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                      member.role === 'OWNER'
                        ? 'bg-purple-100 text-purple-700'
                        : member.role === 'ADMIN'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {member.role}
                  </span>
                </td>

                {/* Status */}
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                      member.user.isActive
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {member.user.isActive
                      ? 'Active'
                      : 'Inactive'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}