import type { PageKey } from '@/constants';

export interface NavigateEmits {
  navigate: [value: PageKey];
}
