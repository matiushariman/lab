import { useState } from 'react';
import { createContainer } from 'react-tracked';

interface State {
  count: number;
}

const useValue = () =>
  useState<State>({
    count: 0,
  });

export const { useTracked, Provider } = createContainer(useValue);
