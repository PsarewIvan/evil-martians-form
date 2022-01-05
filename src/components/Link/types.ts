import { ReactNode } from 'react';
import { ROUTES } from '../../lib/routes';

export interface LinkProps {
  to: ROUTES;
  children: ReactNode;
}
