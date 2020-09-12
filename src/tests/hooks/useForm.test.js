import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';
import '@testing-library/jest-dom';

describe('Testing to customHook useForm', () => {
  const initialForm = {
    name: 'Fredy Cortés',
    email: 'fred.cor.14@gmail.com',
  };

  test('should return a default form', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [values, handleInputChange, reset] = result.current;

    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('should change the value form (change the name)', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Camila',
        },
      });
    });

    const [values] = result.current;
    expect(values).toEqual({ ...initialForm, name: 'Camila' });
  });

  test('should restore the form with reset', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Camila',
        },
      });

      reset();
    });

    const [values] = result.current;
    expect(values).toEqual(initialForm);
  });
});
