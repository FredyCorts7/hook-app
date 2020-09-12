import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';
import '@testing-library/jest-dom';

describe('Testing to customHook useFetch', () => {
  test('should return default information', () => {
    const { result } = renderHook(() =>
      useFetch(`https://www.breakingbadapi.com/api/quotes/1`)
    );
    const { data, loading, error } = result.current;

    expect(data).toBeNull();
    expect(loading).toBeTruthy();
    expect(error).toBeNull();
  });

  test('should has the wanted info, loading in false and error in null', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(`https://www.breakingbadapi.com/api/quotes/1`)
    );
    await waitForNextUpdate();
    const { data, loading, error } = result.current;

    expect(data.length).toBe(1);
    expect(loading).toBeFalsy();
    expect(error).toBeNull();
  });

  test('should handle error', async () => {
    const forceError = 'd';
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(`https://www.breakingbadapi.com/api${forceError}/quotes/1`)
    );
    await waitForNextUpdate();
    const { data, loading, error } = result.current;

    expect(data).toBeNull();
    expect(loading).toBeFalsy();
    expect(error).toBe('info could not be loaded');
  });
});
