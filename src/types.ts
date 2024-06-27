export interface UserProfile {
  id?: string;
  username?: string;
  phone?: string;
  email?: string;
}

export const userProfileFormSchema = [
  {
    label: '用户名',
    field: 'username',
  },
  {
    label: '手机号',
    field: 'phone',
  },
  {
    label: '邮箱',
    field: 'email',
  },
];
