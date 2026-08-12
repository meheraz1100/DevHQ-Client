import { ReactNode } from 'react';

import DashboardLayout from '@/src/components/layout/dashboard-layout';

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  );
}