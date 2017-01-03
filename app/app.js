import 'normalize.css/normalize.css';
import 'assets/stylesheets/main.css';
import { createStore } from 'redux';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
  }

  return state;
};

const initialState = 0;

const store = createStore(reducer, initialState);

store.subscribe(() => document.getElementById('counter').innerText = store.getState());

setInterval(() => store.dispatch({ type: 'INC' }), 500);

console.log("Redux started");