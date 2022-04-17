import * as Icons from '@ant-design/icons';

export interface IRoute {
  uri: string;
  label?: string;
  icon?: keyof typeof Icons;
  createdAt: Date;
  updatedAt: Date;
}

export enum Role {
  User = 'user',
  Admin = 'admin',
}

export interface IUser {
  id: string;
  roles: Role[];
  username: string;
  password: string;
}
