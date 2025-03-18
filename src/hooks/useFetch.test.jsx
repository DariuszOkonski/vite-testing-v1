import { renderHook, act } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import useFetch from './useFetch';
import axios from 'axios';

describe('useFetch V2', () => {
  it('should render initial values', () => {
    const { result } = renderHook(() => useFetch('/todos'));
    const [{ error, isLoading, response }, doFetch] = result.current;

    expect(error).toEqual(null);
    expect(isLoading).toEqual(false);
    expect(response).toEqual(null);
    expect(doFetch).toBeDefined();
  });

  it('should render success values after fetch', async () => {
    const mockResponse = {
      data: [{ id: '1', text: 'foo', isCompleted: false }],
    };
    vi.spyOn(axios, 'request').mockResolvedValue(mockResponse);
    const { result } = renderHook(() => useFetch('/todos'));

    await act(() => {
      result.current[1]();
    });

    const [{ error, isLoading, response }] = result.current;
    expect(error).toEqual(null);
    expect(isLoading).toEqual(false);
    expect(response).toEqual(mockResponse.data);
  });

  it('should render error values after fetch', async () => {
    const mockResponse = {
      response: { data: 'Server error' },
    };
    vi.spyOn(axios, 'request').mockRejectedValue(mockResponse);
    const { result } = renderHook(() => useFetch('/todos'));

    await act(() => {
      result.current[1]();
    });

    const [{ error, isLoading, response }] = result.current;
    expect(error).toEqual('Server error');
    expect(isLoading).toEqual(false);
    expect(response).toEqual(null);
  });
});

describe('useFetch', () => {
  it('should render initial values', () => {
    const { result } = renderHook(() => useFetch('/todos'));
    const [{ response, isLoading, error }, doFetch] = result.current;

    expect(error).toEqual(null);
    expect(isLoading).toEqual(false);
    expect(response).toEqual(null);
    expect(doFetch).toBeDefined();
  });

  it('should render success values after fetch', async () => {
    const mockResponse = {
      data: [{ id: '1', text: 'foo', isCompleted: false }],
    };
    vi.spyOn(axios, 'request').mockResolvedValue(mockResponse);

    const { result } = renderHook(() => useFetch('/todos'));

    await act(async () => {
      await result.current[1]();
    });

    const [{ error, isLoading, response }] = result.current;
    expect(error).toEqual(null);
    expect(isLoading).toEqual(false);
    expect(response).toEqual(mockResponse.data);
  });

  it('should render error values after fetch', async () => {
    const mockResponse = {
      response: { data: 'Server error' },
    };
    vi.spyOn(axios, 'request').mockRejectedValue(mockResponse);
    const { result } = renderHook(() => useFetch('/todos'));

    await act(async () => {
      await result.current[1]();
    });

    const [{ error, isLoading, response }] = result.current;
    expect(error).toBe('Server error');
    expect(isLoading).toBe(false);
    expect(response).toBe(null);
  });
});
