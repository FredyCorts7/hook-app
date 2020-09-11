import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Testing to customHook useCounter', () => {
  test('should return default values', () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(0);
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.reset).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
  });

  test('should have a specific value', () => {
    const specificValue = 6;
    const { result } = renderHook(() => useCounter(specificValue));

    expect(result.current.counter).toBe(specificValue);
  });

  test('should increment the counter in 1 unit', () => {
    const initialValue = 4;

    const { result } = renderHook(() => useCounter(initialValue));
    const { increment } = result.current;

    act(() => {
      increment();
    });

    const { counter } = result.current;
    expect(counter).toBe(initialValue + 1);
  });

  test('should increment the counter in a factor', () => {
    const initialValue = 4;
    const factor = 6;

    const { result } = renderHook(() => useCounter(initialValue));
    const { increment } = result.current;

    act(() => {
      increment(factor);
    });

    const { counter } = result.current;
    expect(counter).toBe(initialValue + factor);
  });

  test('should decrement the counter in 1 unit', () => {
    const initialValue = 4;

    const { result } = renderHook(() => useCounter(initialValue));
    const { decrement } = result.current;

    act(() => {
      decrement();
    });

    const { counter } = result.current;
    expect(counter).toBe(initialValue - 1);
  });

  test('should decrement the counter in a factor', () => {
    const initialValue = 20;
    const factor = 8;

    const { result } = renderHook(() => useCounter(initialValue));
    const { decrement } = result.current;

    act(() => {
      decrement(factor);
    });

    const { counter } = result.current;
    expect(counter).toBe(initialValue - factor);
  });

  test('should reset to initial value', () => {
    const initialValue = 50;
    const factor = 2;

    const { result } = renderHook(() => useCounter(initialValue));
    const { increment, decrement, reset } = result.current;

    act(() => {
      increment();
      decrement(factor);
      reset();
    });

    const { counter } = result.current;
    expect(counter).toBe(initialValue);
  });
});
