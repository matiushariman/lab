import { createContext } from 'react';

import type { BearStore } from './useBearStore';

export const BearContext = createContext<BearStore | null>(null);
