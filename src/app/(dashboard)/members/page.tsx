'use client';

import AdminMembersTable from '@/src/components/admin/AdminMembersTable';
import { useAdminMembers } from '@/src/hooks/use-admin-members';

export default function MembersPage() {
  const {
    data: members = [],
    isLoading,
    isError,
  } = useAdminMembers();

  if (isLoading) {
    return (
      <div className="p-6">
        <p className="text-sm text-muted-foreground">
          Loading members...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-6">
        <p className="text-sm text-red-500">
          Failed to load members.
        </p>
      </div>
    );
  }

  return (
    <main className="space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold">
          Team Members
        </h1>

        <p className="text-sm text-muted-foreground">
          Manage and view members from your teams.
        </p>
      </div>

      <AdminMembersTable members={members} />
    </main>
  );
}