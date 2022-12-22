import { useReducer } from 'react';

import './App.css';
import { AppStateContext, DispatchContext } from './utilities/Contexts';
import { initialState, reducer } from './utilities/AppReducer';
import Router from './components/Router';

function App() {
  /***************************************************************
  //  global application state
  //  see AppReducer.ts for information
  ****************************************************************/
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <AppStateContext.Provider value={state}>
        <Router />
      </AppStateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
