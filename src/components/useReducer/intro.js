const initialState = [
  {
    id: 1,
    todo: 'Escribir el capitulo 3 de la tesis',
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  switch (action?.type) {
    case 'add':
      return [...state, action.payload];
    default:
      return state;
  }
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Escuchar 'Just kiss her'",
  done: true,
};

const addTodoAction = {
  type: 'add',
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.table(todos);
