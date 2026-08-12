export interface AdminMemberUser {
  id: string;
  name: string;
  username: string;
  email: string;
  avatar?: string | null;
  isActive: boolean;
  isVerified: boolean;
}

export interface AdminMemberTeam {
  id: string;
  name: string;
  slug: string;
}

export interface AdminMember {
  id: string;
  role: 'OWNER' | 'ADMIN' | 'MEMBER';
  createdAt: string;

  user: AdminMemberUser;
  team: AdminMemberTeam;
}