import * as Icons from '@ant-design/icons';

export interface IRoute {
  uri: string;
  label?: string;
  icon?: keyof typeof Icons;
  createdAt: Date;
  updatedAt: Date;
}
