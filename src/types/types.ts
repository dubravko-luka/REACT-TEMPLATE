import type { ENUM_ROUTERS } from './enum';

export type TypeMenu = {
  id: number;
  name: string;
  to: string;
};

export type TypeRouter = {
  [key in ENUM_ROUTERS]: string;
};

export type TypeBreadcrumb = TypeMenu;
