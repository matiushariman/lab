import { renderHook, act } from '@testing-library/react';
import { createBearStore } from './useBearStore';

describe('useBearStore', () => {
  const useBearStore = createBearStore();

  it('should be initialized as 0', () => {
    const { result } = renderHook(() => useBearStore((state) => state.bears));

    expect(result.current).toEqual(0);
  });

  it('should increase bears by 1', async () => {
    const { result } = renderHook(() => useBearStore((state) => state));

    await act(() => result.current.increase(1));

    expect(result.current.bears).toEqual(1);
  });
});
