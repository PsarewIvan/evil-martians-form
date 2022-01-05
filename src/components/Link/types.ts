import { ReactNode } from 'react';
import { ROUTES_LIST } from '../../lib/routes';

export interface LinkProps {
  to: ROUTES_LIST;
  children: ReactNode;
  extend?: boolean;
}
