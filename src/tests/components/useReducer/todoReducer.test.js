import { todoReducer } from '../../../components/useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';
import '@testing-library/jest-dom';

describe('Testing to todoReducer', () => {
  test('should return default state', () => {
    const state = todoReducer(demoTodos, {});

    expect(state).toEqual(demoTodos);
  });

  test('should add Todo', () => {
    const newTodo = {
      id: 3,
      title: 'learn postgreSQL',
      done: false,
    };
    const state = todoReducer(demoTodos, { type: 'add', payload: newTodo });

    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, newTodo]);
    expect(state.filter((todo) => todo.id === newTodo.id).length).toBe(1);
  });

  test('should delete Todo', () => {
    const todoId = 2;
    const state = todoReducer(demoTodos, { type: 'delete', payload: todoId });

    expect(state.length).toBe(1);
    expect(state).toEqual([demoTodos[0]]);
  });

  test('should do toggle Todo', () => {
    const todoId = 1;
    const state = todoReducer(demoTodos, { type: 'toggle', payload: todoId });

    expect(state.filter((todo) => todo.id === todoId)[0].done).toBeTruthy();
    expect(state[1]).toEqual(demoTodos[1]);
  });
});
