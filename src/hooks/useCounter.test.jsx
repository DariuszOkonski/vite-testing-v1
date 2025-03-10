import { renderHook, act } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import useCounter from './useCounter';

// describe('useCounter V2', () => {
//   it('should render initial count', () => {
//     const { result } = renderHook(() => useCounter());
//     expect(result.current.count).toEqual(0);
//   });

//   it('should render with given number', () => {
//     const { result } = renderHook(() => useCounter(10));
//     expect(result.current.count).toEqual(10);
//   });

//   it('should increment the count', () => {
//     const { result } = renderHook(() => useCounter(0));
//     act(() => {
//       result.current.increment();
//     });
//     expect(result.current.count).toEqual(1);
//   });
// });

// describe.skip('useCounter V1', () => {
//   it('should render initial count', () => {
//     const { result } = renderHook(() => useCounter());
//     expect(result.current.count).toEqual(0);
//   });

//   it('should render changed initial value', () => {
//     const { result } = renderHook(() => useCounter(10));
//     expect(result.current.count).toEqual(10);
//   });

//   it('should increment the count', () => {
//     const { result } = renderHook(() => useCounter());
//     act(() => {
//       result.current.increment();
//     });
//     expect(result.current.count).toEqual(1);
//   });
// });
