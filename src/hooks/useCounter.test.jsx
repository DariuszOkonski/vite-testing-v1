import { renderHook, act, render, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import useCounter from './useCounter';

describe('useCounter', () => {
  it('should render initial count', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it('should render provided count', () => {
    const { result } = renderHook(() => useCounter(10));
    expect(result.current.count).toBe(10);
  });

  it('should increment the count', async () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
