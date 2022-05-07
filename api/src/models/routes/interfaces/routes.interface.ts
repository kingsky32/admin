export interface IRoute {
  uri: string;
  label: string;
  icon?: string;
  parent?: IRoute;
}
