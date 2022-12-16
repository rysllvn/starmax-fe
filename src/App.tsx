import { useReducer } from 'react';
// https://github.com/remix-run/react-router/tree/dev/examples

import './App.css';
import { AuthContext, CartContext, DispatchContext } from './utilities/Contexts';
import { initialState, reducer } from './utilities/AppReducer';
import Router from './components/Router';

function App() {
  /***************************************************************
  //  global application state
  //  see AppReducer for information
  ****************************************************************/
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <CartContext.Provider value={state.cart}>
        <AuthContext.Provider value={state.userData}>
          <Router />
        </AuthContext.Provider>
      </CartContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
