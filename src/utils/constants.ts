import { v1 } from 'routes/v1/config';
import type { TypeMenu } from 'types/types';

export const menu: TypeMenu[] = [
  { id: 1, name: 'Dashboard', to: v1.dashboard },
  { id: 2, name: 'Users', to: v1.users },
  { id: 3, name: 'Products', to: v1.products },
  { id: 4, name: 'Orders', to: v1.orders },
  { id: 5, name: 'Categories', to: v1.categories },
  { id: 6, name: 'Settings', to: v1.settings }
];
