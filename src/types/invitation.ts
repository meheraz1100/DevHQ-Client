export interface Invitation {
  id: string;

  token: string;

  role: 'OWNER' | 'ADMIN' | 'MEMBER';

  createdAt: string;

  team: {
    id: string;
    name: string;
    slug: string;
  };

  invitedBy: {
    id: string;
    name: string;
    username: string;
    avatar?: string | null;
  };
}